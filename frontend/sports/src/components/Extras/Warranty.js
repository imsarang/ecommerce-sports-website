import React, { useState } from 'react'
import { Paragraph } from 'react-bootstrap-icons'
import BodyPara from './BodyPara'

const Warranty = () => {

    const [overview,setOverview] = useState(true)
    const [racket,setRacket] = useState(false)
    const [cricket,setCricket] = useState(false)
    const [team,setTeam] = useState(false)
    const [swim,setSwim] = useState(false)
    const [roller,setRoller] = useState(false)
    const [cloth,setCloth] = useState(false)
    const [other,setOther] = useState(false)
    const [cycle,setCycle] = useState(false)
    const [shoes,setShoes] = useState(false)
    const mystyle1 = {
        padding:'2%',
        cursor:'pointer',
        backgroundColor:'#cdcfd1',
        margin:'2% 0 0 0',
        borderRadius:'5px',
    }

    const mystyle2 = {
        padding:'3% 0 3% 2%',
        backgroundColor:'gold',
        cursor:'pointer',
        transition:'0.5s',
        borderRadius:'5px',
        margin:'2% 0 0 0',
        color:'white'
    }

    const handleOne=()=>{
        setOverview(true)
        setRacket(false)
        setCricket(false) 
        setTeam(false)
        setSwim(false)
        setRoller(false)
        setCloth(false)
        setCycle(false)
        setOther(false)
        setShoes(false)
    }

    const handleTwo=()=>{
        setOverview(false)
        setRacket(false)
        setCricket(false) 
        setTeam(false)
        setSwim(false)
        setRoller(false)
        setCloth(false)
        setCycle(true)
        setOther(false)
        setShoes(false)
    }

    const handleThree=()=>{
        setOverview(false)
        setRacket(false)
        setCricket(true) 
        setTeam(false)
        setSwim(false)
        setRoller(false)
        setCloth(false)
        setCycle(false)
        setOther(false)
        setShoes(false)
    }

    const handleFour=()=>{
        setOverview(false)
        setRacket(false)
        setCricket(false) 
        setTeam(false)
        setSwim(false)
        setRoller(false)
        setCloth(true)
        setCycle(false)
        setOther(false)
        setShoes(false)
    }
    const handleFive=()=>{
        setOverview(false)
        setRacket(false)
        setCricket(false) 
        setTeam(false)
        setSwim(true)
        setRoller(false)
        setCloth(false)
        setCycle(false)
        setOther(false)
        setShoes(false)
    }
    const handleSix=()=>{
        setOverview(false)
        setRacket(false)
        setCricket(false) 
        setTeam(false)
        setSwim(false)
        setRoller(false)
        setCloth(false)
        setCycle(false)
        setOther(false)
        setShoes(true)
    }
    const handleSeven=()=>{
        setOverview(false)
        setRacket(false)
        setCricket(false) 
        setTeam(false)
        setSwim(false)
        setRoller(true)
        setCloth(false)
        setCycle(false)
        setOther(false)
        setShoes(false)
    }
    const handleEight=()=>{
        setOverview(false)
        setRacket(true)
        setCricket(false) 
        setTeam(false)
        setSwim(false)
        setRoller(false)
        setCloth(false)
        setCycle(false)
        setOther(false)
        setShoes(false)
    }
    const handleNine=()=>{
        setOverview(false)
        setRacket(false)
        setCricket(false) 
        setTeam(true)
        setSwim(false)
        setRoller(false)
        setCloth(false)
        setCycle(false)
        setOther(false)
        setShoes(false)
    }
    const handleTen=()=>{
        setOverview(false)
        setRacket(false)
        setCricket(false) 
        setTeam(false)
        setSwim(false)
        setRoller(false)
        setCloth(false)
        setCycle(false)
        setOther(true)
        setShoes(false)
    }
    

  return (
    <div className='warranty'
    style={{
        padding:'6% 3% 3% 3%'
    }}>
        <div className='warranty-image'>

        </div>
        <div className='warranty-contents'style={{
            display:'flex'
        }}>
        <div className='warranty-1'
        style={{
            width:'50%',
            height:'100%',
            fontFamily:'Bebas Neue',
            padding:'2%',
            backgroundColor:'#e8e9eb',
            borderRadius:'5px'
            }}>
            <div className='category' style={overview?mystyle2:mystyle1} onClick={handleOne}>Overview</div>
            <div className='category' style={cycle?mystyle2:mystyle1} onClick={handleTwo}>Warranty on Bicycles</div>
            <div className='category' style={cricket?mystyle2:mystyle1} onClick={handleThree}>Warranty on Cricket Products</div>
            <div className='category' style={cloth?mystyle2:mystyle1} onClick={handleFour}>Warranty on Clothing</div>
            <div className='category' style={swim?mystyle2:mystyle1} onClick={handleFive}>Warranty on Swimming Products</div>
            <div className='category' style={shoes?mystyle2:mystyle1} onClick={handleSix}>Warranty on Shoes</div>
            <div className='category' style={roller?mystyle2:mystyle1} onClick={handleSeven}>Warranty on Roller Skates</div>
            <div className='category' style={racket?mystyle2:mystyle1} onClick={handleEight}>Warranty on Racquet Sport Products</div>
            <div className='category' style={team?mystyle2:mystyle1} onClick={handleNine}>Warranty on Team Sports and Related Products</div>
            <div className='category' style={other?mystyle2:mystyle1} onClick={handleTen}>Other Warranty Details</div>
        </div>
        <div className='warranty-2' style={{
            width:'100%',
            padding:'0 0 0 3%',
            }}>
            {
                overview?<>
                <BodyPara
                text1={'On most products sold online,you can enjoy a 2 year warranty while some products may offer a 5 to 10 year warranty as well'}
                text2={'The warranty holds good for products that are used within the prescribed norms'}
                text3={'Those not eligible for warranty are:'}
                text4={'Products that have surpassed the warranty period'}
                text5={'Damages due to misuse of product'}
                text6={'Incidental damage to the product'}
                text7={'Malfunction of digital products due to user settings'}
                text8={'Negligance and improper care in maintainance of the product'}/>
                </>:
                racket?<>
                <BodyPara
                text1={
                    '2 year warranty on - Shoes and Apparel'
                }
                text2={'No warranty on guts,sweat bands,Towels'}
                text3={'No warranty can be claimed on physical or induced damage'}
                text4={'No warranty on wear and tear of balls and Shuttlecocks'}/>
                </>:
                cricket?<>
                <BodyPara
                text1={'2 year warranty on Cricket Bat handles'}
                text2={'2 year warranty on Cricket Kit'}
                text3={'2 year warranty on all Apparel,Shoes & Cricket Set'}
                text4={'No warranty on Leather or Tennis Ball'}
                />
                </>:
                team?<>
                <BodyPara
                text1={'2 years warranty applicable on all products unless otherwise specified on the same'}
                text2={'6 months warranty on the football bladder'}
                text3={'Refer Clothing,Apparel and Shoes warranty terms above **'}
                />
                </>:
                swim?<>
                <BodyPara
                text1={'2 year warranty on the Quality of the product'}
                text2={'NO WARRANTY on physical induced damage,inappropriate usage or negligance'}/>
                </>:
                roller?<>
                <BodyPara
                text1={'2 year warranty on body parts,,wheels,brackets and pedals'}
                text2={'NO WARRANTY on any induced damage to the wheels,brackets,pedals,whee bearings,bare blocks,handles and other consumables'}
                />
                </>:
                cloth?<>
                <BodyPara
                text1={'2 year warranty on most apparels'}
                text2={'Warranty is ensured on the quality of the fabric, zippers and'}
                text3={'NO WARRANTY on induced tears,fading due to detergents,a leaking phenomenon,etc'}/>
                </>:
                cycle?<>
                <BodyPara
                text1={'A Life Time Warranty on the frame of the bicycle and a 2 year warranty on the front fork'}
                text2={'NO WARRANTY on parts subject to wear and tear-internal and external tubes,brake locks,handlebars,pedals,the chain,fron,brake lines,light bulbs,wheel rims,transmission and derailing chain devices'}
                text3={'Other conditions NOT covered by our warranty: a)Damage by third-party,intentional damage or willful negligance; b)Improper use and negligance; c)Bike modifications; d)Use of non-original parts; e)Natural disaster and force; f)Damage during transportation'}
                />
                </>:
                shoes?<>
                <BodyPara
                text1={'2 years warranty on the stitching,color fading,sole pasting and in case of a manufacturing defect'}
                text2={'NO WARRANTY on laces and mesh of the shoe'}
                text3={'NO WARRANTY on physical induced damaged,inappropriate usage or negligance'}/>
                </>:
                other?<>
                <BodyPara
                text1={'Warranty on Sleeping Bags - 5 year warranty on sleeping bags'}
                text2={'Warranty on Backpacks-10 year warranty on all hiking and trekking backpacks'}
                text3={'Warranty on Golf Kits-2year warranty on golf kits and apparel & NO WARRANTY on Golf Balls'}/>
                </>:<>
                <BodyPara
                text1={'On most products sold online,you can enjoy a 2 year warranty while some products may offer a 5 to 10 year warranty as well'}
                text2={'The warranty holds good for products that are used within the prescribed norms'}
                text3={'Those not eligible for warranty are:'}
                text4={'Products that have surpassed the warranty period'}
                text5={'Damages due to misuse of product'}
                text6={'Incidental damage to the product'}
                text7={'Malfunction of digital products due to user settings'}
                text8={'Negligance and improper care in maintainance of the product'}/>
                </>

            }
        </div>
        </div>
    </div>
  )
}

export default Warranty