const express = require('express')
const app = express()
/*const passport = require('passport')
const session = require('express-session')
const bodyParser = require('body-parser')*/

app.get('/', function(req, res) {
    res.send('hello')
})

app.listen(5000, function(err) {
    if (!err)
        console.log("Site is live")
    else console.log(err)
})

/*app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// For Passport

app.use(session({ secret: 'keyboard cat',resave: true, saveUninitialized:true})); // session secret

app.use(passport.initialize());

app.use(passport.session()); // persistent login sessions

//Models
var models = require("index.js");

//Sync Database
models.sequelize.sync().then(function() {

    console.log('Nice! Database looks fine')

}).catch(function(err) {

    console.log(err, "Something went wrong with the Database Update!")

});*/