import nodemailer from "nodemailer";
import { NextApiRequest, NextApiResponse } from "next";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse,
) {
  if (req.method === "POST") {
    const { email, message } = req.body;

    // Create a Nodemailer transporter using your IONOS SMTP credentials
    const transporter = nodemailer.createTransport({
      host: "smtp.ionos.com",
      port: 587,
      secure: false, // true for 465, false for other ports
      auth: {
        user: "admin@healthliteracy.app", // your email address
        pass: "H3@ltL!t", // your email password
      },
    });

    try {
      // Send mail with defined transport object
      const info = await transporter.sendMail({
        from: '"HealthLiteracy" <admin@healthliteracy.app>', // sender address
        to: email, // recipient address
        subject: "Enguiry for HealthLiteracy Aplication", // Subject line
        text: message, // plain text body
      });

      console.log("Message sent: %s", info.messageId);
      res.status(200).json({ message: "Email sent successfully!" });
    } catch (error) {
      console.error("Error sending email:", error);
      res.status(500).json({ error: "An error occurred while sending email." });
    }
  } else {
    res.status(405).json({ error: "Method not allowed" });
  }
}
