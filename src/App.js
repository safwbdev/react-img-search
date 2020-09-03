import React, { Component } from "react";
import "./App.css";
import SearchForm from "./components/SearchForm";
import SearchResults from "./components/SearchResults";

const getApiKey = process.env.REACT_APP_API_KEY;

class App extends Component {
  state = {
    images: [],
    error: false,
  };
  handleGetRequest = async (e) => {
    e.preventDefault();

    const searchQuery = e.target.elements.searchQuery.value;

    const url = `https://pixabay.com/api/?key=${getApiKey}&q=${searchQuery}&image_type=photo&pretty=true`;

    const request = await fetch(url);

    const response = await request.json();

    if (!searchQuery) {
      this.setState({ error: true });
    } else {
      this.setState({ images: [], error: false });
      this.setState({ images: response.hits, error: false });
    }
  };

  render() {
    const { images, error } = this.state;
    return (
      <div className="App">
        <SearchForm handleGetRequest={this.handleGetRequest} />
        {error ? (
          <div className="error">Please enter a search query</div>
        ) : (
          <SearchResults images={images} />
        )}
      </div>
    );
  }
}

export default App;
