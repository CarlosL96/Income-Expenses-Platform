const { Router } = require("express");
const router = Router();
const db = require("../../db/mysql")
const bcrypt = require("bcrypt");

router.post("/", async (req, res) => {
	const { username, password } = req.body;
	if (!username || !password) {
		console.log("Unexpected data format at login endpoint");
		res.send({ username: "Unknown", success: false });
		return;
	}
	const response = await db.retrieveUser(username);
	if (response.error) {
		console.log(`User doesn't exists`);
		res.send({ username: "Unknown", success: false });
		return;
	}
	const authorized = await bcrypt.compare(password, response.data.password);
	if (authorized) {
		console.log(`User ${response.data.nombre_usuario} has been authenticated`);
		res.send({ username: response.data.nombre_usuario, success: true });
	} else {
		console.log(`User ${response.data.nombre_usuario} has not been authenticated`);
		res.send({ username: "Unknown", success: false });
	}
});

module.exports = router;
