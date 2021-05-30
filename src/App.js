import Countries from "./Countries";
import "./App.css";
import SearchForm from "./SearchForm";
import React, { useState } from "react";

const App = () => {
  const [search, setSearch] = useState("");
  return (
    <div className="App">
      <SearchForm search={search} setSearch={setSearch} />
      <Countries search={search} />
    </div>
  );
};

export default App;
