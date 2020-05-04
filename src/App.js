import React from 'react';

import Header from "./components/Header";
import SearchForm from "./components/SearchForm";
import Card from "./components/Card";
import LoadingIndicator from "./components/LoadingIndicator";
import ScrollTop from "./components/ScrollTop";

import "./styles/app.scss";

export default class App extends React.Component {
  constructor(props) {
    super(props);

    this.MAX_CARD_COUNT = 5;
    this.API_URL = 'https://api.elderscrollslegends.io/v1/cards';

    this.state = {latestPage: 1, cardsData: [], nameToSearch: '', searchInProgress: false, allResultsCount: 0};

    this.searchForTerm = this.searchForTerm.bind(this);
    this.loadMoreCards = this.loadMoreCards.bind(this);
  }

  componentDidMount() {
    this.fetchCardData();

    document.addEventListener("scroll", this.loadMoreCards);
  }

  fetchCardData() {
    let fetchParams = {
      pageSize: this.MAX_CARD_COUNT,
      page: this.state.latestPage,
      name: this.state.nameToSearch
    };
    let fetchParamString = Object.keys(fetchParams).map(key => `${key}=${fetchParams[key]}`).join('&');

    fetch(`${this.API_URL}?${fetchParamString}`, {mode: 'cors'})
      // Response body must be transformed into usable data type
      .then(response => response.json())
      .then(data => {
        this.setState((prevState) => {
          const cardsData = prevState.cardsData.concat(data.cards);
          return {cardsData, allResultsCount: data._totalCount, searchInProgress: false};
        });
        console.info(data.cards[0]);
      });
  }

  searchForTerm(searchTerm) {
    // Only initiate data fetch is there is a new term to fetch
    if (searchTerm !== this.state.nameToSearch) {
      this.setState({cardsData: [], nameToSearch: searchTerm, latestPage: 1, searchInProgress: true}, () => {
        this.fetchCardData();
      });
    }
  }

  loadMoreCards() {
    console.info(this.state.cardsData.length);
    console.info(this.MAX_CARD_COUNT);

    // If count is below max page #, we know there are no more cards to fetch
    if ((this.state.cardsData.length >= this.state.allResultsCount) || this.state.searchInProgress) return;

    const lastCard = document.querySelector(".card:last-of-type");

    //if (!lastCard) return;

    const boundingRect = lastCard.getBoundingClientRect();

    if (boundingRect.top <= boundingRect.height) {
      this.setState(prevState => {
        return {searchInProgress: true, latestPage: prevState.latestPage + 1}
      }, () => {
        this.fetchCardData();
      });
    }
  }

  render() {
    return ([
      <div className={'cards-layout'}>
        <Header />
        <SearchForm searchTerm={this.state.nameToSearch} resultsCount={this.state.cardsData.length}
                    allResultsCount={this.state.allResultsCount} handleSubmit={this.searchForTerm} />
        <div className={'cards-list container'}>
          {this.state.cardsData.map(cardData => <Card key={cardData.name} cardData={cardData} />)}
          {this.state.searchInProgress ? <LoadingIndicator /> : null}
        </div>
      </div>,
      <ScrollTop />
    ]);
  }
}
