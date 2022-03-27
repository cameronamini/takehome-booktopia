import React from "react";

export default function Book({ imgURL, title, authors, publishDate }) {
  const errorHandler = (e) => {
    e.currentTarget.src = fallBackSrc;
  };
  const renderAuthors = authors.map((author, i) => {
    if (i !== 0 || i !== authors.length - 1) {
      return <span key={`author-${author}`}>{`, ${author}`}</span>;
    } else {
      return <span key={`author-${author}`}>{author}</span>;
    }
  });

  const fallBackSrc =
    "https://assets.prod.abebookscdn.com/cdn/com/images/servlets/ListingDetails/no-image.gif";
  return (
    <div className="card">
      <img
        className="cover"
        src={imgURL}
        alt={`${title} book cover`}
        onError={errorHandler}
      />
      <div className="infoWrapper">
        <h6>{title}</h6>
        <div>By {renderAuthors}</div>
        <p>{publishDate}</p>
      </div>
    </div>
  );
}
//
//'https://www.bilco.com/Images/No-image-found.jpg'
