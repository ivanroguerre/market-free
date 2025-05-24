import { Request, Response } from "express";

export const getItems = (_: Request, res: Response) => {
  res.json({
    test: "object",
  });
};
