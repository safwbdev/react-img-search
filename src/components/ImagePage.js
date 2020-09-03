import React from "react";
import {
  Container,
  Row,
  Col,
  Card,
  CardText,
  CardBody,
  CardTitle,
  CardSubtitle,
} from "reactstrap";

const ImagePage = (props) => {
  const {
    downloads,
    favorites,
    id,
    imageHeight,
    imageSize,
    imageWidth,
    largeImageURL,
    likes,
    pageURL,
    tags,
    user,
    userImageURL,
    user_id,
    views,
  } = props.location.state.data;
  return (
    <Container className="image-page">
      <Row>
        <Col xs={12} sm={8}>
          <img src={largeImageURL} alt={tags} className="full-width" />
          <a
            href="https://pixabay.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <div className="copyright">&copy; pixabay</div>
          </a>
        </Col>
        <Col xs={12} sm={4} className="image-details">
          <Card>
            <CardBody>
              <CardTitle className="profile">
                <a
                  href={`https://pixabay.com/users/${user_id}`}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img src={userImageURL} alt={user} />
                  {user}
                </a>
              </CardTitle>
              <CardSubtitle>&nbsp;</CardSubtitle>
              <CardText className="desc">
                <p>
                  {" "}
                  Download:{" "}
                  <span>
                    <a href={pageURL} target="_blank" rel="noopener noreferrer">
                      Download from original site
                    </a>
                  </span>
                </p>
                <p>
                  {" "}
                  View Original size:{" "}
                  <span>
                    <a
                      href={largeImageURL}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      View
                    </a>
                  </span>
                </p>
                <p>
                  Dimensions:{" "}
                  <span>
                    <span className="grey">{imageHeight}</span> x{" "}
                    <span className="grey">{imageWidth}</span>
                  </span>
                </p>
                <p>
                  Image ID: <span className="grey">{id}</span>
                </p>
                <p>
                  Tags: <span className="grey">{tags}</span>
                </p>
                <p>
                  Size:{" "}
                  <span>
                    <span className="grey">{imageSize}</span> bytes
                  </span>
                </p>
                <p>
                  <span className="grey">{views} Views</span>
                </p>
                <p>
                  <span>
                    <span className="grey">{likes}</span> Likes
                  </span>
                </p>
                <p>
                  <span>
                    <span className="grey">{downloads}</span> Downloads
                  </span>
                </p>
                <p>
                  <span>
                    Favorited <span className="grey">{favorites}</span> times
                  </span>
                </p>
              </CardText>
            </CardBody>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};
export default ImagePage;
