const getHomepage = (req, res) => {
    res.render('sample.ejs')
}

const getHomepageABC = (req, res) => {
    res.send('234')
}

module.exports = {
    getHomepage,
    getHomepageABC
}