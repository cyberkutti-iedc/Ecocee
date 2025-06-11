// app/api/intern/route.ts

import supabase from '@/lib/supabase';
import { NextRequest, NextResponse } from 'next/server';

export async function POST(req: Request) {
  try {
    const data = await req.json();

    const { error } = await supabase.from('careers_applications').insert([
      {
        full_name: data.fullName,
        age: isNaN(parseInt(data.age)) ? null : parseInt(data.age),
        dob: data.dob,
        email: data.email,
        phone: data.phone,
        country: data.country,
        state: data.state,
        district: data.district,
        address: data.address,
        gender: data.gender,
        institution_name: data.institutionName,
        degree: data.degree,
        department: data.department,
        current_year: data.currentYear,
        area_of_interest: data.areaOfInterest,
        institute_id: data.instituteId || null,
        approval_letter: data.approvalLetter || null,
        resume: data.resume,
        linkedin_profile: data.linkedinProfile,
        github_profile: data.githubProfile,
        portfolio: data.portfolio || null,
        referral_id: data.referralId || null,
        position_applied: data.positionApplied,
        agreement: data.agreement,
      }
    ]);

    if (error) {
      console.error(error);
      return NextResponse.json({ success: false, error: error.message }, { status: 400 });
    }

    return NextResponse.json({ success: true }, { status: 200 });
  } catch (err: any) {
    return NextResponse.json({ success: false, error: err.message }, { status: 500 });
  }
}
