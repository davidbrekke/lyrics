const Header = () => (
  <header className="flex flex-row items-center w-full justify-around py-4 absolute z-10 top-0 backdrop-filter backdrop-blur-lg bg-opacity-30">
    <h1 className="text-3xl text-sky-400 font-bold tracking-widest">lyrics</h1>
    <div className="flex flex-row items-center px-4 py-2 rounded-xl cursor-pointer text-gray-700 bg-gradient-to-tr from-sky-400 via-sky-500 to-indigo-300 shadow-lg transition hover:scale-105 hover:shadow-xl">
      sign in
    </div>
  </header>
)

export default Header
