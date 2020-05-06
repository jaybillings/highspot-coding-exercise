import React from "react";
import "../styles/header.scss";

export default function Header(props) {
  /** @var [String] props.title - Title is consumed as array to support multiple lines */
  // Line is split up into <div> chunks and words into <span> chunks to enable word-level gradients
  return <header className={'main-header'}>
    <h1>{props.title.map(line => <div>{line.split(' ').map(word => <span>{word}</span>)}</div>)}</h1>
  </header>
}
