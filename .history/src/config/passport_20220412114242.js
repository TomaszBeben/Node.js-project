import { createRequire } from 'module';

const require = createRequire(import.meta.url);
const passport = require('passport')

module.exports = function passportConfig(app){
    app.use(passport.initialize());
    app.use(passport.session())
}