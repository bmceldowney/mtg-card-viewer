import fetchCards from "./fetchCards";
jest.mock("./appActions");

describe("fetchCards", () => {
  let mockDispatch;

  beforeEach(() => {
    const mockResponse = {
      headers: [],
      json: () => {
        return { cards: {} };
      }
    };
    fetch = jest.fn().mockResolvedValue(mockResponse);
    mockDispatch = jest.fn();
  });

  test("returns a function", () => {
    expect(fetchCards()).toBeInstanceOf(Function);
  });
});
