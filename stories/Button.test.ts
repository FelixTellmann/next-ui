import './Button';
import { testing } from "../pages";

test('testing("ATCGA") should return [["A","T"],["T","A"],["C","G"],["G","C"],["A","T"]]', () => {
  expect(testing("ATCGA")).toMatchObject([["A", "Ts"], ["T", "A"], ["C", "G"], ["G", "C"], ["A", "T"]]);
});

describe("asdasdasd", function () {
  test('testing("ATCGA") should return [["A","T"],["T","A"],["C","G"],["G","C"],["A","T"]]', () => {
    expect(testing("ATCGA")).toMatchObject([["A", "Ts"], ["T", "A"], ["C", "G"], ["G", "C"], ["A", "T"]]);
  });
  test('testing2("ATCGA") should return [["A","T"],["T","A"],["C","G"],["G","C"],["A","T"]]', () => {
    expect(testing("ATCGA")).toMatchObject([["A", "Ts"], ["T", "A"], ["C", "G"], ["G", "C"], ["A", "T"]]);
  });
});