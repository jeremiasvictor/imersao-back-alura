import express from "express";
import routes from "./src/routes/postsRoutes.js";

// Cria uma instância do aplicativo Express
const app = express();

// Carrega as rotas definidas em postsRoutes.js
routes(app);

// Inicia o servidor na porta 3000
app.listen(3000, () => {
  console.log("Servidor escutando...");
});
