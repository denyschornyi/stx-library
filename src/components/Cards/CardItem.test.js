import React from "react";
import { shallow } from "enzyme";
import { CardItem } from "./CardItem";
import { Card, CardImg, CardBody, Button, Modal } from "reactstrap";

const book = {
  authors: ["Mark Reynolds"],
  categories: ["Computers"],
  description: "The Complete Novices",
  id: "6ONjBAAAQBAJ",
  img:
    "http://books.google.com/books/content?id=6ONjBAAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api",
  language: "en",
  link:
    "http://books.google.pl/books?id=6ONjBAAAQBAJ&pg=PA63&dq=gj+intitle&hl=&cd=1&source=gbs_api",
  pageCount: 87
};

describe("CardItem", () => {
  it("Contains div with children", () => {
    const wrapper = shallow(<CardItem book={book} />);
    expect(
      wrapper.containsMatchingElement([
        <Card>
          <CardImg />
          <CardBody></CardBody>
          <Modal></Modal>
        </Card>
      ])
    ).toEqual(true);
  });
});
