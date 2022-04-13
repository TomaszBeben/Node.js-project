import passport from 'passport'

export const passportConfig = (app) => {
    app.use(passport.initialize());
    app.use(passport.session());
}

export default passportConfig