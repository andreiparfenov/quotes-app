import React from "react";
import { connect } from "react-redux";
import Quote from "./Quote";
import { getQuotesByVisibilityFilter } from "../redux/selectors";
import { VISIBILITY_FILTERS } from "../constants";

const Quotes = ({ quotes }) => (
  <ul className="quotes">
    {quotes && quotes.length ? quotes.map((quote, i) => {
      return <Quote key={`quote-${quote.id}`} quote={quote} />;
    }) : "No quotes available! :("}
  </ul>
);

const mapStateToProps = state => {
  const { visibilityFilter } = state;
  const quotes = getQuotesByVisibilityFilter(state, visibilityFilter);
  return { quotes };
};

export default connect(mapStateToProps)(Quotes);