import React from 'react'
import { useRoutes } from 'react-router-dom'
import './App.css'
import routes from './routes'
import containerContext from './context/container-context'

function App() {
  const router = useRoutes(routes);

  return (
    <containerContext.Provider value={{

    }}>
      
      {router}
    </containerContext.Provider>
  )

}

export default App;
