import express, { Request, Response } from "express";
const app = express();
const port = process.env.PORT || 3000;

app.get("/", (_req: Request, res: Response) => {
  const str = "Express Typescript on Vercel";
  return res.send(str);
});

// Mock API
app.get("/ping", (_req: Request, res: Response) => {
  return res.send("pong 🏓");
});

// Listen on port
app.listen(port, () => {
  return console.log(`Example app listening on port ${port}`);
});
