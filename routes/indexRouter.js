const express = require('express');
const router = express.Router()
const path = require('path');
const fs = require('fs');

// 노드 실행 환경 설정
const env = require('../config/config');

router.get('/', (req, res) => {
	/**
	 * 초기 접속 시 세션을 체크한다.
	 * a: 사용자 ID
	 * b: 스프링 세션 ID
	 */
	let memberId = req.query.a;
	let sessionId = req.query.b;

	console.log(`===>스프링 세션 아이디: ${sessionId}`);
	console.log(`===>노드 세션 아이디: ${req.session.id}`);
	console.log(`===>사용자 아이디: ${memberId}`);

	req.session.sessionId = sessionId;
	req.session.memberId = memberId;
	req.session.save();

	console.log("현재 환경: " + env)

	if (env.dev) {
		return res.sendFile(path.join(__dirname, '../views/BlockExport_Editor.html'));
	} else {
		if (sessionId) {
			return res.sendFile(path.join(__dirname, '../views/BlockExport_Editor.html'));
		} else {
			return res.sendFile(path.join(__dirname, "../views/error.html"));
		}
	}
})

module.exports = router;
