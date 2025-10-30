import { useState, useEffect } from 'react'

function App() {
  const [message, setMessage] = useState('Loading...')

  useEffect(() => {
    // Hardcode the backend URL for now to test
    const apiUrl = 'https://gcp-deploy-test-backend-353177438377.europe-west1.run.app';
    console.log('Using hardcoded API URL:', apiUrl)

    const endpoint = `${apiUrl}/api/hello`;
    console.log('Full endpoint:', endpoint)

    // Force fresh request by adding timestamp
    const freshEndpoint = `${endpoint}?t=${Date.now()}`;
    console.log('Fresh endpoint with timestamp:', freshEndpoint)

    fetch(freshEndpoint, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        'Cache-Control': 'no-cache',
        'Pragma': 'no-cache'
      },
      cache: 'no-store'
    })
      .then(response => {
        console.log('Response received:', response)
        console.log('Response status:', response.status)
        console.log('Response ok:', response.ok)
        console.log('Response url:', response.url)
        console.log('Response headers:', [...response.headers.entries()])
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`)
        }
        return response.text()
      })
      .then(data => {
        console.log('Data received:', data)
        console.log('Data type:', typeof data)
        console.log('Data length:', data.length)
        setMessage(data)
      })
      .catch(error => {
        console.error('Fetch error:', error)
        console.error('Error message:', error.message)
        setMessage(`Error: ${error.message}`)
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