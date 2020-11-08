import React from "react";
import "./App.css";

import { InputGroup, Input, InputGroupAddon, Button } from "reactstrap";

function App() {
  const MainHeader = () => {
    return (
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
            <Input placeholder="Book Search  " />
            <InputGroupAddon addonType="append">
              <Button color="secondary">
                <i className="fas fa-search"></i>
              </Button>
            </InputGroupAddon>
          </InputGroup>
        </div>
      </div>
    );
  };
  return (
    <div className="App">
      <MainHeader />
    </div>
  );
}

export default App;
