import React from "react";
import { connect } from "react-redux";
import { addQuote } from "../redux/actions";

class AddQuote extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      quote: ""
    }
  }

  onChange = quote => {
    this.setState({ quote });
  };

  handleAddQuote = () => {
    this.props.addQuote(this.state.quote);
    this.setState({ quote: "" });
  };

  render() {
    return (
      <div className="add-quote">
        <textarea
          className="add-quote__field"
          onChange={e => this.onChange(e.target.value)}
          value={this.state.quote}
          rows="4"
          cols="50"
        />
        <button className="add-quote__button" onClick={this.handleAddQuote}>
          Add Quote
        </button>
      </div>
    );
  }
}

export default connect(
  null,
  { addQuote }
)(AddQuote);
