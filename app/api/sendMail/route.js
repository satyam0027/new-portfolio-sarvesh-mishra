import nodemailer from "nodemailer";

export async function POST(req) {
  try {
    // Destructure request body
    const { name, email, message } = await req.json();

    // Validate required fields
    if (!name || !email || !message) {
      return new Response(
        JSON.stringify({ error: "All fields are required." }),
        { status: 400, headers: { "Content-Type": "application/json" } }
      );
    }

    // Configure nodemailer transporter for Gmail SMTP
    const transporter = nodemailer.createTransport({
      host: 'smtp.gmail.com',   // Gmail SMTP host
      port: 465,                // Secure SSL port for Gmail
      secure: true,             // Use SSL
      auth: {
        user: process.env.EMAIL_USER, // Your Gmail email
        pass: process.env.EMAIL_PASSWORD, // Gmail app password (not your regular Gmail password)
      },
    });

    // Email content
    const mailOptions = {
      from: email, // Sender's email
      to: process.env.EMAIL_USER, // Your email (receiver)
      subject: `New Contact Form Submission from ${name}`,
      text: `
        Name: ${name}
        Email: ${email}
        Message: ${message}
      `,
    };

    // Send email using the transporter
    const info = await transporter.sendMail(mailOptions);

    console.log("Email sent: ", info);

    // Respond with success
    return new Response(
      JSON.stringify({ success: "Message sent successfully!" }),
      { status: 200, headers: { "Content-Type": "application/json" } }
    );
  } catch (error) {
    console.error("Error sending email: ", error);
    
    // Enhanced error handling with different status codes based on the error type
    let errorMessage = "Failed to send the message.";
    
    if (error.code === 'EAUTH') {
      errorMessage = "Authentication failed. Check your email credentials or App password.";
    } else if (error.code === 'ECONNREFUSED') {
      errorMessage = "Connection to email service failed. Check your network settings.";
    }

    return new Response(
      JSON.stringify({ error: errorMessage }),
      { status: 500, headers: { "Content-Type": "application/json" } }
    );
  }
}
