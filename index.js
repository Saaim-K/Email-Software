require('dotenv').config();
const sgMail = require('@sendgrid/mail')
sgMail.setApiKey(process.env.SENDGRID_API_KEY)

const msg = {
    to: 'reply2waqas1@gmail.com', // Change to your recipient
    from: 'saaim@argdynamics.com', // Change to your verified sender
    subject: 'Message from Saaim',
    text: 'and easy to do anywhere, even with Node.js',
    html: '<strong>hello</strong> <img src="https://images7.alphacoders.com/130/1309070.jpg"/>',
}

sgMail
    .send(msg)
    .then((response) => {
        console.log(response[0].statusCode)
        // console.log(response[0].headers)
    })
    .catch((error) => {
        console.error(error)
    })
