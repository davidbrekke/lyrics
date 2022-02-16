const AppContainer = ({ children }) => (
  <div className="min-w-screen min-h-screen bg-gradient-to-br from-purple-400 via-purple-500 to-indigo-500">
    <main className="max-w-6xl h-full m-auto flex flex-col items-center justify-start relative text-gray-800">
      {children}
    </main>
  </div>
)

export default AppContainer
