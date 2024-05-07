const nodemailer=require('nodemailer');
const sendMail=async(req,res)=>{

const transporter=nodemailer.createTransport({
    service: "Gmail",
    host: "smtp.gmail.com",
    port: 465,
    secure: true,
    // secure: false, // Use `true` for port 465, `false` for all other ports
    auth: {
      user: "mohit*****2121@gmail.com", // add ur email and password
      pass: "zuwh ilcw ftjg yiza",
    },
})
const info = await transporter.sendMail({
    from: '"Maddison Foo Koch 👻" <maddison53@ethereal.email>', // sender address
    to: "ak542829@gmail.com", // list of receivers
    subject: "Hello ✔", // Subject line
    text: "Hello world?", // plain text body
    html: "<b>Hello world?</b>", // html body
  });
res.send("Message sent: "+ info.messageId);
}
module.exports={
    sendMail
}