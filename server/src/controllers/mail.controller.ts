import { Request, Response } from "express";
import nodemailer from "nodemailer";
import { host, port, user, pass } from "@src/config/auth.json";

class mailController {
  public async sendEmail(req: Request, res: Response): Promise<Response> {
    const { text } = req.body;

    if (!text)
      res.send({
        error: "Invalid subject",
      });

    const transporter = nodemailer.createTransport({
      host,
      port,
      auth: {
        user,
        pass,
      },
      tls: {
        rejectUnauthorized: false,
      },
    });

    const mailOptions = {
      from: "Bunter@app.com.br",
      to: "bunter.suggestion@gmail.com",
      subject: "Sugestão Bunter" ,
      text,
    };

     transporter.sendMail(mailOptions, (err) => {
      if (err) {
        console.log(err);
      }
    });

    return res.status(200);
  }
}

export default new mailController();
