import { Router, Request, Response } from "express";

const router = Router();

router.get("/", (req: Request, res: Response) => {
  let age: number = 15;
  let showOld: boolean = false;

  if (age > 50) {
    showOld = true;
  }
  res.render("home", { name: "Friend", showWelcome: true, age: 90, showOld });
});
router.get("/contato", (req: Request, res: Response) => {
  res.send("Página de contato");
});

export default router;
