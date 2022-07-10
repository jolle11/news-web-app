const express = require("express");
const axios = require("axios");
const router = express.Router();

router.get(
	"/",
	async (req, res) => {
		try {
			let actualDay = new Date();
			let apiKey = "2c6bfa81c2e8403da6eff5d85b8d1432";
			actualDay.toISOString().split("T")[0];
			console.log(actualDay);
			let url = `http://newsapi.org/v2/everything?q=latest&from=${actualDay}&to=${actualDay}&sortBy=popularity&apiKey=${apiKey}`;

			const news_get = await axios.get(url);
			res.json(news_get.data.articles);
		} catch (error) {
			if (error.response) {
				console.log(error);
			}
		}
	},
);

module.exports = router;
