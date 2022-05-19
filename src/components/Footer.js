import React from 'react'
import { NavLink } from 'react-router-dom'
import { AddIcon } from './AddedInfo/AddedInfoPart'
import { FaInstagram, FaInstagramSquare, FaTwitterSquare, FaYoutubeSquare } from 'react-icons/fa'
import { ShieldCheck } from 'react-bootstrap-icons'
import upi from './images/upi.svg'
import net from './images/net.svg'
import debit from './images/debit.svg'
import credit from './images/credit.svg'

const Footer = () => {
  const mystyle1 = {
    display: 'block',
    fontWeight: 'bold'
  }
  const mystyle2 = {
    textDecoration: 'none',
    color: 'black',
  }
  const mystyle3 = {
    padding: '1% 0 0 0'
  }
  const mystyle4 = {
    padding: '5% 0 0 0'
  }
  return (
    <div className='footer-info' style={{
      display: 'inline-flex',
      width: '100%',
    }}>
      <div className='footer-info-1 col-sm-9 col-lg-9'
        style={{
          margin: '1% 0 0 0',
          padding: '0 0.5% 0 2%'
        }}>

        <div className='footer-info-1.1' style={{
          justifyContent: 'center',
          fontSize: '15px',
          fontFamily: 'Oswald',
        }}>
          <div className='footer-info-1-1' style={{
            display: 'inline-flex',
            backgroundColor: '#e8e9eb',
            width: '100%',
            margin: '2% 0 0 0'
          }}>
            <div style={{
              textAlign: 'center',
              fontFamily: 'Bebas Neue',
              fontSize: '25px',
              margin: '3% 3% 3% 3%'
            }}>
              OUR PROMISE
            </div>
            <div style={{
              textAlign: 'center',
              margin: "3% 5% 3% 0"
            }}>
              <NavLink to='/warranty' style={mystyle2}>
                <span><AddIcon link='/warranty' size='35' /></span>
                <span>2 Years Warranty*</span>
              </NavLink>
            </div>
            <div style={{
              textAlign: 'center',
              margin: "3% 5% 3% 0",
            }}>
              <NavLink to='/pickup' style={mystyle2}>
                <span><AddIcon link='/pickup' size='30' /></span>
                <span>Free Pick up from Store</span>
              </NavLink>

            </div>
            <div style={{
              textAlign: 'center',
              margin: "3% 5% 3% 0",
            }}>
              <NavLink to='/return-policy' style={mystyle2}>
                <span><AddIcon link="/return-policy" size='30' /></span>
                <span>90 Days Return Policy</span>
              </NavLink>
            </div>
            <div style={{
              margin: "3% 0 3% 0",
              textAlign: 'center'
            }}>
              <NavLink to='/home-delivery' style={mystyle2}>
                <span><AddIcon link='/home-delivery' size='25' /></span>
                <span>Free Home Delivery above Rs. 1699*</span>
              </NavLink>
            </div>
          </div>
          <div className='footer-info-1-2' style={{
            margin: '0.1% 0 0 0',
            backgroundColor: '#e8e9eb',
            display: 'inline-flex',
            width: '100%',
            padding: '4%'
          }}>
            <div style={{
              width: '25%',
            }}>
              <div style={mystyle1}>SUPPORT</div>
              <div style={mystyle4}><NavLink to='/about-delivery' style={mystyle2}>Delivery</NavLink></div>
            </div>
            <div style={{
              width: '25%',
            }}>
              <div style={mystyle1}>OUR SERVICES</div>
              <div style={mystyle4}><NavLink to='/for-schools' style={mystyle2}>For Schools</NavLink>
              </div >
              <div style={mystyle3}>
                <NavLink to='/for-corporates' style={mystyle2}>For Corporates</NavLink>
              </div>
              <div style={mystyle3}>
                <NavLink to='/for-sport-clubs' style={mystyle2}>For Sport Clubs</NavLink>
              </div>
            </div>
            <div style={{
              width: '25%'
            }}>
              <div style={mystyle1}>ABOUT US</div>
              <div style={mystyle4}><NavLink to='/about-us' style={mystyle2}>Who we are</NavLink></div>
              <div style={mystyle3}><NavLink to='/about-mii' style={mystyle2}>Made In India</NavLink></div>
            </div>
            <div style={{
              width: '25%'
            }}>
              <div style={mystyle1}>LEGAL</div>
              <div style={mystyle4}><NavLink to='/return-policy' style={mystyle2}>Return Policy</NavLink></div>
              <div style={mystyle3}><NavLink to='/privacy-policy' style={mystyle2}>Privacy Policy</NavLink></div>
              <div style={mystyle3}><NavLink to='/terms-condition' style={mystyle2}>Terms and Conditions</NavLink></div>
            </div>
          </div>
          <div className='footer-info-1-3' style={{
            backgroundColor: '#e8e9eb',
            width: '100%',
            display: 'inline-flex',
            margin: '0.1% 0 1% 0'
          }}>
            <div className='footer-info-1-3-1'
              style={{
                display: 'inline-flex',
                padding: '2.5%',
                width: '30%'
              }}>
              <div style={{
                padding: '0 0 0 12%',
                width: '20%'
              }}>
                <ForShield size={30} />
              </div>
              <div style={{
                display: 'block',
                textAlign: 'center',
                width: '100%'
              }}>
                <div>100% SECURE TRANSACTION</div>
                <div style={{
                  color: '#8c8d8f'
                }}>Secure SSL encryption</div>
              </div>

            </div>
            <div className='footer-info-1-3-2'
              style={{
                margin: "1.5% 0 0 0",
                display: 'inline-flex'
              }}>
              <div style={{ margin: '0 5% 0 5%' }}><img src={debit} style={{}} /></div>
              <div style={{ margin: '0 5% 0 5%' }}><img src={credit} /></div>
              <div style={{ margin: '0 5% 0 5%' }}><img src={upi} /></div>
              <div style={{ margin: '0 5% 0 5%' }}><img src={net} /></div>
            </div>
          </div>
        </div>

      </div>

      <div className='footer-info-2 col-sm-3 col-lg-3'
        style={{
          margin: '2.5% 0 0 0',
          padding: '0 1% 0 0'
        }}>

        <div className='footer-info-2.2 ' style={{
          backgroundColor: '#e8e9eb',
          margin: '0 0 1% 0'
        }}>
          <div style={{ padding: '1%' }}>
            <div style={{
              padding: '5% 0 0 10%',
              fontFamily: 'Oswald',
              fontWeight: 'bold'
            }}>
              FOLLOW US
              <div className='footer-info-2-icons'>
                <div style={{
                  display: 'inline-flex',
                  padding: '3% 0 3% 0'
                }}>
                  <Social social='instagram' />
                  <Social social='youtube' />
                  <Social social='twitter' />
                </div>
              </div>
              <div className='footer-info-2-added' style={{
                margin: '10% 0 0 0',
                display: 'block'
              }}>
                <div>
                  SPORT ADVICE FOR YOU
                </div>
                <div style={{
                  margin: '5% 0 0 0',
                  width: '100%',
                  padding: '5% 0 5% 0',
                  textAlign: 'center',
                  backgroundColor: 'white'
                }}>
                  <a href='https://blog.decathlon.in' style={{
                    textDecoration: 'none',
                    color: 'black',
                    fontWeight: "normal"
                  }}>
                    blog.decathlon.in
                  </a>
                </div>
                <div style={{
                  margin: '15% 0 0 0'
                }}>
                  EXPLORE SPORTS EVENTS NEAR YOU
                </div>
                <div style={{
                  margin: '5% 0 5% 0',
                  width: '100%',
                  padding: '5% 0 5% 0',
                  textAlign: 'center',
                  backgroundColor: 'white'
                }}>
                  <a href='https://www.allforsport.in' style={{
                    textDecoration: 'none',
                    color: 'black',
                    fontWeight: 'normal'
                  }}>allforsport.in</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

    </div>
  )
}

export default Footer

export const Social = ({ social }) => {
  if (social === 'instagram')
    return <FaInstagramSquare size='40' />
  else if (social === 'youtube')
    return <FaYoutubeSquare size='40' />
  else if (social === 'twitter')
    return <FaTwitterSquare size='40' />
}

export const ForShield = ({size}) => {
  return <ShieldCheck size={size} />
}