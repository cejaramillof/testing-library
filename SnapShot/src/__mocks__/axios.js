// https://jestjs.io/docs/timer-mocks
// https://jestjs.io/docs/mock-functions

// Mock Axios Global
// jest.mock('axios');

// Our own global custom mock
export default {
    // get: jest.fn(),
    // post: jest.fn(),
    // get: jest.fn().mockImplementation(() => Promise.resolve([])),
    get: jest.fn().mockImplementation(() => Promise.resolve({
        data: {
            photos: {
                photo: [],
            }
        }
    })),
    post: jest.fn().mockImplementation(() => Promise.reject('')),
    put: jest.fn(),
    delete: jest.fn(),
}