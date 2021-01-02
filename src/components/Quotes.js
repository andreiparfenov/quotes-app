import React from "react";
import { connect } from "react-redux";
import Quote from "./Quote";
import { getQuotesByVisibilityFilter } from "../redux/selectors";
import fetchQuotes from '../redux/fetchQuotes';
import fetchQuotesAction from "../redux/fetchQuotes";
import { bindActionCreators } from 'redux';

class Quotes extends React.Component {
  render() {
    const {quotes} = this.props;
    return (
      <ul className="quotes">
        {quotes && quotes.length ? quotes.map((quote, i) => {
          return <Quote key={`quote-${quote.id}`} quote={quote} />;
        }) : "No quotes available! :("}
      </ul>
    )
  }
}

const mapStateToProps = state => {
  let quotes = fetchQuotes(state);
  const { visibilityFilter } = state;
  quotes = getQuotesByVisibilityFilter(state, visibilityFilter);
  return { quotes };
};

const mapDispatchToProps = dispatch => bindActionCreators({
  fetchQuotes: fetchQuotesAction
}, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(Quotes);
