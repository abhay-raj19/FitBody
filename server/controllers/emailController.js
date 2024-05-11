import nodemailer from "nodemailer";
import dotenv from 'dotenv/config';
const { config } = dotenv;

export const sendEmail= async (req,res)=>{
    try {
        console.log(process.env.EMAIL_PASSWORD)
        const formData = req.body
        console.log(formData)
        const transporter = nodemailer.createTransport({
            service: 'gmail',
            host: 'localhost',
            port: 3000,
            secure: true,
            auth : {
                user : process.env.EMAIL_ADDRESS,
                pass : process.env.EMAIL_PASSWORD
            }
        });

        const mailOptions = {
            from: `${formData.email}`, 
            to: '21ituon145@ddu.ac.in', 
            subject: 'query',
            html:`<p><strong>${formData.formData.message}</strong></p>`
        };

        await transporter.sendMail(mailOptions);

        return res.json({ message: "Email sent successfully" })
    } catch (error) {
        return res.status(500).json({ message: error.message })
    }
}