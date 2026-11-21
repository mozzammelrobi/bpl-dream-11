import './App.css'
import Navbar from './components/Navbar/Navbar'
import Banner from './components/Homepages/Banner/Banner'
import { Suspense, useState } from 'react'
import Players from './components/Players/Players'


const fetchPlayer = async () => {
  const res = await fetch('data.json')
  return res.json()
}

function App() {
  const playersPromise = fetchPlayer();
  const [coin, setCoin] = useState(50000)

  return (
    <>
      <Navbar coin={coin}></Navbar>
      <Banner></Banner>
      <Suspense fallback={<span className='loading loading-dots loading-lg'>Loading</span>}>
        <Players
          playersPromise={playersPromise}
          coin={coin}
          setCoin={setCoin}
        ></Players>
      </Suspense>
    </>
  )
}

export default App
