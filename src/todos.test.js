/* eslint-disable testing-library/no-wait-for-multiple-assertions */
import { fireEvent, render, waitFor } from '@testing-library/react'
import Tasks from './components/Tasks'

// testing the translation
jest.mock('react-i18next', () => ({
    useTranslation: () => ({ t: key => key })
}))

test('It should render all todos and loading state should run initially', async () => {
    const { getByText } = render(<Tasks />)

    expect(getByText('loading')).toBeInTheDocument()
})

test('It should filter the todos correctly', async () => {
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

        {
            "id": 3,
            "todo": "Watch a classic movie",
            "completed": false,
            "userId": 4
        },
        {
            "id": 4,
            "todo": "Contribute code or a monetary donation to an open-source software project",
            "completed": false,
            "userId": 48
        },
    ]

    global.fetch = jest.fn(() => Promise.resolve({
        json: () => Promise.resolve({todos: response})
    }))

    const { getByText } = render(<Tasks />)

    await waitFor(() => {
        expect(getByText('Do something nice for someone I care about')).toBeInTheDocument()
    })

    // check todos in progress
    fireEvent.click(getByText('progress'))

    await waitFor(() => {
        expect(getByText('Watch a classic movie')).toBeInTheDocument();
        expect(getByText('Do something nice for someone I care about')).not.toBeInTheDocument(); 
    })
})