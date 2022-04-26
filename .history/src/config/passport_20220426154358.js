import passport from 'passport'
import localStrategy from './strategies/localStrategy';

const passportConfig = (app) => {
    app.use(passport.initialize());
    app.use(passport.session());

    passport.serializeUser((user, done) => {
        done(null, user);
    });
    passport.deserializeUser((user, done) => {
        done(null, user);
    })
}

export default passportConfig