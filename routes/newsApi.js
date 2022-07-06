const express = require("express");
const axios = require("axios");
const router = express.Router();

router.get(
	"/",
	async (req, res) => {
		try {
			let url =
				"http://newsapi.org/v2/everything?" + "q=tech&" + "apiKey=2c6bfa81c2e8403da6eff5d85b8d1432";

			const news_get = await axios.get(url);
			// console.log(res);
			// console.log("news", { articles: news_get.data.articles });
			res.json({ articles: news_get.data.articles });
		} catch (error) {
			if (error.response) {
				console.log(error);
			}
		}
	},
);

router.post(
	"/search",
	async (req, res) => {
		const search = req.body.search;
		// console.log(req.body.search)
		try {
			let url = `http://newsapi.org/v2/everything?q=${search}&apiKey=579b3659478549c5a876913518ba3904`;

			const news_get = await axios.get(url);
			res.render("news", { articles: news_get.data.articles });
		} catch (error) {
			if (error.response) {
				console.log(error);
			}
		}
	},
);

module.exports = router;
