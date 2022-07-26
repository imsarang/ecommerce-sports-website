import React from 'react'

const Technical = ({ gender, surface_cover, quantity, size, pro_style, material, warranty, storage, countryOrigin, mrp }) => {
  return (
    <div className='technical' style={{
      width: '100%',
      padding: '1%',
    }}>
      <div style={{
        backgroundColor: '#e8e9eb',
        padding: '2% 4% 2% 4%',
        margin: '1% 0 2% 0',
      }}>
        {
          gender!='Accessories'?<div style={{padding:'0 0 1% 0'}}>
          <div style={{
            fontFamily: 'Bebas Neue',
            fontSize: '20px'
          }}>GENDER
          </div>
          <div style={{
            fontFamily: 'Roboto Condensed',
            fontWeight: 'bold'
          }}>{gender}
          </div>
        </div>:<></>
        }

        {surface_cover!=null&&surface_cover!=''?
          gender!='Accessories'?
          <div style={{padding:'0 0 1% 0'}}>
          <div style={{
            fontFamily: 'Bebas Neue',
            fontSize: '20px'
          }}>Surface Coverage
          </div>
          <div style={{
            fontFamily: 'Roboto Condensed',
            fontWeight: 'bold'
          }}>{surface_cover}
          </div>
        </div>:<></>:<></>
        }

        <div style={{padding:'0 0 1% 0'}}>
          <div style={{
            fontFamily: 'Bebas Neue',
            fontSize: '20px'
          }}>quantity
          </div>
          <div style={{
            fontFamily: 'Roboto Condensed',
            fontWeight: 'bold'
          }}>{quantity}
          </div>
        </div>

        <div style={{padding:'0 0 1% 0'}}>
          <div style={{
            fontFamily: 'Bebas Neue',
            fontSize: '20px'
          }}>size
          </div>
          <div style={{
            fontFamily: 'Roboto Condensed',
            fontWeight: 'bold'
          }}>{size!=null || size!=''?<>{size}</>:<>*</>}
          </div>
        </div>
      
        {
          pro_style!=null && pro_style!=''?
          <div style={{padding:'0 0 1% 0'}}>
          <div style={{
            fontFamily: 'Bebas Neue',
            fontSize: '20px'
          }}>style
          </div>
          <div style={{
            fontFamily: 'Roboto Condensed',
            fontWeight: 'bold'
          }}>{pro_style}
          </div>
        </div>:<></>
        }

        {
          material!=null && material!=""?
          <div style={{padding:'0 0 1% 0'}}>
          <div style={{
            fontFamily: 'Bebas Neue',
            fontSize: '20px'
          }}>material
          </div>
          <div style={{
            fontFamily: 'Roboto Condensed',
            fontWeight: 'bold'
          }}>{material}
          </div>
        </div>:<></>
        }

        <div style={{padding:'0 0 1% 0'}}>
          <div style={{
            fontFamily: 'Bebas Neue',
            fontSize: '20px'
          }}>warranty
          </div>
          <div style={{
            fontFamily: 'Roboto Condensed',
            fontWeight: 'bold'
          }}>{warranty}
          </div>
        </div>

        {
          storage!=null && storage!=''?
          <div style={{padding:'0 0 1% 0'}}>
          <div style={{
            fontFamily: 'Bebas Neue',
            fontSize: '20px'
          }}>storage
          </div>
          <div style={{
            fontFamily: 'Roboto Condensed',
            fontWeight: 'bold'
          }}>{storage}
          </div>
        </div>:<></>

        }
        <div style={{padding:'0 0 1% 0'}}>
          <div style={{
            fontFamily: 'Bebas Neue',
            fontSize: '20px'
          }}>country of origin
          </div>
          <div style={{
            fontFamily: 'Roboto Condensed',
            fontWeight: 'bold'
          }}>{countryOrigin}
          </div>
        </div>

        <div style={{padding:'0 0 1% 0'}}>
          <div style={{
            fontFamily: 'Bebas Neue',
            fontSize: '20px'
          }}>mrp
          </div>
          <div style={{
            fontFamily: 'Roboto Condensed',
            fontWeight: 'bold'
          }}>{mrp}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Technical