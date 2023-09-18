// const CustomError = require('../errors');
// const {isTokenValid} = require('../utils');

// const authenticateUser = async (req, res, next) => {
//     const token = req.signedCookies.token;
//     if(!token){
//         throw new CustomError.UnauthenticatedError('Authentication Invalid');
//     }
//     try {
//         const {name, userId, role} = isTokenValid({token});
//         //this will add loggedin user to req object
//         req.user = {name , userId, role};
//         next();
//     } catch (error) {
//         throw new CustomError.UnauthenticatedError('Authentication Invalid');
//     }
// }

// const authorizePermission = (...roles) =>{
//     return (req, res, next) => {
//         if(!roles.includes(req.user.role)){
//             throw new CustomError.UnauthorizedError('Not allowed to access');
//         }
//         next();
//     }
// }

// module.exports = {authenticateUser, authorizePermission};
