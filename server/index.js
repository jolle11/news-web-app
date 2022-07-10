const express = require("express");
const cors = require("cors"); // For the "ERR_NETWORK"

const PORT = 3001;

const server = express();

server.use(cors());

server.use("/", require("../routes/newsApi"));

server.listen(
	PORT,
	() => {
		console.log(`Server listening on ${PORT}`);
	},
);
