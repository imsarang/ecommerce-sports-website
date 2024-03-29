import React from 'react'
import '../styles/search.css'

const FilterCategory1 = ({setMen,setWomen,setKids,setAcc,setAll,men,women,kids,acc,all}) => {

    const handleChange1 = (e)=>{
        setMen(!men)
        setAll(false)
    }
    const handleChange2 = (e)=>{
        setWomen(!women)
        setAll(false)
    }
    const handleChange3 = (e)=>{
        setKids(!kids)
        setAll(false)
    }
    const handleChange4 = (e)=>{
        setAcc(!acc)
        setAll(false)
    }
    const handleChange5 = (e)=>{
        setAll(!all)
        setMen(false)
        setWomen(false)
        setKids(false)
        setAcc(false)
    }
  return (
    <div className='filter-1'>
        <div className='filter-1-main'>
        <div className='filter-cat1'><input type='checkbox' name='men' checked={men} onChange={(e)=>handleChange1(e)}/>Men</div>
        <div className='filter-cat1'><input type='checkbox' name='women' checked={women} onChange={(e)=>handleChange2(e)}/>Women</div>
        <div className='filter-cat1'><input type='checkbox' name='kids' checked={kids} onChange={(e)=>handleChange3(e)}/>Kids</div>
        <div className='filter-cat1'><input type='checkbox' name='acc' checked={acc} onChange={(e)=>handleChange4(e)}/>Accessories</div>
        <div className='filter-cat1'><input type='checkbox' name='all' checked={all} onChange={(e)=>handleChange5(e)}/>All</div>
        </div>
    </div>
  )
}

export default FilterCategory1