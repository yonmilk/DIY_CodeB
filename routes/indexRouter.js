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
	 * c: 프로젝트에 대한 XML 데이터
	 * d: 프로젝트 아이디
	 * e: 프로젝트 타입(블록 코딩인지, 텍스트 코딩인지)
	 * f: 프로젝트에서 유저가 사용한 라이브러리
	 * 
	 */
	console.log(req.query);
	console.log(req.body);
	let memberId = req.query.a;
	let sessionId = req.query.b;
	let projectId = req.query.d;
	let xmlData = req.query.c;
	let projectType = req.query.e;
	let usedLibs = req.query.f;
	let editorCheckYn = req.query.g;
	let isChallenge = req.query.h;

	console.log("--------- Data from Spring -----------");
	console.log(`===>스프링 세션 아이디: ${sessionId}`);
	console.log(`===>노드 세션 아이디: ${req.session.id}`);
	console.log(`===>사용자 아이디: ${memberId}`);

	console.log(`===>프로젝트 아이디: ${projectId}`)
	console.log(`===>프로젝트 타입: ${projectType}`);
	console.log(`===>XML: ${xmlData}`);
	console.log(`===>사용한 라이브러리: ${usedLibs}`);
	console.log(`===>최초 에디터 열람 여부: ${editorCheckYn}`);
	console.log(`===>도전과제 여부: ${isChallenge}`);

	req.session.sessionId = sessionId;
	req.session.memberId = memberId;
	req.session.save();

	if (env.dev) {
		return res.render("BlockExport_Editor");
	} else {
		if (sessionId) {
			return res.render("BlockExport_Editor", {xmlData: xmlData});
		} else {
			return res.render("error");
		}
	}
})

module.exports = router;
