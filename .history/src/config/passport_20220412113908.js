import { createRequire } from 'module';

const require = createRequire(import.meta.url);
const passport = require('passport')

module.exports = passport;