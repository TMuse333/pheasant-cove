import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';
import dotenv from 'dotenv';
import transporter from './emailSender.js'
import {generateEmailHtml} from '../netlify/functions/emailTemplate.js'

dotenv.config();

const app = express();
const port = process.env.PORT || 5000;

app.use(cors());
app.use(bodyParser.json());

app.post('/sendApplication', async (req, res) => {
    const { formData } = req.body;

    // Assuming the applicant's email is in formData.email
    const applicantEmail = formData['Applicant email']; // Change this according to your form data structure

    let mailOptions = {
        from: `"Application Form" <${applicantEmail}>`, // Set the sender as the applicant's email
        to: 'thomaslmusial@gmail.com', // Your email address
        subject: 'New Application Form Submission',
        text: JSON.stringify(formData, null, 2),
        html: generateEmailHtml(formData), 
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
