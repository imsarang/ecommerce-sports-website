import React from 'react'
import { faLeftLong, faLongArrowRight } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { bottoms, cycling, footwear, innerwear, outdoor, racket, roller, running, target, team, tops, water } from '../../general'
import { NavLink } from 'react-router-dom'
import ContentPrint from './ContentPrint'

const Content21 = ({ setAll, categories }) => {

    return (
        <div>
            <div className='all-sports-back' style={{
                padding: '5%',
                fontFamily: 'Bebas Neue'
            }} onClick={() => { setAll('none') }}>
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

            </div>
            {
                categories === 'Outdoor Sports' ? <>
                        <ContentPrint ContentArr={outdoor} heading='Outdoor Sports'/>
                    </> :
                    categories === 'Running and Walking' ? <>
                        <ContentPrint ContentArr={running} heading='Running and Walking'/>
                    </> :
                    categories === 'Racket Sports' ? <>
                        <ContentPrint ContentArr={racket} heading={categories}/>
                    </> : 
                    categories === 'Team Sports'?<>
                        <ContentPrint ContentArr={team} heading={categories}/>
                    </>:
                    categories === 'Water Sports'?<>
                    <ContentPrint ContentArr={water} heading={categories}/>
                    </>:
                    categories === 'Target Sports'?<>
                    <ContentPrint ContentArr={target} heading={categories}/>
                    </>:
                    categories === 'Cycling' ?<>
                        <ContentPrint ContentArr={cycling} heading={categories}/>
                    </>:
                    categories === 'Roller Sports'?<>
                    <ContentPrint ContentArr={roller} heading={categories}/>
                    </>:
                    categories === "Kids' Footwear"?<>
                    <ContentPrint ContentArr={footwear} heading={categories}/></>:
                    categories === "Kids' Tops"?
                    <ContentPrint ContentArr={tops} heading={categories}/>:
                    categories === "Kids' Bottoms"?
                    <ContentPrint ContentArr={bottoms} heading={categories}/>:
                    categories === "Kids' Innerwear"?
                    <ContentPrint ContentArr={innerwear} heading={categories}/>:
                    categories === "Mens' Footwear"?
                    <ContentPrint ContentArr={footwear} heading={categories}/>:
                    categories === "Mens' Tops"?
                    <ContentPrint ContentArr={tops} heading={categories}/>:
                    categories === "Mens' Bottoms"?
                    <ContentPrint ContentArr={bottoms} heading={categories}/>:
                    categories === "Mens' Innerwear"?
                    <ContentPrint ContentArr={innerwear} heading={categories}/>:
                    categories === "Womens' Footwear"?
                    <ContentPrint ContentArr={footwear} heading={categories}/>:
                    categories === "Womens' Tops"?
                    <ContentPrint ContentArr={tops} heading={categories}/>:
                    categories === "Womens' Bottoms"?
                    <ContentPrint ContentArr={bottoms} heading={categories}/>:
                    categories === "Womens' Innerwear"?
                    <ContentPrint ContentArr={innerwear} heading={categories}/>:
                    categories === "Bags & Backpacks"?
                    <ContentPrint ContentArr={innerwear} heading={categories}/>:
                    categories === "Clothing accessories"?
                    <ContentPrint ContentArr={innerwear} heading={categories}/>:
                    categories === "Bottles & Food Storage"?
                    <ContentPrint ContentArr={innerwear} heading={categories}/>:
                    categories === "Sports Watches"?
                    <ContentPrint ContentArr={innerwear} heading={categories}/>:
                    <></>
            }
            
        </div>
    )
}

export default Content21