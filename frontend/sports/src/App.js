import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import {Routes,Route} from 'react-router-dom'
import ContentModal from './components/ContentModal';
import ConModal2 from './components/ConModal2';
import Home from './components/Home'
import Navbar from './components/Navbar';
import Navbar2 from './components/Navbar2';
import { clickAction, clickChangeAddress, clickSignIn } from './components/redux/clickingReducer'
import Category from './components/Category';
import Product from './components/ProductMain/Product';
import Footer2 from './components/Footer2';
import Footer from './components/Footer';
import ProductMob from './components/ProductMainMob/ProductMob';
import SignUp from './components/SignUp';
import SelectAddress from './components/SelectAddress';
import Warranty from './components/Extras/Warranty';
import PickUp from './components/Extras/PickUp';
import ReturnPolicy from './components/Extras/ReturnPolicy';
import Cart from './components/Cart';
import Account from './components/Profile/Account';
import Checkout from './components/Checkout';
import Admin from './components/Admin/Admin';

function App() {
  const [screenWidth,setScreenWidth] = useState(1440)
    const getScreenWidth = ()=>{
        setScreenWidth(window.innerWidth)
      }
    
      useEffect(()=>{
        window.addEventListener('resize',getScreenWidth)
      },[screenWidth])

      const clickAct = useSelector(clickAction)
      const clickSign = useSelector(clickSignIn)
      const address = useSelector(clickChangeAddress)
  return (
    <div className="App">
      {
        screenWidth<850?<Navbar2/>:<Navbar/>
      }
      {
        clickAct?screenWidth<850?<><ConModal2/></>:<ContentModal/>:<></>
      }
      {
      clickAct||clickSign||address?<div className="clickClass"style={{
        backgroundColor:'rgba(0,0,0,0.8)',
        zIndex:'50',
        position:'fixed',
        height:'100%',
        width:'100%',
        overflow:'hidden'
      }}></div>:<></>
    }
    {
      clickSign?<><SignUp/></>:<></>
    }
    {
      address?<><SelectAddress/></>:<></>
    }

    
      {/* {
        screenWidth<800?<ConModal2/>:<ContentModal/>
      } */}
      <Routes>
        <Route exact path={'/'} element = {<Home/>}/>
        <Route exact path='/category/:item' element={<Category/>}/>
        <Route exact path='/product/:id' element={screenWidth>700?<Product/>:<ProductMob/>}/>
        <Route exact path='/warranty' element={<Warranty/>}/>
        <Route exact path='/pickup' element={<PickUp/>}/>
        <Route exact path='/return-policy' element={<ReturnPolicy/>}/>
        <Route exact path='/cart' element={<Cart/>}/>
        <Route exact path='/myaccount' element={<Account/>}/>
        <Route exact path='/checkout' element={<Checkout/>}/>
        <Route exact path='/admin' element={<Admin/>}/>
      </Routes>
      {
        screenWidth < 700 ? <Footer2 /> : <Footer />
      }
    </div>
  );
}

export default App;
