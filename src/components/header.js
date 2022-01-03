export default function Header() {
  return (
    <div class="bg-slate-50 h-11 flex items-center border-b drop-shadow-sm">
      {/* Logo */}
      <div class="bg-teal-500 h-6 w-6 rounded ml-4">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          class="h-4 w-4 ml-1 mt-1 stroke-white"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7"
          />
        </svg>
      </div>
      {/* End Logo */}

      {/* Page Name */}
      <p class="text-xs ml-2 text-gray-600 font-medium">Home</p>

      {/* Right Icons */}
      <div class="right-0 absolute flex">
        {/* SearchIcon */}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          class="h-6 w-6 stroke-gray-600 cursor-pointer mx-1"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="1"
            d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
          />
        </svg>
        {/* End of Search Icon */}

        {/* Notification Icon */}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          class="h-6 w-6 stroke-gray-600 cursor-pointer mx-1"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="1"
            d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"
          />
        </svg>
        {/* End of Notification Icon */}

        {/* Settings Cog */}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          class="h-6 w-6 stroke-gray-600 cursor-pointer mx-1 mr-2"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="1"
            d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"
          />
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="1"
            d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
          />
        </svg>
        {/* End of Settings */}
      </div>
    </div>
  );
}
