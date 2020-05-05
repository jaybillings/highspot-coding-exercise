import React from "react";
import "../styles/header.scss";

export default function Header(props) {
  /**
   * @var dividedHeader - A nested JSX object which allows CSS to apply text gradient to each character
   *
   * Lines are wrapped in <p>
   *   Words are wrapped in <div>
   *     Characters are wrapped in <span>
   */
  const dividedHeader = ['Elder Scrolls Legends', 'Card Browser'].map(line => {
    return <p>{line.split(' ').map(word => {
      return <div>{word.split('').map(char => <span>{char}</span>)}</div>
    })}</p>
  });
  return <header className={'main-header'}>
    <h1>{dividedHeader}</h1>
  </header>
}
