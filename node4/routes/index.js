var express = require('express');
var router = express.Router();
 
/* GET home page. */
router.get('/', function(req, res) {
    res.render('index', { title: '测试' });
});
 
router.route('/login')
.get(function(req, res) {
    res.render('login', { title: '用户登录' });
})
.post(function(req, res) {
    var user = {
        username: '桃子',
        password: '123456'
    }
    if (req.body.username === user.username && req.body.password === user.password) {
        //alert()
        //res.redirect('/home');
        res.render("home",{ title: "登录",username: req.body.username });
    } else {
        // req.session.error='用户名或密码不正确';
        res.redirect('/login');
    }
});
 
router.get('/logout', function(req, res) {
    res.redirect('/');
});
 
router.get('/home', function(req, res) {
    res.render('home', { title: 'Home' });
});
 
module.exports = router;