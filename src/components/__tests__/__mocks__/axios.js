module.exports = {
    getResults: jest.fn(() => Promise.resolve({ data: [3] })),
    getTask: jest.fn(() => Promise.resolve({
        data:
        {
            "userId": 1,
            "id": 1,
            "title": "delectus aut autem",
            "completed": false
        }
    }))
};
