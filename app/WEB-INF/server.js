'use strict';
let express = require('express');
let path = require('path');
let app = express();
const PORT = 8001;
const APP_PATH = path.join(__dirname, '../');
const APP_MOUNT_PATH = '/';
const EXCLUDE_MOUNT_PATH = '/WEB-INF';

app.use(EXCLUDE_MOUNT_PATH, (req, res, next) => {
	console.log(`accessing content from ${EXCLUDE_MOUNT_PATH}`);
	res.sendStatus(404);
});
app.use(APP_MOUNT_PATH, express.static(APP_PATH));

console.log(`Serving ${APP_PATH} with express, listening on port ${PORT}`);

app.listen(PORT);