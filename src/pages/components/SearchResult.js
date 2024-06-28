import React from 'react';
import "./Search.css";

function SearchResult({ result }) { 
  return (
    <div className="search-result">
      {result.name} - {result.subject}
    </div>
  );
};

export default SearchResult;
