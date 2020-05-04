import React from 'react';
import "../styles/cards-layout.scss";
import { Card } from "../components/Card";
import SearchForm from "../components/SearchForm";
import LoadingIndicator from "../components/LoadingIndicator";

export default class CardsLayout extends React.Component {
  constructor(props) {
    super(props);

    this.MAX_CARD_COUNT = 20;
    this.API_URL = 'https://api.elderscrollslegends.io/v1/cards';

    this.state = {latestPage: 0, cardsData: [], nameToSearch: '', searchInProgress: false};

    this.searchForTerm = this.searchForTerm.bind(this);
  }

  componentDidMount() {
    this.fetchCardData();
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
        this.setState({cardsData: data.cards || [], searchInProgress: false});
        console.info(data.cards[0]);
      });
  }

  searchForTerm(searchTerm) {
    this.setState({cardsData: [], nameToSearch: searchTerm, searchInProgress: true},() => {
        this.fetchCardData();
      });
  }

  render() {
    if (this.state.searchInProgress) return <LoadingIndicator/>;

    return (
      <div className={'cards-container'}>
        <header>
          <h1>Elder Scrolls Legends Cards</h1>
          <SearchForm searchTerm={this.state.nameToSearch} handleSubmit={this.searchForTerm} />
        </header>
        <div className={'cards-list'}>
          {
            this.state.cardsData
              ? this.state.cardsData.map(cardData => <Card key={cardData.name} cardData={cardData} />)
              : <p>No search results returned.</p>
          }
        </div>
      </div>
    );
  }
}