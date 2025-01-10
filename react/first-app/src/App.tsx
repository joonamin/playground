import './App.css'
import Header from './components/Header'
const reactDescriptions = ['Fundamental', 'Crucial', 'Core']

function getRandomInt(max: number) {
  return Math.floor(Math.random() * (max + 1));
}



function App() {
  const description = reactDescriptions[getRandomInt(reactDescriptions.length - 1)]

  return (
    <>
      <div className="main">
        <Header />
        <p className="content">
          {description} React concepts you will need for almost any app you are going to build!
        </p>

        <p className="sub-content">
          Time to get started
        </p>
      </div>
    </>
  )
}

export default App
