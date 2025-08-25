import supabase from '@/lib/supabase';
import { NextRequest, NextResponse } from 'next/server';

export async function POST(req: Request) {
  try {
    const data = await req.json();
    
    // Validate required fields
    const requiredFields = [
      'fullName', 'email', 'phone', 'country', 'state', 'district', 
      'address', 'gender', 'professionalStatus', 'areaOfInterest', 
      'positionApplied', 'resume', 'linkedinProfile', 'agreement'
    ];
    
    for (const field of requiredFields) {
      if (!data[field]) {
        return NextResponse.json(
          { success: false, error: `${field} is required` }, 
          { status: 400 }
        );
      }
    }
    
    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(data.email)) {
      return NextResponse.json(
        { success: false, error: 'Invalid email format' }, 
        { status: 400 }
      );
    }
    
    // Validate phone format
    const phoneRegex = /^[+]?[\d\s\-\(\)]{10,15}$/;
    if (!phoneRegex.test(data.phone)) {
      return NextResponse.json(
        { success: false, error: 'Invalid phone number format' }, 
        { status: 400 }
      );
    }
    
    // Validate Google Drive link for resume
    if (!data.resume.includes('drive.google.com')) {
      return NextResponse.json(
        { success: false, error: 'Resume must be a valid Google Drive link' }, 
        { status: 400 }
      );
    }
    
    // Validate LinkedIn URL
    if (!data.linkedinProfile.includes('linkedin.com')) {
      return NextResponse.json(
        { success: false, error: 'LinkedIn profile must be a valid LinkedIn URL' }, 
        { status: 400 }
      );
    }
    
    // Validate CGPA if provided
    if (data.cgpa && (parseFloat(data.cgpa) < 0 || parseFloat(data.cgpa) > 10)) {
      return NextResponse.json(
        { success: false, error: 'CGPA must be between 0 and 10' }, 
        { status: 400 }
      );
    }
    
    // Conditional validation based on professional status
    if (data.professionalStatus === 'student') {
      const studentRequiredFields = ['institutionName', 'degree', 'department', 'currentYear'];
      for (const field of studentRequiredFields) {
        if (!data[field]) {
          return NextResponse.json(
            { success: false, error: `${field} is required for students` }, 
            { status: 400 }
          );
        }
      }
    }
    
    if (data.professionalStatus === 'fresher' || data.professionalStatus === 'working') {
      if (!data.degreeCompleted) {
        return NextResponse.json(
          { success: false, error: 'Degree completion status is required' }, 
          { status: 400 }
        );
      }
      
      if (data.professionalStatus === 'working') {
        if (!data.workExperience || !data.currentCompany) {
          return NextResponse.json(
            { success: false, error: 'Work experience and current company are required for working professionals' }, 
            { status: 400 }
          );
        }
      }
    }
    
    // Insert data into Supabase
    const { error } = await supabase.from('careers_applications').insert([
  {
    full_name: data.fullName,
    age: data.age || 0,
    dob: data.dob || '1900-01-01',
    email: data.email,
    phone: data.phone,
    country: data.country,
    state: data.state,
    district: data.district,
    address: data.address,
    gender: data.gender,
    professional_status: data.professionalStatus,

    institution_name: data.institutionName || 'Not Applicable',
    degree: data.degree || 'Not Applicable',
    department: data.department || 'Not Applicable',
    current_year: data.currentYear || 0,

    

    degree_completed:
      data.degreeCompleted === 'yes'
        ? 'yes'
        : data.degreeCompleted === 'no'
        ? 'no'
        : null,
    cgpa: data.cgpa ? parseFloat(data.cgpa) : null,
    work_experience: data.workExperience ||  'Not Provided',
    current_company: data.currentCompany ||  'Not Provided',

    area_of_interest: data.areaOfInterest,
    position_applied: data.positionApplied,

    resume: data.resume,
    linkedin_profile: data.linkedinProfile,
    github_profile: data.githubProfile || 'Not Provided',
  
    portfolio: data.portfolio ||  'Not Provided',
    referral_id: data.referralId ||  'Not Provided',

    agreement: data.agreement,
    created_at: new Date().toISOString(),
    status: 'pending'
  }
]);


    if (error) {
      console.error('Supabase error:', error);
      return NextResponse.json(
        { success: false, error: error.message }, 
        { status: 400 }
      );
    }

    return NextResponse.json(
      { success: true, message: 'Application submitted successfully' }, 
      { status: 200 }
    );
    
  } catch (err: any) {
    console.error('Server error:', err);
    return NextResponse.json(
      { success: false, error: 'Internal server error' }, 
      { status: 500 }
    );
  }
}