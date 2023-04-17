import express, { Request, Response } from "express";
const app = express();
const port = process.env.PORT || 3000;

app.use(express.urlencoded({ extended: false }));

app.get("/", (req: Request, res: Response) => {
  const str = "Welcome to a basic express App";
  res.send(str);
});

// Mock API
app.get("/users", (req: Request, res: Response) => {
  res.json([
    { name: "William", location: "Abu Dhabi" },
    { name: "Chris", location: "Vegas" },
  ]);
});

app.post("/user", (req: Request, res: Response) => {
  const { name, location } = req.body;

  res.send({ status: "User created", name, location });
});

// Listen on port
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
