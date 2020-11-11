import React from "react";
import { Input, Button, Form } from "reactstrap";

import "./HeaderForm.css";

export function HeaderForm({
  handleSubmit,
  query,
  setQuery,
  searchBy,
  setSearchBy
}) {
  return (
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
  );
}
