import React from 'react'
import "./App.css"
import BannerComponent, {AboutComponent} from "./Views/Home"


const App = () => {
  return (
    <div className='bg-blue-100'>
    <BannerComponent/>
    <AboutComponent/>
    </div>
  )
}

export default App;