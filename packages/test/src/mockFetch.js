/**
 * Copyright (c) Mik BRY
 * mik@mikbry.com
 *
 * This source code is licensed under the license found in the
 * LICENSE file in the root directory of this source tree.
 */

const mockFetch = (response = {}) => {
  const mockJsonPromise = Promise.resolve(response);
  const mockFetchPromise = Promise.resolve({
    json: () => mockJsonPromise,
  });
  global.fetch = jest.fn().mockImplementation(() => mockFetchPromise);
  return () => {
    delete global.fetch;
  };
};

export default mockFetch;
