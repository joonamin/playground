import './App.css'
import Header from './components/Header/Header'
import TabButton from './components/TabButton';
const reactDescriptions = ['Fundamental', 'Crucial', 'Core']

function getRandomInt(max: number) {
  return Math.floor(Math.random() * (max + 1));
}

function handleSelect() {
  console.log('hello world - selected!!')
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
      <section id='examples'>
        <h2>Examples</h2>
        <menu>
          <TabButton onSelect={handleSelect}>Components</TabButton>
          <TabButton>JSX</TabButton>
          <TabButton>Props</TabButton>
          <TabButton>State</TabButton>
        </menu>
        Dynamic Contents
      </section>
    </>
  )
}

export default App
