import { createClient } from '@supabase/supabase-js'
import { NextRequest, NextResponse } from 'next/server'

// Initialize Supabase client
const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!
const supabaseServiceKey = process.env.SUPABASE_SERVICE_ROLE_KEY!

const supabase = createClient(supabaseUrl, supabaseServiceKey)

interface WaitlistData {
  name: string
  email: string
  phone?: string | null
  category: string
  institute?: string | null
  class_year?: string | null
  country: string
  state: string
}

export async function POST(request: NextRequest) {
  try {
    const body: WaitlistData = await request.json()

    // Validate required fields
    if (!body.name || !body.email || !body.category || !body.country) {
      return NextResponse.json(
        { error: 'Missing required fields: name, email, category, country are required' },
        { status: 400 }
      )
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(body.email)) {
      return NextResponse.json(
        { error: 'Invalid email format' },
        { status: 400 }
      )
    }

    // Check if email already exists
    const { data: existingUser, error: checkError } = await supabase
      .from('kuttai_waitlist')
      .select('email')
      .eq('email', body.email)
      .single()

    if (checkError && checkError.code !== 'PGRST116') {
      // PGRST116 is "not found" error, which is what we want
      console.error('Database check error:', checkError)
      return NextResponse.json(
        { error: 'Database error occurred while checking email' },
        { status: 500 }
      )
    }

    if (existingUser) {
      return NextResponse.json(
        { error: 'Email already registered in the waitlist' },
        { status: 409 }
      )
    }

    // Insert new waitlist entry
    const { data, error: insertError } = await supabase
      .from('kuttai_waitlist')
      .insert([
        {
          name: body.name.trim(),
          email: body.email.toLowerCase().trim(),
          phone: body.phone?.trim() || null,
          category: body.category,
          institute: body.institute?.trim() || null,
          class_year: body.class_year || null,
          country: body.country,
          state: body.state.trim(),
          created_at: new Date().toISOString(),
          status: 'pending' // Add status field for tracking
        }
      ])
      .select()

    if (insertError) {
      console.error('Insert error:', insertError)
      return NextResponse.json(
        { error: 'Failed to register for waitlist. Please try again.' },
        { status: 500 }
      )
    }

    // Optional: Send welcome email (you can implement this later)
    // await sendWelcomeEmail(body.email, body.name)

    return NextResponse.json(
      { 
        message: 'Successfully registered for KuttAI Beta Program!',
        data: data?.[0]
      },
      { status: 201 }
    )

  } catch (error) {
    console.error('API error:', error)
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    )
  }
}

// Get waitlist stats (optional endpoint for admin)
export async function GET() {
  try {
    const { data, error } = await supabase
      .from('kuttai_waitlist')
      .select('id, created_at, category, country, state')

    if (error) {
      throw error
    }

    // Calculate stats
    const totalRegistrations = data?.length || 0
    const categoryStats = data?.reduce((acc: any, item) => {
      acc[item.category] = (acc[item.category] || 0) + 1
      return acc
    }, {})

    const countryStats = data?.reduce((acc: any, item) => {
      acc[item.country] = (acc[item.country] || 0) + 1
      return acc
    }, {})

    return NextResponse.json({
      totalRegistrations,
      categoryStats,
      countryStats,
      lastUpdated: new Date().toISOString()
    })

  } catch (error) {
    console.error('Stats error:', error)
    return NextResponse.json(
      { error: 'Failed to fetch stats' },
      { status: 500 }
    )
  }
}