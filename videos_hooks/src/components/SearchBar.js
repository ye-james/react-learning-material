import React, { useState } from "react";

const SearchBar = ({ onFormSubmit }) => {
  const [term, setTerm] = useState("");

  const handleFormSubmit = (event) => {
    event.preventDefault();
    onFormSubmit(term);
    //TO DO: Make sure we call callback from parent component
  };

  return (
    <div className="search-bar ui segment">
      <form onSubmit={handleFormSubmit} className="ui form">
        <div className="field">
          <label>Video Search:</label>
          <input
            type="text"
            value={term}
            onChange={(event) => setTerm(event.target.value)}
          />
        </div>
      </form>
    </div>
  );
};

export default SearchBar;
