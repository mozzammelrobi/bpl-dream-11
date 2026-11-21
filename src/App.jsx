import axios from 'axios'
import './App.css'

import Navbar from './components/Navbar/Navbar'
import Banner from './components/Homepages/Banner/Banner'
import { Suspense } from 'react'
import Players from './components/Players/Players'

// import { Suspense } from 'react'

// const playersPromise =  axios.get('data.json')

const fetchPlayer = async() => {
  const res = await fetch('data.json')
  return res.json()
}


function App() {
  const playersPromise = fetchPlayer();

  return (
    <>
      <Navbar></Navbar>
      <Banner></Banner>
      <Suspense fallback={<span className='loading loading-dots loading-lg'>Loading</span>}>
        <Players playersPromise={playersPromise}></Players>
      </Suspense>

      {/* <Suspense fallback={<span className='loading loading-dots loading-xl'>Loading data</span>}> */}
        {/* <Players playersPromise={playersPromise}></Players> */}
      {/* </Suspense> */}

    </>
  )
}

export default App
