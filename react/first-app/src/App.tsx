import { useState } from 'react'
import './App.css'
import Header from './components/Header/Header'
import TabButton from './components/TabButton';
const reactDescriptions = ['Fundamental', 'Crucial', 'Core']
import { EXAMPLES } from './assets/data-with-examples'

type IData = {
  [key: string]: {
    title: string,
    description: string,
    code: string,
  },
}

function getRandomInt(max: number) {
  return Math.floor(Math.random() * (max + 1));
}

function App() {
  const description = reactDescriptions[getRandomInt(reactDescriptions.length - 1)]
  const [selectedTopic, setSelectedTopic] = useState<string>('')
  const data: IData = EXAMPLES
  function handleSelect(selectedButton: string) {

    // selectedButton => 'components', 'jsx', 'props', 'state'
    setSelectedTopic(selectedButton)
  }

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
        <div id="tab-content">
          <h3>{data[selectedTopic]?.title}</h3>
          <p>{data[selectedTopic]?.description}</p>
          <pre>
            <code>{data[selectedTopic]?.code}</code>
          </pre>
        </div>
      </section>
    </>
  )
}

export default App
