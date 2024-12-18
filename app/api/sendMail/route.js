// import nodemailer from "nodemailer";

import { SMTPClient } from 'emailjs';

export async function POST(req) {
  const { name, email, message } = await req.json();

  const client = new SMTPClient({
    user: process.env.EMAIL_USER,
    password: process.env.EMAIL_PASSWORD,
    host: 'smtp.gmail.com',
    ssl: true,
  });

  // send the message and get a callback with an error or details of the message that was sent

  try {

    await client.send(
      {
        text: message,
        from: name,
        to: email,
      },
      (err, message) => {
        console.log(err || message);
      }
    );

    console.log("Message sent!");
    return new Response(
      JSON.stringify({ success: "Message sent successfully!" }),
      { status: 200, headers: { "Content-Type": "application/json" } }
    );
  } catch {
    console.error("Error sending the mail!")
    return new Response(
      JSON.stringify({ error: errorMessage }),
      { status: 500, headers: { "Content-Type": "application/json" } }
    );
  }

}


// export async function POST(req) {
//   try {
//     // Destructure request body
//     const { name, email, message } = await req.json();

//     // Validate required fields
//     if (!name || !email || !message) {
//       return new Response(
//         JSON.stringify({ error: "All fields are required." }),
//         { status: 400, headers: { "Content-Type": "application/json" } }
//       );
//     }

//     // Configure nodemailer transporter for Gmail SMTP
//     const transporter = nodemailer.createTransport({
//       host: 'smtp.gmail.com',   // Gmail SMTP host
//       port: 465,                // Secure SSL port for Gmail
//       auth: {
//         user: process.env.EMAIL_USER, // Your Gmail email
//         pass: process.env.EMAIL_PASSWORD, // Gmail app password (not your regular Gmail password)
//       },
//       secure: true             // Use SSL
//     });

//     await new Promise((resolve, reject) => {
//       transporter.verify((error, success) => {
//         if (error) {
//           console.log(error + " sending the mail");
//           reject(error);
//         }
//         else {
//           console.log("Server is ready to take the message...");
//           resolve(success);
//         }
//       });
//     });


//     // Email content
//     const mailOptions = {
//       from: email, // Sender's email
//       to: process.env.EMAIL_USER, // Your email (receiver)
//       subject: `New Contact Form Submission from ${name}`,
//       text: `
//         Name: ${name}
//         Email: ${email}
//         Message: ${message}
//       `,
//     };

//     await new Promise((resolve, reject) => {
//       transporter.sendMail(mailOptions, (error, info) => {
//         if (error) {
//           console.log(error);
//           reject(error);
//         } else {
//           console.log("Email sent: ", info);
//           resolve(info);
//         }
//       });
//     });

//     // Send email using the transporter
//     // const info = await transporter.sendMail(mailOptions);

//     // console.log("Email sent: ", info);

//     // Respond with success
//     return new Response(
//       JSON.stringify({ success: "Message sent successfully!" }),
//       { status: 200, headers: { "Content-Type": "application/json" } }
//     );
//   } catch (error) {
//     console.error("Error sending email: ", error);

//     // Enhanced error handling with different status codes based on the error type
//     let errorMessage = "Failed to send the message.";

//     if (error.code === 'EAUTH') {
//       errorMessage = "Authentication failed. Check your email credentials or App password.";
//     } else if (error.code === 'ECONNREFUSED') {
//       errorMessage = "Connection to email service failed. Check your network settings.";
//     }

//     return new Response(
//       JSON.stringify({ error: errorMessage }),
//       { status: 500, headers: { "Content-Type": "application/json" } }
//     );
//   }
// }
