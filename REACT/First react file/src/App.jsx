import { useState } from 'react'

import './App.css'


function Profile() {
  return (
    <img
      src="https://i.imgur.com/MK3eW3Am.jpg"
      alt="Katherine Johnson"
    />
  )
}


const user = {
  name: 'Hedy Lamarr',
  imageUrl: 'https://i.imgur.com/yXOvdOSs.jpg',
  imageSize: 390,
};


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      
      <h1>Vite + React By Pratik Devadhe </h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
       
      </div>
     

      <Profile/>


    </>
  )
}

export default App
