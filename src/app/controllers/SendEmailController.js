const nodemailer = require('nodemailer');
require('dotenv/config');

class SendEmailController {
  async store(req, res) {
    const { name, email, text } = req.body;

    if (!name) {
      return res.status(400).json({ message: 'Nome não informado' });
    }

    if (!email) {
      return res.status(400).json({ message: 'Email não informado' });
    }

    if (!text) {
      return res
        .status(400)
        .json({ message: 'Conteúdo do texto não informado' });
    }

    var transporter = nodemailer.createTransport({
      host: process.env.HOST,
      secureConnection: false,
      port: process.env.PORT,
      auth: {
        user: process.env.EMAIL,
        pass: process.env.PASS,
      },
      tls: {
        ciphers: 'SSLv3',
      },
    });

    let mailOptions = {
      from: '"Contato pelo Portfólio " <' + process.env.EMAIL + '>',
      to: process.env.EMAIL,
      subject: name,
      html:
        '<b>Nome: </b>' +
        name +
        '<br><b>Email: </b>' +
        email +
        '<br><b>Texto: </b>' +
        text,
    };

    transporter.sendMail(mailOptions, function (error, info) {
      if (error) {
        return res
          .status(400)
          .json({ message: 'Algum erro ocorreu, tente novamente mais tarde' });
      }

      return res.status(200).json({ message: 'Email enviado com sucesso' });
    });
  }
}

module.exports = new SendEmailController();
