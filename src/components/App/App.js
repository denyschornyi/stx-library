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
import { CardItem } from "../Cards/CardItem";

function App() {
  const [query, setQuery] = useState("");
  const [books, setBooks] = useState([]);
  const [loading, setLoading] = useState(false);
  const [searchBy, setSearchBy] = useState("intitle");

  const handleSubmit = () => {
    setLoading(true);
    getData(query, searchBy).then((data) => {
      const books = data.items.map((book) => exttractData(book));
      setBooks(books);
    });
    setLoading(false);
  };

  return (
    <div className="App">
      <div className="main-image d-flex justify-content-center align-items-center flex-column mb-5">
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
            <Input
              type="select"
              value={searchBy}
              onChange={(e) => {
                const value = e.currentTarget.value;
                setSearchBy(value);
              }}
            >
              <option value="intitle">title</option>
              <option value="inauthor">author</option>
              <option value="inpublisher">publisher</option>
            </Input>
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

      <div className="container">
        <div className="w-100 h-100 row">
          {books.length > 0 && loading === false
            ? books.map((book) => (
                <div className="col-lg-4 mb-3" key={book.id}>
                  <CardItem book={book} />
                </div>
              ))
            : ""}
        </div>
      </div>
    </div>
  );
}

export default App;
