import fetchMock from 'jest-fetch-mock'

beforeEach(() => {
  fetchMock.enableMocks()
})

afterEach(() => {
  fetchMock.enableMocks()
})

const fetchTasks = async () => {
  try {
    const res = await fetch('https://dummyjson.com/docs/todos')
    const data = await res.json()
    return data

  } catch (error) {
    console.error(error)
  }
}

test('It should be all todos list', async () => {
  const response = [
    {
      "id": 1,
      "todo": "Do something nice for someone I care about",
      "completed": true,
      "userId": 26
    },
    {
      "id": 2,
      "todo": "Memorize the fifty states and their capitals",
      "completed": false,
      "userId": 48
    },
  ]

  fetchMock.mockOnce(JSON.stringify(response))

  const data = await fetchTasks()

  expect(data).toEqual(response)
})
