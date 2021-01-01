import React from "react";
import { connect } from "react-redux";
import cx from "classnames";
import { toggleQuote } from "../redux/actions";

const Quote = ({ quote, toggleQuote}) => (
  <li className="quote-item" onClick={() => toggleQuote(quote.id)}>
    {quote && quote.liked ? "❤️" : "🖤"}{" "}
    <span className={cx("quote-item__text", quote && quote.liked && "quote-item__text--liked")}>
      {quote.content}
    </span>
  </li>
);

export default connect(
  null,
  { toggleQuote }
)(Quote);
