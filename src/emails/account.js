const sgMail = require('@sendgrid/mail');

sgMail.setApiKey(process.env.SENDGRID_API_KEY);



const fromEmail = 'harry@harrybaum.com';

const sendWelcomeEmail = ({ email, name }) => {
    sgMail.send({
        to: email,
        from: fromEmail,
        subject: 'Welcome to the app!',
        text: `Welcome to the app, ${name}! Let me know how you get along with the app.`
    });
}

const sendCancellationEmail = ({ email, name }) => {
    sgMail.send({
        to: email,
        from: fromEmail,
        subject: 'Sorry to see you go!',
        text: `We're sorry to hear you're not enjoying the app, ${name}, we'd appreciate some feedback at ${fromEmail}`
    })
}

module.exports = {
    sendWelcomeEmail,
    sendCancellationEmail
}