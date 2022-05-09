import nodemailer from 'nodemailer';
import { mailAdapter, SendMailData } from "../mail-adapter";

const transport = nodemailer.createTransport({
  host: "smtp.mailtrap.io",
  port: 2525,
  auth: {
    user: "d50e3179f27608",
    pass: "8f2b0024e1f68a"
  }
});

export class NodemailerMailAdapter implements mailAdapter {
  async sendMail({ subject, body}: SendMailData) {
    await transport.sendMail({
      from: 'Equipe Feedget <oi@feedget.com>',
      to: 'Lucas Ramos <lucasrthelima@gmail.com>',
      subject,
      html: body,
    })
  };
}