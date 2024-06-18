import Login from "./components/Login/Login"
import UserContextProvider from "./context/UserContextProvider"
import Display from "./components/Display/Display"

function App() {


  return (
    <>
    <UserContextProvider>
      <div className="w-[100vw] flex flex-col justify-center items-center">
    <Login/>
    <Display/>
    </div>
    </UserContextProvider>

    </>
  )
}

export default App
