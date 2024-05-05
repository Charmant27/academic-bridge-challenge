import { useState, useEffect } from "react"

import { useTranslation } from 'react-i18next';

// icons
import { BsInputCursorText } from "react-icons/bs"
import { FaPlus } from "react-icons/fa6"
import { BsThreeDotsVertical } from "react-icons/bs"
import { AiOutlineMessage } from "react-icons/ai"

// global context
import { useGlobalContext } from "../context/Context"

const Tasks = () => {
  // state values of filtering todos
  const [filteredTodos, setFilterTodos] = useState('all')
  const [completedTodos, setCompletedTodos] = useState([])
  const [inProgressTodos, setInProgressTodos] = useState([])


  const { API_URL, todos, setTodos } = useGlobalContext()

  const { t } = useTranslation()

  useEffect(() => {
    const fetchTasks = async () => {
      try {
        const res = await fetch(`${API_URL}/todos`)
        const data = await res.json()
        setTodos(data.todos)

        const numOfCompletedTodos = data.todos.filter(todo => !todo.completed).length
        setCompletedTodos(numOfCompletedTodos)

        const numOfInProgressTodos = data.todos.filter(todo => todo.completed).length
        setInProgressTodos(numOfInProgressTodos)

      } catch (error) {

      }
    }
    fetchTasks()
  }, [API_URL, setTodos])

  const filterTodos = todos.filter(todo => {
    if (filteredTodos === 'progress') {
      return !todo.completed
    }
    else if (filteredTodos === 'completed') {
      return todo.completed
    } else {
      return true
    }
  })

  return (
    <section className='px-10 pb-10 flex flex-col gap-6'>
      <div
        className='bg-white rounded-lg px-6 py-4 flex flex-col md:flex-row md:justify-between'
      >

        <div className='flex gap-12 items-center'>
          <div className='flex items-center gap-2'>
            <button
              onClick={() => setFilterTodos("all")}
              className={filteredTodos === "all" ? "text-purple-100 font-semibold" : 'text-gray-200'}
            >
              {t('allTasks')} <span className='bg-gray-300 rounded-md px-2'>{todos.length}</span>
            </button>
          </div>
          <div className='flex items-center gap-2'>
            <button
              onClick={() => setFilterTodos("progress")}
              className={filteredTodos === "progress" ? "text-purple-100 font-semibold" : 'text-gray-200'}
            >
              {t('inProgress')} <span className='bg-gray-300 rounded-md px-2'>{completedTodos}</span>
            </button>
          </div>
          <div className='flex items-center gap-2'>
            <button
              onClick={() => setFilterTodos('completed')}
              className={filteredTodos === "completed" ? "text-purple-100 font-semibold" : 'text-gray-200'}
            >
              {t('completed')} <span className='bg-gray-300 rounded-md px-2'>{inProgressTodos}</span>
            </button>
          </div>
        </div>

        <div className="flex gap-6 items-center">
          <button
            className="flex items-center gap-2 px-4 py-2 rounded-lg border border-gray-300 text-gray-200"
          >
            <BsInputCursorText /> <span>{t('Filter & Sort')}</span>
          </button>
          <button
            className="flex items-center gap-2 px-4 py-2 rounded-lg border border-gray-300 text-gray-200"
          >
            <FaPlus /> <span>{t('newTask')}</span>
          </button>
        </div>
      </div>
      <div className="flex flex-wrap gap-x-20 gap-y-3">
        {Array.isArray(filterTodos) && filterTodos.map((todo) => (
          <>
            <div className="bg-white flex flex-col gap-3 w-60 rounded-lg px-4 py-4">
              <div className="flex justify-between">
                {todo.completed ? (
                  <p className="bg-green-100 text-green-200 px-3 rounded-md text-sm">Completed</p>
                ) : (
                  <p className="bg-brown-100 text-brown-200 px-3 rounded-md text-sm">In progress</p>
                )}
                <button className="text-gray-200">
                  <BsThreeDotsVertical />
                </button>
              </div>
              <h3>{todo.todo.slice(0, 20)}...</h3>
              <div className="bg-gray-200 h-[0.5px] w-full"></div>
              <div className="flex justify-between">
                <div className="flex gap-3">
                  <div className="relative flex">
                    <div>
                      <img src="/p-1.avif"
                        className='w-6 h-6 object-cover rounded-full'
                        alt="user" />
                    </div>
                    <div className="ml-[-4px]">
                      <img src="/p-2.avif"
                        className='w-6 h-6 object-cover rounded-full'
                        alt="user" />
                    </div>
                    <div className="ml-[-4px]">
                      <img src="/p-3.avif"
                        className='w-6 h-6 object-cover rounded-full'
                        alt="user" />
                    </div>
                  </div>
                </div>
                <div className="flex gap-2 items-center text-gray-200">
                  <AiOutlineMessage />
                  <p>3</p>
                </div>
              </div>

            </div>
          </>

        ))}
      </div>

    </section>
  )
}

export default Tasks