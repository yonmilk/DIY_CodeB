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

	// View(BlockExport_Editor)로 전송할 데이터 오브젝트 생성
	const dataObject = {
		envMode: env.mode,
		memberId: req.body.a == null ? "" : req.body.a,
		memberSeq: req.body.i == null ? -1 : req.body.i,
		sessionId: req.body.b == null ? "" : req.body.b,
		projectId: req.body.d == "" ? -1 : req.body.d,
		xmlForTabFirst: req.body.c == null ? "" : req.body.c,
		xmlForTabSecond: req.body.z == null ? "" : req.body.z,
		xmlForTabThird: req.body.x == null ? "" : req.body.x,
		pyCode: req.body.v == null ? "" : req.body.v,
		tabNameList: req.body.w == null ? "" : req.body.w,
		projectType: req.body.e == null ? 1 : req.body.e,
		usedLibs: req.body.f == null ? "" : req.body.f,
		editorCheckYn: req.body.g == null ? "" : req.body.g,
		isChallenge: req.body.h == null ? 0 : req.body.h,
	}

	console.log("--------- Data from Spring -----------");
	console.log(`===>현재 실행 모드: ${dataObject.envMode}`)
	console.log(`===>스프링 세션 아이디: ${dataObject.sessionId}`);
	console.log(`===>노드 세션 아이디: ${req.session.id}`);
	console.log(`===>사용자 시퀀스: ${dataObject.memberSeq}`);
	console.log(`===>사용자 아이디: ${dataObject.memberId}`);

	console.log(`===>프로젝트 아이디: ${dataObject.projectId}`)
	console.log(`===>프로젝트 타입: ${dataObject.projectType}`);
	console.log(`===>XML for tab first: ${dataObject.xmlForTabFirst}`);
	console.log(`===>XML for tab second: ${dataObject.xmlForTabSecond}`);
	console.log(`===>XML for tab third: ${dataObject.xmlForTabThird}`);
	console.log(`===>Py code: ${dataObject.pyCode}`);
	console.log(`===>Tab Name List: ${dataObject.tabNameList}`);
	console.log(`===>사용한 라이브러리: ${dataObject.usedLibs}`);
	console.log(`===>최초 에디터 열람 여부: ${dataObject.editorCheckYn}`);
	console.log(`===>도전과제 여부: ${dataObject.isChallenge}`);

	req.session.sessionId = dataObject.sessionId;
	req.session.memberId = dataObject.memberId;
	req.session.save();

	switch (env.mode) {
		case "node":
			return res.render("BlockExport_Editor", dataObject);

		case "spring":
			if (dataObject.sessionId) {
				return res.render("BlockExport_Editor", dataObject);
			} else {
				return res.render("error");
			}
	
		default:
			break;
	}
})

module.exports = router;
