import nodemailer from "nodemailer"

const transporter = nodemailer.createTransport({
  host: "smtp.gmail.com",
  port: 465,
  secure: true,
  auth: {
    user: process.env.NODEMAILER_MAIL,
    pass: process.env.NODEMAILER_PWD,
  }
})

export async function sendEmail(email_to, subject, html) {
  try {
    const info = await transporter.sendMail({
      from: `"About Page" <${process.env.NODEMAILER_MAIL}>`,
      to: email_to,
      subject,
      html,
    })
  } catch (error) {
    throw new Error(`Error at sending the email: ${error.message}`)
  }
}