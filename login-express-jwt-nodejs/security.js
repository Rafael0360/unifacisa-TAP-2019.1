const jwt = require('jsonwebtoken')

const security = {
    authToken: (req, res, next) => {
        //console.log(req);
        if(!req.headers.authorization || req.headers.authorization.split(' ')[0] !== 'Bearer'){
            return res.status(401).send({auth: false, message: 'Token is not valid'});
        }

        let token = req.headers.authorization.split(' ')[1];

        jwt.verify(token, "test", (err, decoded) => {
            if(err){
            
                return res.status(500).send("ERROR");
            }
            req.user = {
                username: decoded.username,
                roles: decoded.roles,
                email: decoded.email
            };
            next();
        });
    }
}

module.exports = security;