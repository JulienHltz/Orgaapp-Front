const getToken = () => {
    const infosConnec = localStorage.getItem('infosConnec')

    const timestampToken = infosConnec.timestamp

    const timestampNow = Date.now()

    if (timestampNow - timestampToken === 1000 * 60 * 60) return infosConnec.token
    else {
        localStorage.removeItem('infosConnec')
        return null
    }
}

module.exports = { getToken }