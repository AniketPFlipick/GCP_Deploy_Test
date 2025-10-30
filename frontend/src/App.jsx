import { useState, useEffect } from 'react'

function App() {
  const [message, setMessage] = useState('Loading...')

  useEffect(() => {
    fetch('/api/hello')
      .then(response => response.text())
      .then(data => setMessage(data))
      .catch(error => {
        console.error('Error:', error)
        setMessage('Error loading data')
      })
  }, [])

  return (
    <div style={{ 
      fontFamily: 'Arial, sans-serif', 
      textAlign: 'center', 
      marginTop: '100px',
      fontSize: '24px'
    }}>
      <h1>React + .NET Minimal App</h1>
      <p>{message}</p>
    </div>
  )
}

export default App