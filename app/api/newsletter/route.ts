import { NextRequest, NextResponse } from 'next/server';

export async function POST(request: NextRequest) {
  try {
    const { email } = await request.json();

    if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      return NextResponse.json({ error: 'Valid email required' }, { status: 400 });
    }

    // Here you would integrate with your email service (Mailchimp, EmailJS, etc.)
    // For demo, simulate success (replace with real email service in production)
    // await fetch('YOUR_EMAIL_SERVICE_URL', { method: 'POST', body: JSON.stringify({ email }) });
    
    return NextResponse.json({ 
      success: true, 
      message: 'Successfully subscribed! Welcome to AI Tools Guide updates.' 
    });
  } catch {
    return NextResponse.json({ error: 'Subscription failed. Try again.' }, { status: 500 });
  }
}

