const express = require('express');
const router = express.Router()
const path = require('path');

router.get('/', (req, res) => {
	return res.sendFile(path.join(__dirname, '../BlockExport_Editor.html'));
}
)

module.exports = router;
