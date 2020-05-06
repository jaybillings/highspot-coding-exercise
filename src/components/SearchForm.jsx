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

  handleFocus(e) {
    console.log(e);
    return e.target.parentNode.classList.add('active');
  }

  handleBlur(e) {
    return e.target.parentNode.classList.remove('active');
  }

  render() {
    return <div className={'search-form-wrapper container'}>
      <form onSubmit={this.handleSubmit} onReset={this.handleReset}>
        <label htmlFor={'name-input'}><span className={'sr-only'}>Search cards by full or partial name:</span></label>
        <div className={'fake-input'}>
          <input type={'text'} name={'name-input'} ref={this.inputRef} placeholder={'Search card names'}
                 onBlur={this.handleBlur} onFocus={this.handleFocus} onClick={this.handleFocus}
                 onMouseEnter={this.handleFocus} onMouseOut={this.handleBlur} />
          <button className={'submit'} type={'submit'} title={'Search cards'}><FaSearch /></button>
          <button className={'reset'} type={'reset'} title={'Reset search results'}><GiCancel /></button>
        </div>
      </form>
      <p>Showing {this.props.resultsCount} {this.props.resultsCount === 1 ? 'card' : 'cards'} of {this.props.allResultsCount} </p>
    </div>
  }
}