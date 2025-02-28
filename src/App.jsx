import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Accordian from './components/accordian/accordian'
import Randcol from './components/randcol/randcol'
import Star_rating from './components/Star_rating/Star_rating'
import Image_slider from './components/Image_slider/Image_slider'
import Load_more from './components/Load_more/Load_more'
import TreeView from './components/Tree_view/TreeView'
import data from './components/Tree_view/data'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      {/* <Accordian/> */}
    {/* <Randcol /> */}
    {/* <Star_rating/> */}
    {/* <Image_slider url='https://picsum.photos/v2/list?page=1&limit=10'/> */}
    {/* <Load_more/> */}
    <TreeView menu = {data}/>
    </>
  )
}

export default App
