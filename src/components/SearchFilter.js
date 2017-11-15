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
      <div className="row search-filter">
        <div className="col-lg-12">
          <h3>Find your planet now!</h3>
          <div className="p-b-2">
            <input onChange={this.updateSearch.bind(this)} type="text" className="form-control" value={this.state.searchQuery} placeholder="Search for planet..." />
          </div>
        </div>
      </div>
    );
  }
}

export default SearchFilter;
