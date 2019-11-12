const nodemailer = require('nodemailer')
const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: 'iraklitbz@gmail.com',
        pass: 'Adob31d123'
    }
});
const mailOptions = {
    from: 'iraklitbz@gmail.com',
    to: 'iraklitbz@gmail.com',
    subject: 'Visita'
};

export default (req, res) => {
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
      <div>${req.body['Name']}</div>
     
    </body>
    
    </html>`

    mailOptions.html = html

    transporter.sendMail(mailOptions, function (err, info) {
        if(err) {
            res.json(err)
        }
        
        else {  
            res.json(req.body)
        }
    });   
}