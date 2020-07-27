const jwp = require('jsonwebtoken')
const Users = require('../models/Users')

const isAutenticated = (req, res, next) => {
    const token = req.headers.authorization
    if(!token){
        return res.sendStatus(403)
    }
    jwp.verify(token, "mi-secreto", (err, decoded) => {
        const { _id } =  decoded
        Users.findOne({ _id }).exec()
        .then( user => {
            req.user = user
            next()
        })
    })
}

const hasRole = role => (req, res, next) => {
    if(req.user.role === role) {
        return next()
    }
    res.sendStatus(403)
}

const hasRoles = roles => (req, res, next) => {
    if(roles.indexOf(req.user.role) > -1) {
        return next()
    }
    res.sendStatus(403)
}

module.exports = {
    isAutenticated,
    hasRoles,
    hasRole,
}