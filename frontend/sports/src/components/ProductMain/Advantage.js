import React, { useEffect } from 'react'
import NoProduct from '../NoProduct'

const Advantage = ({ adv1, adv2, adv3, adv4 }) => {

  if(adv1.heading=='')
  return <NoProduct text='advantages'/>
  return (
    <div style={{
      width: '100%',
      padding: '2%'
    }}>
      <div className='advantage' style={{
        width: '100%',
      }}>


        <div style={{
          width: '100%',
          padding: '2%',
          margin: '0 0 2% 0',
          backgroundColor: '#e8e9eb'
        }}>
          <div style={{
            fontFamily: 'Oswald',
            fontSize: '20px',
            fontWeight: 'bold'
          }}>{adv1.heading}
          </div>
          <div style={{
            padding: '1% 0 0 0',
            fontFamily: 'Roboto Condensed',
            fontWeight: 'bold'
          }}>{adv1.content}
          </div>
        </div>

        {
          adv2.heading?
          <div style={{
            width: '100%',
            padding: '2%',
            margin: '0 0 2% 0',
            backgroundColor: '#e8e9eb'
          }}>
            <div style={{
              fontFamily: 'Oswald',
              fontSize: '20px',
              fontWeight: 'bold'
            }}>{adv2.heading}
            </div>
            <div style={{
              padding: '1% 0 0 0',
              fontFamily: 'Roboto Condensed',
              fontWeight: 'bold'
            }}>{adv2.content}
            </div>
          </div>:<></>
        }

        {
          adv3.heading?
          <div style={{
            width: '100%',
            padding: '2%',
            margin: '0 0 2% 0',
            backgroundColor: '#e8e9eb'
          }}>
            <div style={{
              fontFamily: 'Oswald',
              fontSize: '20px',
              fontWeight: 'bold'
            }}>{adv3.heading}
            </div>
            <div style={{
              padding: '1% 0 0 0',
              fontFamily: 'Roboto Condensed',
              fontWeight: 'bold'
            }}>{adv3.content}
            </div>
          </div>:<></>
        }

        {
          adv4.heading?
          <div style={{
            width: '100%',
            padding: '2%',
            margin: '0 0 2% 0',
            backgroundColor: '#e8e9eb'
          }}>
            <div style={{
              fontFamily: 'Oswald',
              fontSize: '20px',
              fontWeight: 'bold'
            }}>{adv1.heading}
            </div>
            <div style={{
              padding: '1% 0 0 0',
              fontFamily: 'Roboto Condensed',
              fontWeight: 'bold'
            }}>{adv2.heading}
            </div>
          </div>:<></>
        }
      </div>
    </div>
  )
}

export default Advantage