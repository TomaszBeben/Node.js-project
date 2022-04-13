import { createRequire } from 'module';
import {app} from '../../app'
const require = createRequire(import.meta.url);
const passport = require('passport')

module.exports = function passportConfig(app)