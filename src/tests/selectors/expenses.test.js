import moment from "moment";
import selectExpenses from "../../selectors/expenses";

const expenses = [
  { id: "1", description: "rent", note: "", amount: 10, createdAt: 0 },
  {
    id: "2",
    description: "gas",
    note: "",
    amount: 20,
    createdAt: moment(0).subtract(4, "days").valueOf(),
  },
  {
    id: "3",
    description: "water",
    note: "",
    amount: 30,
    createdAt: moment(0).add(4, "days").valueOf(),
  },
  {
    id: "4",
    description: "food",
    note: "",
    amount: 40,
    createdAt: moment(0).add(8, "days").valueOf(),
  },
];

test("should filter by text value", () => {
  const result = selectExpenses(expenses, {
    text: "rent",
    sortBy: "date",
    startDate: undefined,
    endDate: undefined,
  });

  expect(result).toEqual([expenses[0]]);
});

test("should filer by start date", () => {
  const result = selectExpenses(expenses, {
    text: "",
    sortBy: "date",
    startDate: moment(0),
    endDate: moment(0),
  });
  expect(result).toEqual([expenses[0]]);
});
