import React, { Component } from 'react';
import { Form, Input } from 'reactstrap';

class SearchInput extends Component {

  state = {
    dataSearch: ''
  }

  onSubmit = e => {
    e.preventDefault()

    this.setState({ [e.target.name]: e.target.value })
    console.log("buscando", this.state.dataSearch)
    //this.props.SearchItem(this.state.dataSearch)
  }

  render() {
    return (
      <Form>
        <Input
          type="text"
          name="search"
          id="search"
          placeholder="Search"
          className="mb-4"
          onChange={this.onSubmit} />
      </Form>
    );
  }
}

export default SearchInput;