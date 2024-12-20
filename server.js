const express = require("express");
const bodyParser = require("body-parser");
const nodemailer = require("nodemailer");
const cors = require("cors");  // Import cors

const app = express();
const PORT = 3000;

// Use CORS middleware to allow requests from any origin (or specify a specific one)
app.use(cors());  // Allow all origins

app.get("/", (req, res) => {
    res.send("Server is up and running!");
});

// Middleware to parse form data
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.post("/send-email", async (req, res) => {
    console.log("Form data received:", req.body); // Logs the form data to the console

    const { name, email, phone, checkin, checkout, adults, children, rooms } = req.body;

    require('dotenv').config();
    const transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: process.env.EMAIL_USER,
            pass: process.env.EMAIL_PASS,
        },
    });
    

    const mailOptions = {
        from: `no-reply@yourhotel.com`, // Fixed sender email
        to: "aiymashah1@gmail.com",    // Recipient email
        replyTo: email,                // User's email for replies
        subject: `New Booking Request`,
        text: `
            Name: ${name}
            Email: ${email}
            Phone: ${phone}
            Check-in: ${checkin}
            Check-out: ${checkout}
            Adults: ${adults}
            Children: ${children}
            Rooms: ${rooms}
        `,
    };
    
    

    try {
        await transporter.sendMail(mailOptions);
        res.status(200).send("Email sent successfully!");
    } catch (error) {
        console.error("Error sending email:", error);
        res.status(500).send("Error sending email");
    }
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});
