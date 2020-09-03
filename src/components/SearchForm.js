import React from "react";
import { Button, Input, Row, Col, Container } from "reactstrap";

const SearchForm = ({ handleGetRequest }) => {
  return (
    <Container>
      <Row>
        <Col>
          <form onSubmit={handleGetRequest}>
            <div className="search-form">
              <Input
                type="text"
                autoComplete="false"
                name="searchQuery"
                placeholder="Search your images"
              />
              <Button>
                <i class="fas fa-search"></i>
                <span>Search</span>
              </Button>
            </div>
          </form>
        </Col>
      </Row>
    </Container>
  );
};
export default SearchForm;
