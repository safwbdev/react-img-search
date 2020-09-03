import React from "react";
import ImageCard from "./ImageCard";
import { Container, Row } from "reactstrap";

const SearchResults = ({ images }) => {
  return (
    <Container>
      <Row>
        {images &&
          images.map((image, index) => {
            return <ImageCard key={index} data={image} />;
          })}
      </Row>
    </Container>
  );
};
export default SearchResults;
