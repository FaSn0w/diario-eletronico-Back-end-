import sequelize from './config/configMySQL.js';
import express from "express";
import AlunosRouter from './routes/alunosRoutes.js';
import estabelecimentoRouter from './routes/estabelecimentoRoutes.js';
import cors from 'cors';


// Verifica conexão com o banco mysql
sequelize.authenticate().then(() => {
    console.log("Conectado com sucesso!");
}).catch((erro) => {
    console.log("Falha ao se conectar:", erro);
});


const app = express();
// add o middleware Json
app.use(express.json())
// Habilitar CORS
app.use(cors({
    origin: '*'
  }));
// Add rotas 
app.use(AlunosRouter);
app.use(estabelecimentoRouter);

export default app;
// -->server.js



