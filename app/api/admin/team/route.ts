// app/api/admin/team/route.ts - IMPROVED VERSION
import { NextRequest, NextResponse } from 'next/server';
import { createClient } from '@supabase/supabase-js';

// Initialize Supabase client
const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!;
const supabaseServiceKey = process.env.SUPABASE_SERVICE_ROLE_KEY!;
const supabase = createClient(supabaseUrl, supabaseServiceKey);

// Add CORS headers
const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE, OPTIONS',
  'Access-Control-Allow-Headers': 'Content-Type, Authorization',
};

// Handle OPTIONS requests for CORS
export async function OPTIONS() {
  return NextResponse.json({}, { headers: corsHeaders });
}

// GET /api/admin/team - Get all teams
export async function GET(request: NextRequest) {
  try {
    console.log('GET /api/admin/team - Request received');
    
    const { data: teams, error } = await supabase
      .from('teams')
      .select('*')
      .order('created_at', { ascending: false });

    if (error) {
      console.error('Error fetching teams:', error);
      return NextResponse.json(
        { error: error.message }, 
        { status: 500, headers: corsHeaders }
      );
    }

    console.log('GET /api/admin/team - Success:', teams.length, 'teams found');
    return NextResponse.json(teams, { headers: corsHeaders });
  } catch (error) {
    console.error('Unexpected error:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500, headers: corsHeaders }
    );
  }
}

// POST /api/admin/team - Create a new team
export async function POST(request: NextRequest) {
  try {
    console.log('POST /api/admin/team - Request received');
    
    // Check if request body exists
    let body;
    try {
      body = await request.json();
      console.log('Request body:', body);
    } catch (parseError) {
      console.error('Error parsing request body:', parseError);
      return NextResponse.json(
        { error: 'Invalid JSON in request body' },
        { status: 400, headers: corsHeaders }
      );
    }
    
    const { name, description } = body;

    if (!name) {
      console.error('Validation error: Team name is required');
      return NextResponse.json(
        { error: 'Team name is required' },
        { status: 400, headers: corsHeaders }
      );
    }

    // Get the current user from the session
    const authHeader = request.headers.get('Authorization');
    console.log('Authorization header:', authHeader ? 'Present' : 'Missing');
    
    if (!authHeader) {
      console.error('Authorization error: No authorization header');
      return NextResponse.json(
        { error: 'Unauthorized' }, 
        { status: 401, headers: corsHeaders }
      );
    }

    const jwt = authHeader.replace('Bearer ', '');
    const { data: userData, error: userError } = await supabase.auth.getUser(jwt);
    
    if (userError || !userData.user) {
      console.error('Authorization error: Invalid token', userError);
      return NextResponse.json(
        { error: 'Unauthorized' }, 
        { status: 401, headers: corsHeaders }
      );
    }

    console.log('Authenticated user:', userData.user.id);

    // Create the team
    const { data: team, error: teamError } = await supabase
      .from('teams')
      .insert([{ name, description }])
      .select()
      .single();

    if (teamError) {
      console.error('Error creating team:', teamError);
      return NextResponse.json(
        { error: teamError.message }, 
        { status: 500, headers: corsHeaders }
      );
    }

    console.log('Team created:', team.id);

    // Add the creator as an admin member
    const { error: memberError } = await supabase
      .from('team_members')
      .insert([{ 
        team_id: team.id, 
        user_id: userData.user.id, 
        role: 'admin' 
      }]);

    if (memberError) {
      console.error('Error adding team member:', memberError);
      // Roll back team creation if member addition fails
      await supabase.from('teams').delete().eq('id', team.id);
      return NextResponse.json(
        { error: memberError.message }, 
        { status: 500, headers: corsHeaders }
      );
    }

    console.log('Team member added successfully');
    return NextResponse.json(team, { status: 201, headers: corsHeaders });
  } catch (error) {
    console.error('Unexpected error:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500, headers: corsHeaders }
    );
  }
}

