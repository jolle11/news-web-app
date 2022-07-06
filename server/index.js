const express = require("express");

const PORT = process.env.PORT || 3001;

const server = express();

server.use("/", require("../routes/index"));
server.use("/news", require("../routes/newsApi"));

server.listen(
	PORT,
	() => {
		console.log(`Server listening on ${PORT}`);
	},
);
