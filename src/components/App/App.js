import React, { useState } from "react";
import "./App.css";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.min.css";
import InfiniteScroll from "react-infinite-scroll-component";

import { getData } from "../../service/getData";
import { exttractData } from "../../service/utils";
import { HeaderForm } from "../HeaderForm/HeaderForm";
import { CardItem } from "../Cards/CardItem";
import { Loader } from "../Loader/Loader";

export function App() {
  const [query, setQuery] = useState("");
  const [books, setBooks] = useState([]);
  const [loading, setLoading] = useState(false);
  const [searchBy, setSearchBy] = useState("intitle");
  const [startIndex, setStartIndex] = useState(0);
  const [hasMoreItem, setHasMoreItem] = useState(true);

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    if (query) {
      getData(query, searchBy).then((data) => {
        if (data.totalItems > 0) {
          const books = data.items.map((book) => exttractData(book));
          setBooks(books);
        } else {
          toast.warning(
            `We are so sorry, nothing was found.  Please try another book`,
            {
              pauseOnHover: false
            }
          );
        }
      });
      setLoading(false);
    } else {
      toast.error("Please make your request", {
        pauseOnHover: false
      });
      setLoading(false);
    }
    setHasMoreItem(true);
  };

  const fetchBooks = () => {
    setStartIndex(startIndex + 10);
    getData(query, searchBy, startIndex + 10).then((data) => {
      if (data.items) {
        let newBooks = data.items.map((book) => {
          return exttractData(book);
        });
        setBooks([...books, ...newBooks]);
      } else {
        setHasMoreItem(false);
      }
    });
  };

  return (
    <div className="App">
      <HeaderForm
        handleSubmit={handleSubmit}
        query={query}
        setQuery={setQuery}
        searchBy={searchBy}
        setSearchBy={setSearchBy}
      />

      {loading ? <Loader /> : ""}

      {books.length > 0 && loading === false ? (
        <div className="container">
          <InfiniteScroll
            dataLength={books.length}
            next={fetchBooks}
            hasMore={hasMoreItem}
            loader={<Loader />}
            endMessage={
              <p className="text-center">
                <b>No more results.</b>
              </p>
            }
          >
            <div className="w-100 h-100 row">
              {books.map((book) => (
                <div className="col-lg-4 mb-3" key={book.id}>
                  <CardItem book={book} />
                </div>
              ))}
            </div>
          </InfiniteScroll>
        </div>
      ) : (
        ""
      )}

      <ToastContainer />
    </div>
  );
}
