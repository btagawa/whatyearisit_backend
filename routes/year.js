var express = require('express');
var router = express.Router();

router.get('/', (req, res) => {
    console.log('ok')
    const year = new Date().getFullYear()
    res.json({year: year})
})

module.exports = router