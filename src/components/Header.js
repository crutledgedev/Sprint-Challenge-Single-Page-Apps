import React from "react";
import { Link } from "react-router-dom";

export default function Header() {
  return (
    <header className="ui centered">
      <h1 className="ui center">Rick &amp; Morty Fan Page</h1>
      <div>
        <Link to="/">Home</Link>
      </div>
      <div>
        <Link to="/Character">Cast of Characters</Link>
      </div>
    </header>
  );
}
