const nodemailer = require('nodemailer')
const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: 'iraklitbz@gmail.com',
        pass: ''
    }
})
const mailOptions = {
    from: 'iraklitbz@gmail.com',
    to: 'iraklitbz@gmail.com',
    subject: 'Visita'
}

function sendMail (body) {
    let html = `<!doctype html>
    <html xmlns="http://www.w3.org/1999/xhtml" xmlns:v="urn:schemas-microsoft-com:vml" xmlns:o="urn:schemas-microsoft-com:office:office">
    
    <head>
      <title> </title>
      <!--[if !mso]><!-- -->
      <meta http-equiv="X-UA-Compatible" content="IE=edge">
      <!--<![endif]-->
      <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1">
    </head>
    
    <body>
       <h2>Tenemos visita!</h2>
      <div>${body.name} <span>${body.surname}</span> viene a ver a ${body.visitor} </div>
   
      <p>Datos del visitante:</p>
      <div>email: ${body.email}</div>
    </body>
    
    </html>`

    mailOptions.html = html

    transporter.sendMail(mailOptions, function (err, info) {
        if(err) console.log('KO', err)
        else console.log('OK', info)    
    }) 
}

export default sendMail