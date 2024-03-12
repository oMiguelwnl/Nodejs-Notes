import express, { Request, Response } from "express";

const server = express();

// Estática
server.get("/", (req: Request, res: Response) => {
  res.send("Hello World");
});

// Dinâmica
server.get("/noticia/:slug", (req: Request, res: Response) => {
  let slug = req.params.slug;
  res.send(`Noticia: ${slug}`);
});
server.get("/voo/:origem-:destino", (req: Request, res: Response) => {
  let { origem, destino } = req.params;
  res.send(`Procurando voos de ${origem} até ${destino}`);
});

server.listen(3333);
