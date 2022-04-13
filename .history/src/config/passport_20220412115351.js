import passport from 'passport'

export const passportConfig = (app) => {
    app.use(passport.initialize());
    app.use(passport.session());

    passport.serializeUser((user, done) => {
        
    });
    passport.deserializeUser()
}

export default passportConfig