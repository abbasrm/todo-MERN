module.exports = {
    mongoURI: process.env.mongoURI || require('./_keys').mongoURI,
    salt: 'The_salt_is_Here@salt',
    jwtSecret: 'secret_jwt@env_var_must'
}