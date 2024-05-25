import nodemailer from 'nodemailer'

const mailSender = async(email, title, body)=>{
  try {
    let transporter = nodemailer.createTransport({
      service:"gmail",  
      host: "smtp.gmail.com",
      port:465,
      auth: {
        user: process.env.MAIL_USER,
        pass: process.env.MAIL_PASSWORD,
      },
    });

    let info = await transporter.sendMail({
      from: `FitBody | Mohd Ayan Raza`,
      to: `${email}`,
      subject: `${title}`,
      html: `${body}`,
    });
    console.log("Info: ", info);
    return info;
  } catch (error) {
    console.log(error.message);
  }
};


export default mailSender;