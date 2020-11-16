import { addExpense, editExpense, removeExpense } from "../../actions/expenses";

test("should setup remove expense action object", () => {
  const action = removeExpense({ id: "123abc" });
  expect(action).toEqual({ id: "123abc", type: "REMOVE_EXPENSE" });
});

test("should setup edit expense action object", () => {
  const action = editExpense("123abc", {
    description: "desc",
    note: "note",
    amount: 10,
    createdAt: 1234,
  });
  expect(action).toEqual({
    id: "123abc",
    type: "EDIT_EXPENSE",
    updates: { description: "desc", note: "note", amount: 10, createdAt: 1234 },
  });
});

test("should setup add expense action object with provided values", () => {
  const expenseData = {
    description: "Rent",
    note: "This is my flat rent",
    amount: 12000,
    createdAt: 1000,
  };
  const action = addExpense(expenseData);

  expect(action).toEqual({
    type: "ADD_EXPENSE",
    expense: { ...expenseData, id: expect.any(String) },
  });
});

test("should setup add expense action object with default values", () => {
  const expenseData = {};
  const action = addExpense(expenseData);

  expect(action).toEqual({
    type: "ADD_EXPENSE",
    expense: {
      description: "",
      note: "",
      amount: 0,
      createdAt: 0,
      id: expect.any(String),
    },
  });
});
