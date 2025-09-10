const jwt = require('jsonwebtoken');
module.exports = (req, res, next) => {
    let {authorization} = req.headers;
    if  (!authorization)
        return res.status(401).json({error: 'acceso no autorizado'});
    
        try {
            let [type, token] = authorization.split(' ');  

            if(type === 'Token' || type === 'Bearer') {
                const openToken = jwt.verify(token, process.env.SECRET);
                console.log('openToken', openToken);
                req.user = openToken.user;  
                next();
            } else{
                return res.status(401).json({error: 'no autorizado, formato de token inválido'});
            }
        } catch (error) {
            res.json({
                message: 'hubo un error al validar el token',
                error
            });
        }
    }