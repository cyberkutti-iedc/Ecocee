import { NextRequest, NextResponse } from 'next/server';
import { createClient } from '@supabase/supabase-js';
import { getAuth } from '@clerk/nextjs/server';
import { z } from 'zod';

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
);

// Zod schema for product update validation
const productUpdateSchema = z.object({
  title: z.string().min(3).max(100).optional(),
  description: z.string().min(10).max(1000).optional(),
  headerImage: z.string().url().optional(),
  images: z.array(z.string().url()).optional(),
  video: z.string().url().optional(),
  techStack: z.array(z.string()).optional(),
  category: z.enum(['embedded', 'ai', 'prototype']).optional(),
  featured: z.boolean().optional()
});

// CORS headers
const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE, OPTIONS',
  'Access-Control-Allow-Headers': 'Content-Type, Authorization',
};

// OPTIONS handler for CORS
export async function OPTIONS() {
  return NextResponse.json({}, { headers: corsHeaders });
}

// Type definitions
interface ProductUpdateData {
  title?: string;
  description?: string;
  header_image?: string;
  images?: string[];
  video?: string;
  tech_stack?: string[];
  category?: string;
  featured?: boolean;
  updated_at: string;
}

// GET handler
export async function GET(
  req: NextRequest,
  context: { params: Promise<{ id: string }> }
): Promise<NextResponse> {
  try {
    console.log('GET product request received');
    
    const { sessionClaims } = getAuth(req);
    console.log('Session claims:', sessionClaims);

    if (!sessionClaims || sessionClaims.metadata?.status !== "admin") {
      console.log('Unauthorized access attempt');
      return NextResponse.json(
        { success: false, message: "Unauthorized" },
        { 
          status: 403,
          headers: corsHeaders
        }
      );
    }

    const params = await context.params;
    console.log('Fetching product ID:', params.id);

    const { data, error } = await supabase
      .from('products')
      .select('*')
      .eq('id', params.id)
      .single();

    if (error) {
      console.error('Supabase error:', error);
      return NextResponse.json(
        { 
          success: false, 
          message: error.message,
          error: error.message 
        },
        { 
          status: 500,
          headers: corsHeaders
        }
      );
    }

    if (!data) {
      console.log('Product not found:', params.id);
      return NextResponse.json(
        { success: false, message: 'Product not found' },
        { 
          status: 404,
          headers: corsHeaders
        }
      );
    }

    console.log('Product fetched successfully:', data);
    return NextResponse.json(
      { success: true, data, message: 'Product fetched successfully' },
      { headers: corsHeaders }
    );
  } catch (err) {
    console.error('GET request failed:', err);
    return NextResponse.json(
      { 
        success: false, 
        message: 'Internal server error',
        error: err instanceof Error ? err.message : 'Unknown error'
      },
      { 
        status: 500,
        headers: corsHeaders
      }
    );
  }
}

