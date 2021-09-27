const express = require('express');
const router = express.Router();

router.get('/exit', (req, res) => {
    console.log(`===>사용자가 페이지를 벗어났습니다.`);
    req.session.destroy();

    res.json({
        "success:": true
    })
})

module.exports = router;