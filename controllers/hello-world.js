
var hello = (req, res) => {
    return res.status(200).json({ message: 'hello world' });
}

module.exports = {
    hello: hello,
}  