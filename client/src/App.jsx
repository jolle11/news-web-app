import React from 'react';
import { useEffect, useState } from 'react';

import './app.scss';

import { BsNewspaper } from 'react-icons/bs';

const axios = require('axios');

function App() {
    const [latestNews, setLatestNews] = useState([{}]);
    const [searchInput, setSearchInput] = useState('');
    const [filteredResults, setFilteredResults] = useState([{}]);

    useEffect(() => {
        async function getNews() {
            try {
                const response = await axios.get('http://localhost:3001/');
                setLatestNews(response.data);
            } catch (error) {
                console.error(error);
            }
        }
        getNews();
    }, []);

    function handleInputSearch(e) {
        setSearchInput(e.target.value);
        if (searchInput !== '') {
            const filteredData = latestNews.filter((item) => {
                return Object.values(item)
                    .join('')
                    .toLowerCase()
                    .includes(searchInput.toLowerCase());
            });
            setFilteredResults(filteredData);
        } else {
            setFilteredResults(latestNews);
        }
    }

    return (
        <div className="app">
            <h1>
                The Latest News <BsNewspaper />
            </h1>
            <form>
                <input
                    type="text"
                    placeholder="🧐 Search by keyword..."
                    className="search-input"
                    onChange={handleInputSearch}
                />
            </form>
            {searchInput.length > 1 ? (
                <ul>
                    {filteredResults.map((item) => {
                        return (
                            <li className="new-miniature" key={item.url}>
                                <a
                                    href={item.url}
                                    target="_blank"
                                    className="miniature-link"
                                    rel="noopener noreferrer"
                                >
                                    <h3>{item.title}</h3>
                                    <img src={item.urlToImage} alt="" className="news-image" />
                                    <p>{item.author}</p>
                                </a>
                            </li>
                        );
                    })}
                </ul>
            ) : (
                <ul>
                    {latestNews.map((item) => {
                        return (
                            <li className="new-miniature" key={item.url}>
                                <a
                                    href={item.url}
                                    target="_blank"
                                    className=""
                                    rel="noopener noreferrer"
                                >
                                    <h3>{item.title}</h3>
                                    <img src={item.urlToImage} alt="" className="news-image" />
                                    <p>{item.author}</p>
                                </a>
                            </li>
                        );
                    })}
                </ul>
            )}
            {/* <ul className="miniatures-list">
                <li className="new-miniature">
                    <a href="#" target="_blank" className="miniature-link">
                        <h3>Miniature Title Random and with Two Lines</h3>
                        <img
                            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS-QH6fZdPWphmLySiu5sVps6OMLDMwW7MdYg&usqp=CAU"
                            className="news-image"
                            alt="news-img"
                        />
                        <p>Jordi Olle</p>
                    </a>
                </li>
                <li className="new-miniature">
                    <a href="#" target="_blank">
                        <h3>Miniature Title Random and with two lines</h3>
                        <img
                            src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/9a/Random-image.jpg/800px-Random-image.jpg"
                            className="news-image"
                            alt="news-img"
                        />
                        <p>Jordi Olle</p>
                    </a>
                </li>
                <li className="new-miniature">
                    <a href="#" target="_blank">
                        <h3>Miniature Title Random and with two lines</h3>
                        <img
                            src="https://media-exp1.licdn.com/dms/image/C560BAQG4jOjOiM3ecA/company-logo_200_200/0/1526299002239?e=2147483647&v=beta&t=BVUnvM9hsQ7MvxKf4clfq7J0bhnytdmNH8JWV7roEoU"
                            className="news-image"
                            alt="news-img"
                        />
                        <p>Jordi Olle</p>
                    </a>
                </li>
                <li className="new-miniature">
                    <a href="#" target="_blank">
                        <h3>Miniature Title Random and with Two Lines</h3>
                        <img
                            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS-QH6fZdPWphmLySiu5sVps6OMLDMwW7MdYg&usqp=CAU"
                            className="news-image"
                            alt="news-img"
                        />
                        <p>Jordi Olle</p>
                    </a>
                </li>
                <li className="new-miniature">
                    <a href="#" target="_blank">
                        <h3>Miniature Title Random and with two lines</h3>
                        <img
                            src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/9a/Random-image.jpg/800px-Random-image.jpg"
                            className="news-image"
                            alt="news-img"
                        />
                        <p>Jordi Olle</p>
                    </a>
                </li>
                <li className="new-miniature">
                    <a href="#" target="_blank">
                        <h3>Miniature Title Random and with two lines</h3>
                        <img
                            src="https://media-exp1.licdn.com/dms/image/C560BAQG4jOjOiM3ecA/company-logo_200_200/0/1526299002239?e=2147483647&v=beta&t=BVUnvM9hsQ7MvxKf4clfq7J0bhnytdmNH8JWV7roEoU"
                            className="news-image"
                            alt="news-img"
                        />
                        <p>Jordi Olle</p>
                    </a>
                </li>
            </ul> */}
        </div>
    );
}

export default App;
