import React from 'react';

const Miniature = (props) => {
    return (
        <div className="new-miniature" key={props.url}>
            <a href={props.url} target="_blank" rel="noopener noreferrer">
                <h3>{props.title}</h3>
                <img src={props.urlToImage} alt="" />
                <p>{props.author}</p>
            </a>
        </div>
    );
};

export default Miniature;
