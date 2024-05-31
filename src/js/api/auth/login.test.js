import * as mocks from "../../../mocks/index.js";
import { login } from "./login.js";

describe("login", () => {
  beforeEach(() => {
    global.localStorage = mocks.localStorageMock();
    global.fetch = mocks.fetchMock(mocks.responseMock);
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  it("stores a token when provided with valid credentials", async () => {
    await login(mocks.userMock.email, mocks.userMock.password);
    const token = JSON.parse(localStorage.getItem("token"));
    expect(token).toEqual(mocks.userMock.accessToken);
  });
});
