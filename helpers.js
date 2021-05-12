

function successfullMessage(msg) {
    return "✅ *SL Android*:  ```" + msg + "```"
}
function errorMessage(msg) {
    return "🛑 *SL Android*:  ```" + msg + "```"
}
function infoMessage(msg) {
    return "⏺️ *SL Android*:  ```" + msg + "```"
}


module.exports = {
    successfullMessage,
    errorMessage,
    infoMessage
}