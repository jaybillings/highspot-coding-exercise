import React from "react";
import "../styles/search-form.scss"
import { GiCancel } from "react-icons/gi";
import { FaSearch } from "react-icons/fa";

export default class SearchForm extends React.Component {
  constructor(props) {
    super(props);

    this.inputRef = React.createRef();

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
    return <div className={'search-form-wrapper container'}>
      <form onSubmit={this.handleSubmit} onReset={this.handleReset}>
        <label htmlFor={'name-input'}><span className={'sr-only'}>Search cards by full or partial name:</span></label>
        <div className={'fake-input'}>
          <input type={'text'} name={'name-input'} ref={this.inputRef} placeholder={'Search card names'} />
          <button type={'submit'} title={'Search cards'}><FaSearch /></button>
          <button type={'reset'} title={'Reset search results'}><GiCancel /></button>
        </div>
      </form>
      <p>Showing {this.props.resultsCount} cards of {this.props.allResultsCount} </p>
    </div>
  }
}