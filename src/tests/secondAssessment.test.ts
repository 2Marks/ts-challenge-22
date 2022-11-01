import { runCounter } from "../assessments/secondAssessment";

describe("#Test counter implementation", () => {
  const initialCounter = 1;
  const [getCounter, increaseCounter] = runCounter(initialCounter);

  it("should return initial counter value", () => {
    expect(getCounter()).toEqual(initialCounter);
  });

  it("should return new counter value after increment", () => {
    increaseCounter();

    expect(getCounter()).toEqual(initialCounter + 1);
  });
});
