const env = process.env.NODE_ENV

module.exports = {
    dev: {
        dev: true
    },
    prod: {
        dev: false
    }
}[env]