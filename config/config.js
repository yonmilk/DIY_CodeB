const env = process.env.NODE_ENV

module.exports = {
    node: {
        mode: "node"
    },
    spring: {
        mode: "spring"
    }
}[env]