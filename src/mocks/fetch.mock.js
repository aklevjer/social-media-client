export const fetchMock = (response = {}, status = 200, statusText = "OK") => {
  return jest.fn().mockResolvedValue({
    ok: status >= 200 && status < 300,
    status: status,
    statusText: statusText,
    json: () => Promise.resolve(response),
  });
};
