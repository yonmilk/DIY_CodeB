const express = require('express');
const router = express.Router()

router.get('/', (req, res) => {
	return res.sendFile('../BlockExport_Editor.html');
}
)

module.exports = router;