// PUT /api/admin/team - Update a team
export async function PUT(request: NextRequest) {
  try {
    console.log('PUT /api/admin/team - Request received');
    
    let body;
    try {
      body = await request.json();
      console.log('Request body:', body);
    } catch (parseError) {
      console.error('Error parsing request body:', parseError);
      return NextResponse.json(
        { error: 'Invalid JSON in request body' },
        { status: 400, headers: corsHeaders }
      );
    }
    
    const { id, name, description } = body;

    if (!id) {
      console.error('Validation error: Team ID is required');
      return NextResponse.json(
        { error: 'Team ID is required' }, 
        { status: 400, headers: corsHeaders }
      );
    }

    if (!name) {
      console.error('Validation error: Team name is required');
      return NextResponse.json(
        { error: 'Team name is required' },
        { status: 400, headers: corsHeaders }
      );
    }

    // Check if user has permission to update this team
    const authHeader = request.headers.get('Authorization');
    console.log('Authorization header:', authHeader ? 'Present' : 'Missing');
    
    if (!authHeader) {
      console.error('Authorization error: No authorization header');
      return NextResponse.json(
        { error: 'Unauthorized' }, 
        { status: 401, headers: corsHeaders }
      );
    }

    const jwt = authHeader.replace('Bearer ', '');
    const { data: userData, error: userError } = await supabase.auth.getUser(jwt);
    
    if (userError || !userData.user) {
      console.error('Authorization error: Invalid token', userError);
      return NextResponse.json(
        { error: 'Unauthorized' }, 
        { status: 401, headers: corsHeaders }
      );
    }

    console.log('Authenticated user:', userData.user.id);

    // Verify user is an admin of the team
    const { data: memberCheck, error: memberCheckError } = await supabase
      .from('team_members')
      .select('role')
      .eq('team_id', id)
      .eq('user_id', userData.user.id)
      .single();

    if (memberCheckError || !memberCheck || memberCheck.role !== 'admin') {
      console.error('Permission error: User is not an admin of the team');
      return NextResponse.json(
        { error: 'You do not have permission to update this team' },
        { status: 403, headers: corsHeaders }
      );
    }

    // Update the team
    const { data: team, error: teamError } = await supabase
      .from('teams')
      .update({ 
        name, 
        description, 
        updated_at: new Date().toISOString() 
      })
      .eq('id', id)
      .select()
      .single();

    if (teamError) {
      console.error('Error updating team:', teamError);
      return NextResponse.json(
        { error: teamError.message }, 
        { status: 500, headers: corsHeaders }
      );
    }

    console.log('Team updated successfully:', team.id);
    return NextResponse.json(team, { headers: corsHeaders });
  } catch (error) {
    console.error('Unexpected error:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500, headers: corsHeaders }
    );
  }
}

// DELETE /api/admin/team - Delete a team
export async function DELETE(request: NextRequest) {
  try {
    console.log('DELETE /api/admin/team - Request received');
    
    const { searchParams } = new URL(request.url);
    const id = searchParams.get('id');
    console.log('Team ID to delete:', id);

    if (!id) {
      console.error('Validation error: Team ID is required');
      return NextResponse.json(
        { error: 'Team ID is required' }, 
        { status: 400, headers: corsHeaders }
      );
    }

    // Check if user has permission to delete this team
    const authHeader = request.headers.get('Authorization');
    console.log('Authorization header:', authHeader ? 'Present' : 'Missing');
    
    if (!authHeader) {
      console.error('Authorization error: No authorization header');
      return NextResponse.json(
        { error: 'Unauthorized' }, 
        { status: 401, headers: corsHeaders }
      );
    }

    const jwt = authHeader.replace('Bearer ', '');
    const { data: userData, error: userError } = await supabase.auth.getUser(jwt);
    
    if (userError || !userData.user) {
      console.error('Authorization error: Invalid token', userError);
      return NextResponse.json(
        { error: 'Unauthorized' }, 
        { status: 401, headers: corsHeaders }
      );
    }

    console.log('Authenticated user:', userData.user.id);

    // Verify user is an admin of the team
    const { data: memberCheck, error: memberCheckError } = await supabase
      .from('team_members')
      .select('role')
      .eq('team_id', id)
      .eq('user_id', userData.user.id)
      .single();

    if (memberCheckError || !memberCheck || memberCheck.role !== 'admin') {
      console.error('Permission error: User is not an admin of the team');
      return NextResponse.json(
        { error: 'You do not have permission to delete this team' },
        { status: 403, headers: corsHeaders }
      );
    }

    // Delete the team (cascade will handle related records)
    const { error: deleteError } = await supabase
      .from('teams')
      .delete()
      .eq('id', id);

    if (deleteError) {
      console.error('Error deleting team:', deleteError);
      return NextResponse.json(
        { error: deleteError.message }, 
        { status: 500, headers: corsHeaders }
      );
    }

    console.log('Team deleted successfully:', id);
    return NextResponse.json(
      { message: 'Team deleted successfully' },
      { headers: corsHeaders }
    );
  } catch (error) {
    console.error('Unexpected error:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500, headers: corsHeaders }
    );
  }
}