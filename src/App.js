import React from "react";
import AddQuote from "./components/AddQuote";
import Quotes from "./components/Quotes";
import VisibilityFilters from "./components/VisibilityFilters";

export default function QuoteApp() {
  return (
    <div className="quote-app">
      <h1>Quote List</h1>
      <AddQuote />
      <Quotes />
      <VisibilityFilters />
    </div>
  );
}
