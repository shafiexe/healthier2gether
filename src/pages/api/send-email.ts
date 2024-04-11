import nodemailer from "nodemailer";
import { NextApiRequest, NextApiResponse } from "next";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse,
) {
  if (req.method === "POST") {
    const { email, firstName, lastName, message, phoneNumber } = req.body;
    try {
      const transporter = nodemailer.createTransport({
        host: "smtp.ionos.com",
        port: 465,
        secure: true, // true for 465, false for other ports
        auth: {
          user: "admin@healthliteracy.app",
          pass: "H3@lt4L!t",
        },
      });

      const mailOptions = {
        from: "Health Literacy <admin@healthliteracy.app>",
        to: "Kaushal_sinha@yahoo.com",
        subject: "Health Literacy",
        html: `
          <table border="0" cellspacing="0" cellpadding="0" width="80%">
            <tr><td valign="middle" align="left" width="70%" style="padding:10px; font-family:Arial, Helvetica, sans-serif; font-size: 12px; font-weight:bold;">Health Literacy Enquiry,<br /></td></tr>
          </table>
          <br /><br />
          <p><strong>Full Name:</strong> ${firstName} ${lastName}</p>
          <p><strong>Email:</strong> ${email}</p>
          <p><strong>Phone Number:</strong> ${phoneNumber}</p>
          <p><strong>Message:</strong> ${message}</p>
        `,
      };

      // Send mail
      await transporter.sendMail(mailOptions);

      res.status(200).json({ message: "Email sent successfully!" });
    } catch (error) {
      console.error("Error sending email:", error);
      res.status(500).json({ error: "An error occurred while sending email." });
    }
  } else {
    res.status(405).json({ error: "Method not allowed" });
  }
}
