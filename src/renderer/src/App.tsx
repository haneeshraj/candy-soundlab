import { useEffect } from 'react'
import { Outlet } from 'react-router-dom'

function App(): JSX.Element {
  // const ipcHandle = (): void => window.electron.ipcRenderer.send('ping')

  const testServer = async (): Promise<void> => {
    const response = await fetch('http://localhost:6969')
    const text = await response.text()
    console.log(text)
  }

  useEffect(() => {
    testServer()
  }, [])

  return (
    <>
      <Outlet />
    </>
  )
}

export default App
