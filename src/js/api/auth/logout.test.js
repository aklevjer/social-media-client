import * as mocks from "../../../mocks/index.js";
import { logout } from "./logout.js";

describe("logout", () => {
  beforeEach(() => {
    global.localStorage = mocks.localStorageMock();
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  it("clears the token from local storage", () => {
    localStorage.setItem("token", mocks.userMock.accessToken);
    logout();
    expect(localStorage.getItem("token")).toBeNull();
  });
});
