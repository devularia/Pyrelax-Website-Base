import { Application, Request, Response } from "express";
import * as path from "path"
import * as fs from "fs"
// import SendAlgo from "router/api/SendAlgo"
/**
 * ### Controlador de Rotas
 */
export default (app: Application) => {
    /**
     * Rotas Publicas
     */
    app.get("/", (req: Request, res: Response) => {
        return res.sendFile(path.join(__dirname, "..", "pages", "index.html"))
    });


    /**
     * Rotas Api
     */
    // app.get("/teste", (req: Request, res: Response) => {
    //     return res.sendFile(path.join(__dirname, "..", "pages", "teste.html"))
    // });
    // app.use(SendAlgo)
}