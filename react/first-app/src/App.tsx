import './App.css'

function Header() {
  return (
    <header>
      <img src="/src/assets/react.svg" alt="react-logo" />
      <h1>React Essentials</h1>
    </header>
  )
}

function App() {
  return (
    <>
      <div className="main">
        <Header />
        <p className="content">
          Fundamental React concepts you will need for almost any app you are going to build!
        </p>

        <p className="sub-content">
          Time to get started
        </p>
      </div>
    </>
  )
}

export default App
