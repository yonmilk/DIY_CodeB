const express = require('express');
const router = express.Router();
const axios = require('axios');

router.post("/crawling", (req, res) => {
    console.log('페이지 정보 가져오기');
    // 클라이언트로 받은 url 정보
    let url = req.body.url;
    console.log(req.body.url);
    let result = ''; //getHTML(); 
    async function getForum() {
        try {
            let response = await axios.get(
                url         // url을 가지고 axios.get을 통해 html dom을 가져옴
            );
            res.json({ data: response.data }); // 클라이언트에 값을 보냄.
        } catch (error) {
            console.error(error);
        }
    }
    result = getForum();
})

module.exports = router;