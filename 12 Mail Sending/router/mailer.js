import nodemailer from 'nodemailer';
var mailer = (email,callback)=>{
    // a transporter object that is able to send mail 
    const transporter = nodemailer.createTransport({
        service:'gmail',
        auth:{
            user:'codewithritesh28@gmail.com',
            pass:'lnfo thpj gxia yiyb'
        }
    });

    const mailOption = {
        from:'codewithritesh28@gmail.com',
        to:email,
        subject:"Verfication mail",
        html:"hello "+email+", <br> this is an verification mail from express <br> please click to the below link to verify your self <br> <a href='http://localhost:3000/user/verifyEmail?email="+email+"'>click here to verify</a>"
    }

    transporter.sendMail(mailOption,(error,info)=>{
        if(error){
            console.log("error while sending mail ",error);
        }
        else{
            callback(info);
        }
    })
}



export default {mailer:mailer};