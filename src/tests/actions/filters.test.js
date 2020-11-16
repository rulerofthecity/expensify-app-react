import moment from "moment";
import {
  setStartDate,
  setEndDate,
  sortByAmount,
  sortByDate,
  setTextFilter,
} from "../../actions/filters";

test("should setup set text filter object", () => {
  expect(setTextFilter("bill")).toEqual({
    type: "SET_TEXT_FILTER",
    text: "bill",
  });
});

test("should setup set text filter object for default value", () => {
  expect(setTextFilter()).toEqual({ type: "SET_TEXT_FILTER", text: "" });
});

test("should setup set start date action object", () => {
  expect(setStartDate(moment(0))).toEqual({
    type: "SET_START_DATE",
    startDate: moment(0),
  });
});

test("should setup set end date action object", () => {
  expect(setEndDate(moment(0))).toEqual({
    type: "SET_END_DATE",
    endDate: moment(0),
  });
});

test("should setup sort by date action object", () => {
  expect(sortByDate()).toEqual({ type: "SORT_BY_DATE" });
});

test("should setup sort by amount action object", () => {
  expect(sortByAmount()).toEqual({ type: "SORT_BY_AMOUNT" });
});
