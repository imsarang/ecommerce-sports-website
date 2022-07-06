const GoogleStrategy = require("passport-google-oauth20").Strategy
const passport = require("passport")


passport.use(
    new GoogleStrategy({
        clientID:process.env.CLIENT_ID,
        clientSecret:process.env.CLIENT_SECRET,
        callbackURL:'api/v1/login/google',
        scope:["profile","email"],
    },
    function(accessToken,refreshToken,profile,callback){
        callback(null,profile)
    })
)

// Serialize user , deserialize user

passport.serializeUser((user,done)=>{
    done(null,user)
})
passport.deserializeUser((user,done)=>{
    done(null,user)
})