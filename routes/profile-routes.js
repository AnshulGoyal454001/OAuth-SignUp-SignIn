const router = require('express').Router();

const authCheck = (req, res, next) =>{
    if(!req.user){
            //if user is not logges in
            res.redirect('/auth/login');
    }
    else{
        //if logged interface
        next();
    }
}


router.get('/',authCheck,(req,res) => {
    res.render('profile', {user:req.user});
});

module.exports=router;