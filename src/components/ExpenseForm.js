import React from "react";
import moment from "moment";
import { SingleDatePicker } from "react-dates";

import "react-dates/lib/css/_datepicker.css";

class ExpenseForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      description: props.expense ? props.expense.description : "",
      note: props.expense ? props.expense.note : "",
      amount: props.expense ? (props.expense.amount / 100).toString() : "",
      createdAt: props.expense ? moment(props.expense.createdAt) : moment(),
      calendarFocused: false,
      error: "",
    };
  }

  handelDescriptionChange = (e) => {
    const description = e.target.value;
    this.setState(() => ({ description }));
  };
  handleNoteChange = (e) => {
    const note = e.target.value;
    this.setState(() => ({ note }));
  };
  handleAmountChange = (e) => {
    const amount = e.target.value;
    if (!amount || amount.match(/^\d{1,}(\.\d{0,2})?$/)) {
      this.setState(() => ({ amount }));
    }
  };
  handleDateChange = (createdAt) => {
    if (createdAt) {
      this.setState(() => ({
        createdAt,
      }));
    }
  };
  handleOnFocusChange = ({ focused }) => {
    this.setState(() => ({
      calendarFocused: focused,
    }));
  };
  handleOnSubmit = (e) => {
    e.preventDefault();
    if (!this.state.description || !this.state.amount) {
      // validation msg
      console.log("handleOnSubmit called");
      this.setState(() => ({
        error: "Please provide description and amount!",
      }));
    } else {
      this.setState(() => ({
        error: "",
      }));
      this.props.onSubmit({
        description: this.state.description,
        amount: parseFloat(this.state.amount, 10) * 100,
        createdAt: this.state.createdAt.valueOf(),
        note: this.state.note,
      });
    }
  };
  render() {
    return (
      <div>
        {this.state.error && <p>{this.state.error}</p>}
        <form onSubmit={this.handleOnSubmit}>
          <input
            type="text"
            placeholder="Description"
            autoFocus
            value={this.state.description}
            onChange={this.handelDescriptionChange}
          />
          <input
            type="text"
            placeholder="Amount"
            value={this.state.amount}
            onChange={this.handleAmountChange}
          />
          <SingleDatePicker
            date={this.state.createdAt}
            onDateChange={this.handleDateChange}
            focused={this.state.calendarFocused}
            onFocusChange={this.handleOnFocusChange}
            numberOfMonths={1}
            isOutsideRange={() => false}
          />
          <textarea
            placeholder="Add a nete for your expense (optional)"
            value={this.state.note}
            onChange={this.handleNoteChange}
          ></textarea>
          <button onClick={this.handleOnSubmit}>Add Expense</button>
        </form>
      </div>
    );
  }
}

export default ExpenseForm;
