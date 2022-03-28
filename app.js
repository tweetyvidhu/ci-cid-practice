const express = require('express')
const app = express()

app.get("/names", (req, res) => {
	app.send("vidyashree")
})

app.listen(5000, () => {
	console.log("server is running at port 5000")
})