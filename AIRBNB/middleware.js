
module.exports.isLoggedIn = (req, res, next) => {
  if (!req.isAuthenticated()) {
    req.session.redirectUrl = req.originalUrl;
    return res.redirect("/login");
  }
  
   next();
}


module.exports.savedRedirectUrl = (req ,res , next) =>{
    if(req.session.redirectUrl){
        res.locals.url = req.session.redirectUrl;
    }
    next();
}