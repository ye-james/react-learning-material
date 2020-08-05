import unsplashed from "../api/unsplashed";

import React from "react";
import SearchBar from "./SearchBar";
import ImageList from "./ImageList";

class App extends React.Component {
  state = {
    images: [],
  };

  onSearchSubmit = async (term) => {
    const response = await unsplashed.get("search/photos", {
      params: { query: term },
    });

    this.setState({
      images: response.data.results,
    });
  };

  render() {
    return (
      <div>
        <SearchBar
          className="ui container"
          style={{ marginTop: "10px" }}
          onSubmit={this.onSearchSubmit}
        />
        Found: {this.state.images.length} images
        <ImageList images={this.state.images} />
      </div>
    );
  }
}

export default App;
