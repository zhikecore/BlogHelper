const request = require('request')
const fs = require('fs')
const path = require('path')

exports.downloadPicture = function (uri, filepath) {
    return new Promise((resolve, reject) => {
        request.head(uri, function (err, res, body) {
            if (err) {
                reject(err)
                return console.error(err)
            }
            if (!fs.existsSync(path.dirname(filepath))) {
                fs.mkdirSync(path.dirname(filepath))
            }
            request(uri).pipe(fs.createWriteStream(filepath)).on('error', function () {
                reject('下载图片失败')
            })
            resolve(true)
        })
    })
}