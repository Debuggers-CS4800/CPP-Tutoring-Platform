import React from 'react'
import "./Search.css"
import { useNavigate } from "react-router-dom";

function SearchResult({ result }) { 
	const navigate = useNavigate()
  const gotToNewPage=()=>{
    navigate("/SelectedResult");
  }
  return (
    <div
      className="search-result"
      onClick={(e) => alert(`You selected ${result}!`)}
    >
      {result}
    </div>
  );
};
      
export default SearchResult;