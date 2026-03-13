import { NextRequest, NextResponse } from 'next/server';

export async function POST(request: NextRequest) {
  try {
    const { email } = await request.json();

    if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      return NextResponse.json({ error: 'Valid email required' }, { status: 400 });
    }

    // Here you would integrate with your email service (Mailchimp, EmailJS, etc.)
    // For demo, we'll simulate success with console logging
    console.log('Newsletter signup:', email);
    
    // In production, replace with real API call:
    // await fetch('YOUR_EMAIL_SERVICE_URL', { method: 'POST', body: JSON.stringify({ email }) });
    
    return NextResponse.json({ 
      success: true, 
      message: 'Successfully subscribed! Welcome to AI Tools Guide updates.' 
    });
  } catch (error) {
    console.error('Newsletter error:', error);
    return NextResponse.json({ error: 'Subscription failed. Try again.' }, { status: 500 });
  }
}