// PATCH handler
export async function PATCH(
  req: NextRequest,
  context: { params: Promise<{ id: string }> }
): Promise<NextResponse> {
  try {
    console.log('PATCH product request received');
    
    const { sessionClaims } = getAuth(req);
    console.log('Session claims:', sessionClaims);

    if (!sessionClaims || sessionClaims.metadata?.status !== "admin") {
      console.log('Unauthorized access attempt');
      return NextResponse.json(
        { success: false, message: "Unauthorized" },
        { 
          status: 403,
          headers: corsHeaders
        }
      );
    }

    const body = await req.json();
    console.log('Update data:', body);

    // Validate input data
    const validationResult = productUpdateSchema.safeParse(body);
    if (!validationResult.success) {
      console.log('Validation failed:', validationResult.error.errors);
      return NextResponse.json(
        { 
          success: false, 
          message: 'Invalid product data',
          errors: validationResult.error.errors 
        },
        { 
          status: 400,
          headers: corsHeaders
        }
      );
    }

    const validatedData = validationResult.data;
    const updateData: ProductUpdateData = {
      updated_at: new Date().toISOString(),
      ...(validatedData.title && { title: validatedData.title }),
      ...(validatedData.description && { description: validatedData.description }),
      ...(validatedData.headerImage && { header_image: validatedData.headerImage }),
      ...(validatedData.images && { images: validatedData.images }),
      ...(validatedData.video && { video: validatedData.video }),
      ...(validatedData.techStack && { tech_stack: validatedData.techStack }),
      ...(validatedData.category && { category: validatedData.category }),
      ...(typeof validatedData.featured !== 'undefined' && { featured: validatedData.featured })
    };

    const params = await context.params;
    console.log('Updating product ID:', params.id, 'with data:', updateData);

    const { data, error } = await supabase
      .from('products')
      .update(updateData)
      .eq('id', params.id)
      .select()
      .single();

    if (error) {
      console.error('Supabase update error:', error);
      return NextResponse.json(
        { 
          success: false, 
          message: error.message,
          error: error.message 
        },
        { 
          status: 500,
          headers: corsHeaders
        }
      );
    }

    console.log('Product updated successfully:', data);
    return NextResponse.json(
      { success: true, data, message: 'Product updated successfully' },
      { headers: corsHeaders }
    );
  } catch (err) {
    console.error('PATCH request failed:', err);
    return NextResponse.json(
      { 
        success: false, 
        message: 'Internal server error',
        error: err instanceof Error ? err.message : 'Unknown error'
      },
      { 
        status: 500,
        headers: corsHeaders
      }
    );
  }
}

// DELETE handler
export async function DELETE(
  req: NextRequest,
  context: { params: Promise<{ id: string }> }
): Promise<NextResponse> {
  try {
    console.log('DELETE product request received');
    
    const { sessionClaims } = getAuth(req);
    console.log('Session claims:', sessionClaims);

    if (!sessionClaims || sessionClaims.metadata?.status !== "admin") {
      console.log('Unauthorized access attempt');
      return NextResponse.json(
        { success: false, message: "Unauthorized" },
        { 
          status: 403,
          headers: corsHeaders
        }
      );
    }

    const params = await context.params;
    console.log('Deleting product ID:', params.id);

    // Check product existence
    const { data: existingProduct, error: fetchError } = await supabase
      .from('products')
      .select('id, images, header_image')
      .eq('id', params.id)
      .single();

    if (fetchError || !existingProduct) {
      console.log('Product not found:', params.id);
      return NextResponse.json(
        { success: false, message: 'Product not found' },
        { 
          status: 404,
          headers: corsHeaders
        }
      );
    }

    // Delete associated images
    const imagesToDelete = [
      existingProduct.header_image,
      ...(existingProduct.images || [])
    ].filter(Boolean);

    console.log('Images to delete:', imagesToDelete);

    await Promise.all(
      imagesToDelete.map(async (imageUrl) => {
        if (imageUrl && imageUrl.includes('supabase')) {
          try {
            const fileName = imageUrl.split('/').pop();
            if (fileName) {
              const { error: storageError } = await supabase.storage
                .from('product-images')
                .remove([fileName]);
              
              if (storageError) {
                console.warn('Image deletion failed:', fileName, storageError);
              } else {
                console.log('Image deleted successfully:', fileName);
              }
            }
          } catch (storageError) {
            console.warn('Image deletion error:', imageUrl, storageError);
          }
        }
      })
    );

    // Delete product record
    const { error } = await supabase
      .from('products')
      .delete()
      .eq('id', params.id);

    if (error) {
      console.error('Supabase delete error:', error);
      return NextResponse.json(
        { 
          success: false, 
          message: error.message,
          error: error.message 
        },
        { 
          status: 500,
          headers: corsHeaders
        }
      );
    }

    console.log('Product deleted successfully:', params.id);
    return NextResponse.json(
      { success: true, message: 'Product deleted successfully' },
      { headers: corsHeaders }
    );
  } catch (err) {
    console.error('DELETE request failed:', err);
    return NextResponse.json(
      { 
        success: false, 
        message: 'Internal server error',
        error: err instanceof Error ? err.message : 'Unknown error'
      },
      { 
        status: 500,
        headers: corsHeaders
      }
    );
  }
}