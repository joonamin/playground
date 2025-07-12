import React, { useState, useEffect, useRef } from 'react';
import './App.css';
import TodoList from './components/TodoList.jsx';
import { AllTodoListContextProvider } from './context/TodoContext.jsx';


function App() {
  const appRef = useRef(null);
  const [scale, setScale] = useState(1);

  useEffect(() => {
    const handleResize = () => {
      if (appRef.current) {
        const appHeight = appRef.current.scrollHeight;
        const viewportHeight = window.innerHeight;

        if (appHeight > viewportHeight) {
          setScale(viewportHeight / appHeight);
        } else {
          setScale(1);
        }
      }
    };

    const resizeObserver = new ResizeObserver(handleResize);
    const currentAppRef = appRef.current;
    if (currentAppRef) {
      resizeObserver.observe(currentAppRef);
    }

    handleResize();
    return () => {
      if (currentAppRef) {
        resizeObserver.unobserve(currentAppRef);
      }
    };
  }, []);

  return (
    <AllTodoListContextProvider>
      <div
        className='App'
        ref={appRef}
        style={{
          transform: `translate(-50%, -50%) scale(${scale})`,
        }}
      >
        <div className='main'>
            <h1 style={{textAlign: 'center'}}>{'This is TODO App!'}</h1>
            <TodoList category='todo'/>
            <TodoList category='done'/>
          </div>
      </div>
    </AllTodoListContextProvider>
  );
}

export default App;
