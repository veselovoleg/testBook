
module.exports = {
    get: jest.fn((value) => {
        switch (value) {
            case "https://jsonplaceholder.typicode.com/posts?q=an":
                return Promise.resolve({ data: [3] });
                break;
            case "https://jsonplaceholder.typicode.com/todos/1":
                return Promise.resolve({
                    data: {
                        "userId": 1,
                        "id": 1,
                        "title": "delectus aut autem",
                        "completed": false
                    }
                });
                break;
        }
    })
};

