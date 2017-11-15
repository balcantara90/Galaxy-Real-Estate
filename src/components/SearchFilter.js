import React, { Component } from 'react';

class SearchFilter extends Component {
  constructor(props){
    super(props);
    this.state = {
      searchQuery: this.props.searchQuery
    }
  }
  updateSearch(e){
    this.setState({searchQuery:e.target.value});
  }
  render() {
    return (
      <div className="col-lg-12">
        <div className="input-group p-b-2">
          <input onChange={this.updateSearch.bind(this)} type="text" className="form-control" value={this.state.searchQuery} placeholder="Search for planet..." />
          <span className="input-group-btn">
            <button className="btn btn-default" type="button">Search</button>
          </span>
        </div>
      </div>
    );
  }
}

export default SearchFilter;
