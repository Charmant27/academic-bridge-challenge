import { useEffect } from "react"
import { BsInputCursorText } from "react-icons/bs"
import { FaPlus } from "react-icons/fa6"
import { BsThreeDotsVertical } from "react-icons/bs"
import { AiOutlineMessage } from "react-icons/ai"
import { useGlobalContext } from "../context/Context"

const Tasks = () => {

  const { API_URL, todos, setTodos } = useGlobalContext()

  useEffect(() => {
    const fetchTasks = async () => {
      try {
        const res = await fetch(`${API_URL}/todos`)
        const data = await res.json()
        console.log(data)
        setTodos(data.todos)
      } catch (error) {

      }
    }
    fetchTasks()
  }, [])

  return (
    <section className='px-10 pb-10 flex flex-col gap-6'>
      <div
        className='bg-white rounded-lg px-6 py-4 flex flex-col md:flex-row md:justify-between'
      >

        <div className='flex gap-12 items-center'>
          <div className='text-purple-100 flex items-center gap-2'>
            <button>All Tasks</button>
            <p className='bg-gray-300 rounded-md px-2'>23</p>
          </div>
          <div className='text-gray-200 flex items-center gap-2'>
            <button>To do</button>
            <p className='bg-gray-300 rounded-md px-2'>3</p>
          </div>
          <div className='text-gray-200 flex items-center gap-2'>
            <button>In Progress</button>
            <p className='bg-gray-300 rounded-md px-2'>6</p>
          </div>
          <div className='text-gray-200 flex items-center gap-2'>
            <button>Completed</button>
            <p className='bg-gray-300 rounded-md px-2'>14</p>
          </div>
        </div>

        <div className="flex gap-6 items-center">
          <button
            className="flex items-center gap-2 px-4 py-2 rounded-lg border border-gray-300 text-gray-200"
          >
            <BsInputCursorText /> <span>Filter & Sort</span>
          </button>
          <button
            className="flex items-center gap-2 px-4 py-2 rounded-lg border border-gray-300 text-gray-200"
          >
            <FaPlus /> <span>New Task</span>
          </button>
        </div>
      </div>
      <div className="flex flex-wrap gap-x-20 gap-y-3">
        {todos.map((todo) => (
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