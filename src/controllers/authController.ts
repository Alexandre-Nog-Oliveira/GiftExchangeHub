import { RequestHandler } from "express";
import { z } from "zod"
import * as auth from "../services/AuthServices"

export const login: RequestHandler = (req, res) => {
    const loginSchema = z.object({
        password: z.string()
    });
    const body = loginSchema.safeParse(req.body)

    if(!body.success)
    return res.json({Error: "Dados Inválidos"});

    if(!auth.validatePassword(body.data.password)){
        res.status(403).json({erros: "Acesso negado!"});
    }

    return res.json({ token: auth.createToken()});
}