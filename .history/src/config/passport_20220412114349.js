import passport from 'passport'

function passportConfig(app){
    app.use(passport.initialize());
    app.use(passport.session());
}

export default passportConfig