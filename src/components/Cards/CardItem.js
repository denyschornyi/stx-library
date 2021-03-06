import React, { useState } from "react";
import "./cards.css";

import { Card, CardImg, CardBody, Button, Modal } from "reactstrap";
import TextTruncate from "react-text-truncate";

export function CardItem({ book }) {
  const [modal, setModal] = useState(false);

  const {
    title,
    img,
    description,
    authors,
    pageCount,
    categories,
    language,
    link
  } = book;

  const toggle = () => setModal(!modal);

  return (
    <Card style={{ width: "233px" }} className="m-auto ">
      <CardImg
        top
        style={{ width: "100%", height: "233px" }}
        src={img}
        alt={title}
      />
      <CardBody>
        <TextTruncate
          line={3}
          element="strong"
          truncateText="…"
          text={title}
          className="card-title"
        />
        <TextTruncate
          line={3}
          element="p"
          truncateText="…"
          className="text-secondary"
          text={description}
        />
        <Button onClick={toggle}>More Info</Button>
      </CardBody>
      <Modal isOpen={modal} toggle={toggle}>
        <div className="modal-header d-flex justify-content-center">
          <h5 className="modal-title text-center" id="exampleModalLabel">
            {title}
          </h5>
          <button
            aria-label="Close"
            className="close"
            type="button"
            onClick={toggle}
          >
            <span aria-hidden={true}>x</span>
          </button>
        </div>
        <div className="modal-body">
          <div className="d-flex justify-content-between ml-3">
            <img src={img} alt={title} style={{ height: "233px" }} />
            <div>
              <p>Page Count: {pageCount}</p>
              <p>Langeage: {language}</p>
              <p>Authors: {authors}</p>
              <p>Categories: {categories}</p>
            </div>
          </div>
          <div className="mt-3">{description}</div>
        </div>
        <div className="modal-footer">
          <div className="right-silde">
            <a
              href={link}
              className="btn-link"
              color="default"
              type="button"
              target="_blank"
              rel="noreferrer"
            >
              Info Link
            </a>
          </div>
        </div>
      </Modal>
    </Card>
  );
}
