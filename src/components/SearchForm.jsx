import React from "react";

export default class SearchForm extends React.Component {
  constructor(props) {
    super(props);

    this.inputRef = React.createRef();

    this.state = {
      searchTerm: this.props.searchTerm
    };

    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.handleSubmit(this.inputRef.current.value);
  }

  render() {
    return <form onSubmit={this.handleSubmit}>
      <label>
        Search cards by name:
        <input type={'text'} ref={this.inputRef} placeholder={'Full or partial name'} />
      </label>

      <button type={'submit'}>Search</button>
    </form>
  }
}