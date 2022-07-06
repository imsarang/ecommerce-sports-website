import React from 'react'

const PickUp = () => {

    const mystyle1={
        padding:'2% 0 0 0',
        fontFamily:'Oswald'
    }
  return (
    <div style={{
        padding:'5% 2% 2% 2%'
    }}>
        <div style={mystyle1}>
            All Click&Collect orders have to be picked from the store.Pick Up store cannot be changed once the order is placed.
        </div>
        <div style={mystyle1}>
            Click&Collect orders will not be delivered. These orders need to be picked up from the store by the customer.
        </div>
        <div style={mystyle1}>
            All the Click&Collect orders will be processed to the account through which payment was made.
        </div>
        <div style={mystyle1}>
            No cash transactions at the store in case of returns or cancellations.
        </div>
        <div style={mystyle1}   >
            Returns for Click&Collect Orders have to be carried out at the store not online.
        </div>
    </div>
  )
}

export default PickUp