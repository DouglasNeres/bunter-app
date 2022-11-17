import "module-alias/register";
import express from "express";
import bodyParser from "body-parser";
import cors from "cors";
import mailRouter from "./routes/mail.routes";
import { Server } from "@overnightjs/core";

class serverInit extends Server {
  private port = 4030;

  constructor() {
    super();
    this.startServer();
    this.setupExpress()
    this.routes();
  }

  public startServer(): void {
    this.app.listen(this.port, () => {
      console.log("The server is online on port " + this.port);
    });
  }

  private setupExpress(): void {
    this.app.use(bodyParser.json());
    this.app.use(cors());
  }

  private routes() {
    this.app.use("/mail", mailRouter);
  }
}

export default new serverInit();
