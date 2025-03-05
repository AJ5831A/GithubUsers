import React, { useState } from "react";

function Searchbar({onSearch}) {
  const [username, setUsername] = useState("");

  const handleSearch = () => {
      if(username.trim()){
        onSearch(username)
        setUsername('')
      }
  };

  return (
    <div className="search-bar">
      <input
        type="text"
        placeholder="Enter github username ..."
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        onKeyDown={(e)=>e.key==='Enter' && handleSearch()}
      />
      <button onClick={handleSearch}>Search 🔎</button>
    </div>
  );
}

export default Searchbar;
