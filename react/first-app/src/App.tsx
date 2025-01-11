import './App.css'
import Header from './components/Header/Header'
import TabButton from './components/TabButton';
const reactDescriptions = ['Fundamental', 'Crucial', 'Core']

function getRandomInt(max: number) {
  return Math.floor(Math.random() * (max + 1));
}

function handleSelect(selectedButton: string) {
  // selectedButton => 'components', 'jsx', 'props', 'state'
  console.log(selectedButton)
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
          <TabButton onSelect={() => handleSelect('components')}>Components</TabButton>
          <TabButton onSelect={() => handleSelect('jsx')}>JSX</TabButton>
          <TabButton onSelect={() => handleSelect('props')}>Props</TabButton>
          <TabButton onSelect={() => handleSelect('state')}>State</TabButton>
        </menu>
        Dynamic Contents
      </section>
    </>
  )
}

export default App
