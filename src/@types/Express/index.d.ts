import * as express from "express";

declare global {
  namespace Express {
    interface Request {
      admin: {
        admin: decoded.admin;
        id: decoded.sub;
      };
    }
  }
}
