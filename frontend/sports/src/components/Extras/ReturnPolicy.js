import React from 'react'

const ReturnPolicy = () => {

    const mystyle1={
        fontFamily:'Bebas Neue',
        fontSize:'40px',
        padding:'2% 0 0 0'
    }

    const mystyle2={
        padding:'1% 0 0 0',
        fontFamily:'Oswald',
        fontSize:'20px'
    }
    const mystyle3={
        padding:'1% 0 3% 0',
        fontFamily:'Oswald'
    }
  return (
    <div style={{
        padding:'4% 2% 2% 2%'
    }}>
        <div className='return-1'>
            <div style={mystyle1}>
                Never-to-Fail Scenarios for a return
            </div>
            <div style={mystyle2}>
                We prefer to receive our products back in their original condition,unused and in their original packaging.
            </div>
            <div style={mystyle2}>
                In case of a manufacturing defect, we take complete responsibility to take it back.No questions asked.
            </div>
            <div style={mystyle2}>
                We retain the right to accept or refuse the return and will chose the adapted solution(exchange,partial or full refund)
            </div>
            <div style={mystyle1}>
                Some Things We just cannot take back
            </div>
            <div style={mystyle2}>
                Perishable goods(food and drinks)
            </div>
            <div style={mystyle2}>
                Products with a hygiene concern(undergarments)
            </div>
            <div style={mystyle2}>
                Personal safety equipment
            </div>
        </div>
        <div className='return-policy'>
            <div style={mystyle1}>
                FAQ
            </div>
            <div style={mystyle2}>
                How Long does the Return Process take?
            </div>
            <div style={mystyle3}>
                Pickup of the product will be done within 4-5 business days of you raising a return request.
            </div>
            <div style={mystyle2}>
                Do i have an option to replace a product
            </div>
            <div style={mystyle3}>
                No,currently you can only return but not replace.
            </div>
        </div>
    </div>
  )
}

export default ReturnPolicy