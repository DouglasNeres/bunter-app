import { Request, Response } from "express";
import nodemailer, {SendMailOptions} from "nodemailer";
import { host, port, user, pass } from "@src/config/auth.json";

class mailController {
  public async sendEmail(req: Request, res: Response): Promise<Response> {
    try {
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
        logger: true
      });

      const mailOptions:SendMailOptions = {
        from: "bunterapp@yahoo.com",
        to: "bunterapp@yahoo.com",
        subject: "Sugestão Bunter",
        text, 

      };

      transporter.sendMail(mailOptions, (err) => {
        if (err) {
          console.log(err);
        }
      });

      return res.status(200).send({ok:"ok"});
    } catch (err) {
      console.log(err);
      return res.status(400)
    }
  }
}

export default new mailController();
