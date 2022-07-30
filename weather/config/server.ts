import express from "express"
const server = express();
import allowCors from "./cors"
import queryParser from "express-query-int"
import {Weather} from './metodos' 

server.use(express.json())
server.use(allowCors);
server.use(queryParser());

server.get("/", Weather)

server.listen(process.env.PORT || 3001, () => console.log('Servidor rodando no porta  3001'));