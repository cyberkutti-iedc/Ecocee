// import { NextRequest, NextResponse } from 'next/server';
// import { ID } from 'appwrite';
// import { databases } from '@/lib/appwrite'; // adjust based on your path

// const DB_ID = process.env.NEXT_PUBLIC_APPWRITE_DATABASE_ID!;
// const COLLECTION_ID = process.env.NEXT_PUBLIC_APPWRITE_INTERN_COLLECTION_ID!;

// export async function POST(request: NextRequest) {
//   try {
//     const formData = await request.json();

//     const newDocument = await databases.createDocument(
//       DB_ID,
//       COLLECTION_ID,
//       ID.unique(),
//       formData
//     );

//     return NextResponse.json({ success: true, document: newDocument });
//   } catch (error: any) {
//     console.error('Error saving intern data:', error);
//     return NextResponse.json({ success: false, error: error.message }, { status: 500 });
//   }
// }


// app/api/intern/route.ts

import supabase from '@/lib/supabase';
import { auth } from '@clerk/nextjs/server';
import { NextRequest, NextResponse } from 'next/server';

export async function POST(req: Request) {
  try {
    const data = await req.json();

    const { error } = await supabase.from('careers_applications').insert([
      {
        full_name: data.fullName,
        age: parseInt(data.age),
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


