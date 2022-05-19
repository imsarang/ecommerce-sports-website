import React, { useState } from 'react'
import { faLeftLong, faLongArrowRight } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { mens } from '../general'
import Content21 from './ContentInfoPart/Content21'
const Men = ({setActive}) => {
  const [men, setAll] = useState('none')
    const handleAll = () => {
        setActive({
            s1: false,
            s2: false,
            s3: false,
            s4: false,
            s5: false
        })
        setAll('none')
    }
  return (
    <div>
    {
        men != 'none' ? <Content21 setAll={setAll} categories={men} /> :
            <>
                <div className='all-sports-back' style={{
                    padding: '5%',
                    fontFamily: 'Bebas Neue'
                }} onClick={handleAll}>
                    <FontAwesomeIcon icon={faLeftLong} style={{
                        padding: '0 3% 0 0'
                    }} />
                    BACK
                </div>
                <div className='all-sports-head' style={{
                    fontFamily: 'Bebas Neue',
                    padding: '0 0 0 5%',
                    fontSize: '20px'
                }}>
                    Men
                </div>
                {
                    mens.map((item)=>{
                        return <div className='all-sports-2-info'>
                    <div style={{
                        display: 'flex',
                        justifyContent: 'space-between',
                        backgroundColor: '#e8e9eb',
                        padding: '5%',
                        fontFamily: 'Oswald',
                        margin: '2%',
                        borderRadius: '10px'
                    }} onClick={()=>setAll(item)}>
                        <div>
                            {item}
                        </div>
                        <FontAwesomeIcon icon={faLongArrowRight} style={{
                            padding: '0 5% 0 0'
                        }} />
                    </div>
                </div>
                    })
                }
            </>
    }
</div>
  )
}

export default Men