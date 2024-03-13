import { Request, Response } from "express";

export const home = (req: Request, res: Response) => {
  let age: number = 15;
  let showOld: boolean = false;

  if (age > 50) {
    showOld = true;
  }
  res.render("pages/home", {
    name: "Friend",
    showWelcome: true,
    age: 90,
    showOld,
    products: [
      { title: "Produto X", price: 10 },
      { title: "Produto Y", price: 20 },
      { title: "Produto Z", price: 30 },
    ],
    frasesDoDia: ["Alguma coisa muito legal", "Outra frase qualquer"],
  });
};
