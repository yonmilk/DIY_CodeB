const express = require('express');
const router = express.Router();

// Spring으로부터 세션 정보를 가져온다.
router.post('/session', (req, res) => {
    let memberId = req.body.memberId;
    let sessionId = req.body.sessionId;

    console.log(`${req.session}`);
    console.log(`===>세션 아이디: ${memberId}`);
    console.log(`===>사용자 아이디: ${sessionId}`);

    if(sessionId == "") {
        console.log("===>세션이 존재하지 않습니다.");
        res.json({
            "success": false,
            "msg": "세션이 존재하지 않습니다."
        })
    } else {
        console.log("===>세션이 존재합니다.");

        req.session.logined = true,
        req.session.session_id = sessionId;
        req.session.member_id = memberId;
        

        res.json({
            "success": true,
            "spring_session_id": req.session.session_id,
            "node_session_id": req.session.id,
            "msg": "세션이 존재합니다."
        })
    }
})

router.get('/exit', (req, res) => {
    console.log(`===>사용자가 페이지를 벗어났습니다.`);
    console.log(req.session.id);
    console.log(req.session.member_id);
    req.session.destroy();

    res.json({
        "success:": true
    })
})

module.exports = router;