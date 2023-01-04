import nodemailer from "nodemailer";

export default async (email, subject, text) => {
  try {
    console.log("transporter is being created");
    const transporter = nodemailer.createTransport({
      host: "mail.smtp2go.com",
      port: 2525,
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASSWORD,
      },
    });
    console.log(transporter);
    await transporter.sendMail({
      from: "TFF RAS <victorotaiwo@gmail.com>",
      to: email,
      subject: subject,
      text: text,
    });
    console.log("email sent successfully");
  } catch (error) {
    console.log("email not sent!");
    console.log(error);
    return error;
  }
};
