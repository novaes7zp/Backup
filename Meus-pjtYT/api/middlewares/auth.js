import jwt from 'jsonwebtoken'

const JWT_SECRET = process.env.JWT_SECRET

const auth = (req, res, next) => {
    
    const token = req.headers.authorization

    if(!token) {
        return res.status(401).json({message: 'páaaa. Acesso negado!kkkkkk'})
    }
    
    try {
        const decoded = jwt.verify(token.replace('Bearer ', ''), JWT_SECRET)

        req.userId = decoded.id
        
        console.log(decoded)
    } catch(err) {
        return res.status(401).json({message: 'Token invalido'}, JWT_SECRET)
    }

    next()
}

export default auth