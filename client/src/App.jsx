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
        </div>
    );
}

export default App;
