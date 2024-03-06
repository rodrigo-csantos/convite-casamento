const path = require('path')

exports.wellcome = (req, res) => {
    const filePath = path.join(__dirname, '..', 'frontend', 'index.html');
    res.sendFile(filePath);
}

exports.giftList = (req, res) => {
    const filePath = path.join(__dirname, '..', 'frontend', 'gift-list.html');
    res.sendFile(filePath);
}