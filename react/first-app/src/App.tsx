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
  const [selectedTopic, setSelectedTopic] = useState<string | null>(null)
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
          <TabButton isSelected={selectedTopic === 'components'} onSelect={() => handleSelect('components')}>Components</TabButton>
          <TabButton isSelected={selectedTopic === 'jsx'} onSelect={() => handleSelect('jsx')}>JSX</TabButton>
          <TabButton isSelected={selectedTopic === 'props'} onSelect={() => handleSelect('props')}>Props</TabButton>
          <TabButton isSelected={selectedTopic === 'state'} onSelect={() => handleSelect('state')}>State</TabButton>
        </menu>
        <div id="tab-content">
          {!selectedTopic ? <p>Please select a topic</p> : null}
          {/* else의 경우에서 별다른 처리를 하고 싶지 않다면 아래처럼 처리하는 것도 간결하다 */}
          {selectedTopic && (
            <><h3>{data[selectedTopic]?.title}</h3>
              <p>{data[selectedTopic]?.description}</p>
              <pre>
                <code>{data[selectedTopic]?.code}</code>
              </pre>
            </>)}
        </div>
      </section>
    </>
  )
}

export default App
