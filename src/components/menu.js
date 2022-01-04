export default function LeftNav() {
  function draggableBoard() {
    return (
      <div className="text-center items-center">
        <div className="bg-slate-300 h-12 w-12 rounded m-auto"></div>
        <p className="text-xs font-medium">New Board</p>
      </div>
    );
  }

  return (
    <div className="w-16 bg-gray-100 border-r text-center">
      {/* Add Note */}
      <div
        className="group hover:cursor-pointer hover:translate-x-1 ease-in-out duration-200"
        draggable="true"
        // ondragstart="drag(event)"
      >
        <div className="w-7 h-5 bg-white rounded m-auto mt-4 group-hover:shadow-lg border shadow">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="h-4 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="1"
              d="M4 6h16M4 12h16M4 18h7"
            />
          </svg>
        </div>
        <p className="text-xxs text-gray-500 mt-0.5">Note</p>
      </div>
      {/* End of Note */}

      {/* Add Link */}
      <div
        className="group hover:cursor-pointer hover:translate-x-1 ease-in-out duration-200"
        draggable="true"
        // ondragstart="drag(event)"
      >
        <div className="w-7 h-7 bg-white rounded m-auto mt-2 group-hover:shadow-lg border shadow">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="h-5 w-5 ml-1 pt-1"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="1"
              d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1"
            />
          </svg>
        </div>
        <p className="text-xxs text-gray-500 mt-0.5">Link</p>
      </div>
      {/* End of Link */}

      {/* Add To-Do */}
      <div
        className="group hover:cursor-pointer hover:translate-x-1 ease-in-out duration-200"
        draggable="true"
        // ondragstart="drag(event)"
      >
        <div className="w-7 h-5 bg-white rounded m-auto mt-2 group-hover:shadow-lg border shadow">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="h-4 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="1"
              d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4"
            />
          </svg>
        </div>
        <p className="text-xxs text-gray-500 mt-0.5">To-do</p>
      </div>
      {/* End of To-Do */}

      {/* Add Board */}
      <div className="group hover:cursor-pointer hover:translate-x-1 ease-in-out duration-200">
        <div className="w-7 h-7 bg-teal-500 rounded-md m-auto mt-2 group-hover:shadow-lg group-hover:shadow-teal-500/50">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="h-6 w-6 ml-0.5"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="1"
              d="M17 14v6m-3-3h6M6 10h2a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v2a2 2 0 002 2zm10 0h2a2 2 0 002-2V6a2 2 0 00-2-2h-2a2 2 0 00-2 2v2a2 2 0 002 2zM6 20h2a2 2 0 002-2v-2a2 2 0 00-2-2H6a2 2 0 00-2 2v2a2 2 0 002 2z"
            />
          </svg>
        </div>
        <p className="text-xxs text-gray-500 mt-0.5">Board</p>
      </div>
      {/* End of Board*/}
    </div>
  );
}
