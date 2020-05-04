import React from "react";
import "../styles/search-form.scss"

export default class SearchForm extends React.Component {
  constructor(props) {
    super(props);

    this.inputRef = React.createRef();

    this.state = {
      searchTerm: this.props.searchTerm
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleReset = this.handleReset.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.handleSubmit(this.inputRef.current.value);
  }

  handleReset() {
    this.props.handleSubmit('');
  }

  render() {
    return <div className={'search-container container'}>
      <form onSubmit={this.handleSubmit} onReset={this.handleReset}>
        <label htmlFor={'name-input'}><span className={'sr-only'}>Search cards by full or partial name:</span></label>
        <input type={'text'} name={'name-input'} ref={this.inputRef} placeholder={'Full or partial name'} />
        <button type={'submit'}>Search</button>
        <button type={'reset'}>Reset Search</button>
      </form>
      <p>Showing {this.props.resultsCount} cards of {this.props.allResultsCount} </p>
    </div>
  }
}