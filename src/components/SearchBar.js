import React from "react";

class SearchBar extends React.Component {
  state = { term: "" };

  onTermSubmit = (event) => {
    event.preventDefault();
    this.props.onTermSubmit(this.state.term);
    this.setState({ term: "" });
  };

  onInputChange = (event) => {
    this.setState({ term: event.target.value });
  };

  render() {
    return (
      <div className="ui segment search-bar">
        <form className="ui form" onSubmit={this.onTermSubmit}>
          <div className="field">
            <label>Video Search</label>
            <input
              type="text"
              value={this.state.term}
              onChange={this.onInputChange}
            />
          </div>
        </form>
      </div>
    );
  }
}

export default SearchBar;
