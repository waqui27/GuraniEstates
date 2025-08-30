require("dotenv").config();
const express = require("express");
const cors = require("cors");
const nodemailer = require("nodemailer");

const app = express();
const PORT = process.env.PORT || 1000;

// Middleware
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

//Email configuration
const transporter = nodemailer.createTransport({
  //   service: "gmail",
  //   auth: {
  //     user: process.env.EMAIL_USER,
  //     pass: process.env.EMAIL_PASS,
  //   },
  host: process.env.EMAIL_HOST,
  port: parseInt(process.env.EMAIL_PORT, 10),
  secure: process.env.EMAIL_SECURE === "true",
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },

  tls: {
    rejectUnauthorized: true,
  },
});

// Test Email configuration
transporter.verify((error) => {
  if (error) {
    console.log("Error with email configuration:", error);
  } else {
    console.log("Email configuration is correct");
  }
});

// Routes
app.post("/api/contact", async (req, res) => {
  try {
    const { name, email, phone, subject, message } = req.body;

    // Email content
    const mailOptions = {
      from: `"${name} via Contact Form" <${process.env.EMAIL_USER}>`,
      to: process.env.EMAIL_USER,
      replyTo: `"${name}" <${email}>`,
      subject: subject || "New Contact Form Submission",
      html: `<p>You have a new contact form submission</p>
               <h3>Contact Details</h3>
               <ul>
                 <li>Name: ${name}</li>
                 <li>Email: ${email}</li>
                 <li>Phone: ${phone}</li>
               </ul>
               <h3>Message</h3>
               <p>${message}</p>
               <p>Sent from your website contact form</p>`,
    };

    // Send email
    await transporter.sendMail(mailOptions);
    res.status(200).json({
      success: true,
      message: "Email sent successfully",
    });
  } catch (error) {
    console.error("Error sending email:", error);
    res.status(500).json({
      success: false,
      message: "Internal Server Error",
    });
  }
});

app.get("/", (req, res) => {
  res.send("Server is running here bro");
});
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
