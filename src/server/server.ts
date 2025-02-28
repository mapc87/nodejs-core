import express, { Express, Request, Response } from "express";
import cors from 'cors'

//routes
import autentication from "./routes/autentication.routes"
const app: Express = express();

app.use(cors({
  origin: ['http://localhost:4200', 'https://luna-restaurant.netlify.app', 'https://luna-cocina-del-alma.netlify.app'],
  methods: ['GET', 'PUT', 'UPDATE', 'DELETE', 'POST'],
  credentials: true,
  optionsSuccessStatus: 200
}));

app.use('/api/', autentication)

app.use(cors(),(req:Request, res:Response, next) => {
  res.status(404).json({
      message: 'endpoint not found'
  })
})

export default app;