import nodemailer from 'nodemailer';
import dotenv from 'dotenv';
import { generateEmailHtml } from './emailTemplate.js';

dotenv.config();

const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'q3visualdesigns@gmail.com',
    pass: process.env.EMAIL_PASSWORD,
  },
});

transporter.verify((error, success) => {
  if (error) {
    console.error('Error verifying transporter:', error);
  } else {
    console.log('Transporter is ready to send emails');
  }
});

export const handler = async (event) => {
  try {
    const body = JSON.parse(event.body);
    const { formData } = body;

    const applicantEmail = formData['Applicant email'];

    let mailOptions = {
      from: `"Application Form" <${applicantEmail}>`,
      to: 'thomaslmusial@gmail.com',
      subject: 'New Application Form Submission',
      text: JSON.stringify(formData, null, 2),
      html: generateEmailHtml(formData),
    };

    let info = await transporter.sendMail(mailOptions);
    return {
      statusCode: 200,
      body: JSON.stringify({ message: 'Email sent', info }),
    };
  } catch (error) {
    console.error('Error in handler:', error);
    return {
      statusCode: 500,
      body: JSON.stringify({ message: 'Failed to send email', error: error.message }),
    };
  }
};
