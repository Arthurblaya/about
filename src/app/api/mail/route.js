import { angry } from "@/Constants"
import { sendEmail } from "@/services/mailer"
import { NextResponse } from "next/server"

export async function POST(request) {
  try {  
    const { body, from } = await request.json()
    if (!body || !from) throw new Error(`Invalid input ${angry}`) 
    const html = `
    <body>
    <h1>${from}</h1>
    <p>${body}</p>
    </body>
    `
    await sendEmail(process.env.NODEMAILER_MAIL, "About Page", html)
    return NextResponse.json({body, from},{ status: 200 })
  }
  catch (error) {
    return NextResponse.json({ message: error.message }, { status: 409 })
  }
}