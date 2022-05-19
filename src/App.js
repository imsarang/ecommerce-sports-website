import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import {Routes,Route} from 'react-router-dom'
import ContentModal from './components/ContentModal';
import ConModal2 from './components/ConModal2';
import Home from './components/Home'
import Navbar from './components/Navbar';
import Navbar2 from './components/Navbar2';
import { clickAction } from './components/redux/clickingReducer'
import Category from './components/Category';
import Product from './components/ProductMain/Product';
function App() {
  const [screenWidth,setScreenWidth] = useState(1440)
    const getScreenWidth = ()=>{
        setScreenWidth(window.innerWidth)
      }
    
      useEffect(()=>{
        window.addEventListener('resize',getScreenWidth)
      },[screenWidth])

      const clickAct = useSelector(clickAction)

  return (
    <div className="App">
      {
        screenWidth<800?<Navbar2/>:<Navbar/>
      }
      {
        clickAct?screenWidth<800?<><ConModal2/></>:<ContentModal/>:<></>
      }
      {
      clickAct?<div style={{
        backgroundColor:'rgba(0,0,0,0.8)',
        zIndex:'50',
        position:'absolute',
        height:'100%',
        width:'100%',
        overflowY:'hidden'
      }}></div>:<></>
    }
      {/* {
        screenWidth<800?<ConModal2/>:<ContentModal/>
      } */}
      <Routes>
        <Route exact path='/' element = {<Home/>}/>
        <Route exact path='/category/:item' element={<Category/>}/>
        <Route exact path='/product' element={<Product/>}/>
      </Routes>
    </div>
  );
}

export default App;
