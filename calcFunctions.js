function add(a, b, cb) {
    setTimeout(() => {
        
        cb(a+b)

    }, 2000)

}
function misc(cb) {

    setTimeout(function () {
        cb(add)
    }, 1000)
}

module.exports = {
    add: add,
    misc: misc
}