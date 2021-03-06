import passport from 'passport'
import {Strategy} from 'passport-local'

const localStrategy = () => {
    passport.use(
        new Strategy({
            usernameField: 'username',
            passwordField: 'password',
        },
        (username, password, done) => {
            const user = {username, passport, user: 'Tomski'}
            done(null, user)
        })
    )
}

export default localStrategy