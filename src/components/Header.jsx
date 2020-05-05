import React from "react";
import "../styles/header.scss";

export default function Header(props) {
  /**
   * @var dividedHeader - A nested JSX object which allows CSS to apply text gradient to each character
   *
   * Lines are wrapped in <div>
   *   Words are wrapped in <p>
   *     Characters are wrapped in <span>
   */
  const dividedHeader = ['Elder Scrolls Legends', 'Card Browser'].map((line, idx) => {
    return <div key={`line-${idx}`}>{line.split(' ').map((word, idx) => {
      return <p key={`word-${idx}`}>{word.split('').map((char, idx) =>
        <span key={`char-${idx}`}>{char}</span>)}</p>
    })}</div>
  });
  return <header className={'main-header'}>
    <h1>{dividedHeader}</h1>
  </header>
}
