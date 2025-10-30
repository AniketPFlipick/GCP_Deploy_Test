import { useState, useEffect } from 'react'

function App() {
  const [message, setMessage] = useState('Loading...')

  useEffect(() => {
    console.log('Starting fetch to /api/hello')
    fetch('/api/hello')
      .then(response => {
        console.log('Response received:', response)
        console.log('Response status:', response.status)
        console.log('Response headers:', response.headers)
        return response.text()
      })
      .then(data => {
        console.log('Data received:', data)
        setMessage(data)
      })
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