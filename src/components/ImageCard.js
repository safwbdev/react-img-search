import React from "react";
import { Link } from "react-router-dom";
import { Col, Card, CardImg } from "reactstrap";

const ImageCard = ({ data }) => {
  return (
    <Col xs={6} sm={6} md={4} lg={3} className="image-card">
      <Link to={{ pathname: `/image/${data.id}`, state: { data } }}>
        <Card>
          <CardImg top width="100%" src={data.largeImageURL} alt={data.tags} />
        </Card>
      </Link>
    </Col>
  );
};

export default ImageCard;
