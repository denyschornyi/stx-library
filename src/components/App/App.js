import React, { useState } from "react";
import "./App.css";
import {
  InputGroup,
  Input,
  InputGroupAddon,
  Button,
  Spinner
} from "reactstrap";

import { getData } from "../../service/getData";
import { exttractData } from "../../service/utils";
import Cards from "../Cards/Cards";

function App() {
  const [query, setQuery] = useState("");
  const [books, setBooks] = useState([]);
  const [loading, setLoading] = useState(false);

  const handleSubmit = () => {
    setLoading(true);
    getData(query).then((data) => {
      const books = data.items.map((book) => exttractData(book));
      setBooks(books);
    });
    setLoading(false);
  };

  return (
    <div className="App">
      <div className="main-image d-flex justify-content-center align-items-center flex-column">
        <div className="filter"></div>
        <h1 className="display-2 text-center text-white" style={{ zIndex: 2 }}>
          Be Smart
        </h1>
        <p className=" text-center text-white mb-3" style={{ zIndex: 2 }}>
          Google Books
        </p>
        <div style={{ width: "60%", zIndex: 2 }}>
          <InputGroup size="lg" className="mb-3">
            <Input
              placeholder="Book Search"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
            />
            <InputGroupAddon addonType="append">
              <Button color="secondary" onClick={handleSubmit}>
                <i className="fas fa-search"></i>
              </Button>
            </InputGroupAddon>
          </InputGroup>
        </div>
      </div>

      {loading ? (
        <div className="d-flex justify-content-center mt-3">
          <Spinner style={{ width: "3rem", height: "3rem" }} />
        </div>
      ) : (
        ""
      )}

      {books.length > 0 && loading === false ? <Cards books={books} /> : ""}
    </div>
  );
}

export default App;
