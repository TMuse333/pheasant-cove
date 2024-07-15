// server.js

import express from 'express';
import nodemailer from 'nodemailer';
import cors from 'cors';
import bodyParser from 'body-parser';
import dotenv from 'dotenv';

dotenv.config();

const app = express();
const port = process.env.PORT || 5000;

app.use(cors());
app.use(bodyParser.json());

app.post('/sendApplication', async (req, res) => {
    const { formData } = req.body;

    let transporter = nodemailer.createTransport({
        host: process.env.SMTP_HOST,
        port: process.env.SMTP_PORT,
        secure: false,
        auth: {
            user: process.env.EMAIL_USER,
            pass: process.env.EMAIL_PASS,
        },
    });

    let mailOptions = {
        from: `"Application Form" <${process.env.EMAIL_USER}>`,
        to: 'recipient@example.com',
        subject: 'New Application Form Submission',
        text: JSON.stringify(formData, null, 2),
        html: `<pre>${JSON.stringify(formData, null, 2)}</pre>`,
    };

    try {
        let info = await transporter.sendMail(mailOptions);
        res.status(200).json({ message: 'Email sent', info });
    } catch (error) {
        res.status(500).json({ message: 'Failed to send email', error });
    }
});

app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});
