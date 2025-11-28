import express from 'express'
import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'

import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

const router = express.Router()

const JWT_SECRET = process.env.JWT_SECRET

//Cadastro
router.post('/cadastro', async (req, res) => {

    try {
        const user = req.body

        const salt = await bcrypt.genSalt(10)
        const hashPassword = await bcrypt.hash(user.password, salt)

        const userDB = await prisma.user.create({
            data: {
                name: user.name,
                email: user.email,
                password: hashPassword,
            },
        })
        res.status(201).json(userDB)
    }
    catch (err) {
        res.status(500).json({message: "Error no servidor"})
    }
})

//Login

router.post('/login', async (req, res) => {
    try {
        const userInfo = req.body

        //Busca o usuario no banco de dados:
        const user = await prisma.user.findUnique({ where: {email: userInfo.email}})
        //Verifica se o usuario existe no banco de dados    
        if(!user) {
            return res.status(404).json({message: "Usuario não encontrado!"})
        }

        //Compara a senha do banco de dado com a senha que o usuario digitou
        const isMatch = await bcrypt.compare(userInfo.password, user.password)

        if(!isMatch) {
            return res.status(400).json({message: "Senha invalida!"})
        }

        //Gerar o TOKEN JWT
        const token = jwt.sign({ id: user.id, name: user.name, email: user.email }, JWT_SECRET, { expiresIn: '7d'})

        res.status(200).json(token)

    }catch (errr) {
        res.status(500).json({message: "Error no servidor"})
    }  
})
export default router