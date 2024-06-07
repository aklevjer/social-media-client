export const localStorageMock = () => {
  let store = {};

  return {
    setItem: jest.fn((key, value) => (store[key] = value.toString())),
    getItem: jest.fn((key) => store[key] || null),
    removeItem: jest.fn((key) => delete store[key]),
    clear: jest.fn(() => (store = {})),
  };
};
