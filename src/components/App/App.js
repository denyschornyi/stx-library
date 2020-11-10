import React, { useState } from "react";
import "./App.css";
import { Input, Button, Spinner, Form } from "reactstrap";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.min.css";

import { getData } from "../../service/getData";
import { exttractData } from "../../service/utils";
import { CardItem } from "../Cards/CardItem";

function App() {
  const [query, setQuery] = useState("");
  const [books, setBooks] = useState([]);
  const [loading, setLoading] = useState(false);
  const [searchBy, setSearchBy] = useState("intitle");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (query) {
      setLoading(true);
      getData(query, searchBy).then((data) => {
        const books = data.items.map((book) => exttractData(book));
        setBooks(books);
      });
      setLoading(false);
    } else {
      toast.error("Please make your request");
    }
  };

  return (
    <div className="App">
      <ToastContainer />
      <div className="main-image d-flex justify-content-center align-items-center flex-column mb-5">
        <div className="filter"></div>
        <h1 className="display-2 text-center text-white" style={{ zIndex: 2 }}>
          Be Smart
        </h1>
        <p className=" text-center text-white mb-3" style={{ zIndex: 2 }}>
          Google Books
        </p>
        <div className="form-wrapper">
          <Form onSubmit={(e) => handleSubmit(e)}>
            <div className="d-md-flex flex-lg-row flex-md-row flex-sm-column input-buttons-group">
              <Input
                className="mr-lg-3"
                placeholder="Find your book"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
              />
              <Input
                className="mr-lg-3"
                type="select"
                value={searchBy}
                onChange={(e) => {
                  const value = e.currentTarget.value;
                  setSearchBy(value);
                }}
              >
                <option value="intitle">Title</option>
                <option value="inauthor">Author</option>
                <option value="inpublisher">Publisher</option>
              </Input>
              <div className="button-wrapper">
                <Button color="secondary" onClick={handleSubmit}>
                  Search
                </Button>
              </div>
            </div>
          </Form>
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
