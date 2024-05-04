import { BsInputCursorText } from "react-icons/bs"
import { FaPlus } from "react-icons/fa6"

const Tasks = () => {
  return (
    <section className='px-10'>
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
    </section>
  )
}

export default Tasks