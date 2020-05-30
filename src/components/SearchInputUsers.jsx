import React, { Component } from 'react'
import { Input } from 'reactstrap'
import { connect } from 'react-redux'
import { searchUsers } from '../actions/userAction'

class SearchInputUsers extends Component {

  state = {}

  onChange = (e) => {
    this.setState({ [e.target.name]: e.target.value })

    console.log(this.state)
    this.props.searchUsers(this.state.search)
}

  render() {
    return (
        <Input
          type="text"
          name="search"
          id="search"
          placeholder="Search"
          className="mb-4"
          onChange={this.onChange} />
    );
  }
}

export default connect(null, { searchUsers })(SearchInputUsers)