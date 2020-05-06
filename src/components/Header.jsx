import React from "react";
import "../styles/header.scss";

export default function Header(props) {
  /**
   * @var [String] props.title - Title is consumed as array to support multiple lines
   */
  return <header className={'main-header'}>
    <h1>{props.title.map(line => <div>{line}</div>)}</h1>
  </header>
}
