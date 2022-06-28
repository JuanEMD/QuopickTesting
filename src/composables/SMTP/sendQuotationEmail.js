import Email from './smtp.js'

export default function sendQuotationEmail(emailValue, bodyValue) {
    Email.send({
      SecureToken:"ee88687e-d777-4efb-8463-86d53b9018fd",
      To: emailValue,
      From: "juanernestomarmolejosdanis@gmail.com",
      Subject: "Test email",
      Body: bodyValue,
    }).then((message) => alert(message));
  }