import React, { useEffect, useState } from 'react'
import {useParams} from 'react-router-dom'
import { FaDatabase, FaFigma, FaFilter, FaShopify } from 'react-icons/fa'
import '../styles/search.css'
import DropDown from './DropDown'
import FilterCategory1 from './FilterCategory1'
import PriceSlider from './PriceSlider'
import SearchProducts from './SearchProducts'
const SearchPage = () => {

  const [showDropdown, setShowDropdown] = useState(false)
  const [minPrice,setMinPrice] = useState(5000)
  const [maxPrice,setMaxPrice] = useState(15000)
  const {section} = useParams()
  const {category} = useParams()
  const [men,setMen] = useState(false)
  const [women,setWomen] = useState(false)
  const [kids,setKids] = useState(false)
  const [acc,setAcc] = useState(false)
  const [all,setAll] = useState(false)
  const [totalPages,setTotalPages] = useState()
  const [sort,setSort] = useState('highlow')
  
  useEffect(()=>{
    handleCat1()
  },[category,section,sort])

  const handleCat1 = ()=>{
    // const {men,women,kids,acc,all} = cat1
    if(section == 'Men') setMen(true)
    else if(section == 'Women') setWomen(true)
    else if(section == 'Kids') setKids(true)
    else if(section == 'Accessories') setAcc(true)
    else setAll(true)

  } 
  const handleClickSorting = ()=>{
    setShowDropdown(!showDropdown)
  }
  return (
    <div className='search-page'>
        <div className='search-page-filters'>
          <div className='search-filter-head'>
            <label id='filter-color'>Filters <FaDatabase id='filter-icon'/></label>
          </div>
          <div className='search-price'>
            <PriceSlider maxPrice={maxPrice} minPrice={minPrice} setMinPrice={setMinPrice} setMaxPrice={setMaxPrice}/>
          </div>
          <div className='search-category2'>
            <FilterCategory1 setMen={setMen}setWomen={setWomen}setKids={setKids}setAcc={setAcc}setAll={setAll}
            men={men}women={women}kids={kids}acc={acc}all={all}/>
          </div>
          <div className='search-category3'>
            {/* filter category3 */}
          </div>
        </div>
        <div className='search-page-content'>
          <div className='search-page-headers'>
            <div className='search-sort' >
              <button id='sort-btn' onClick={handleClickSorting}>Sorting</button>
            </div>
            {
              showDropdown?<div id='sort-dropdown'><DropDown setSort={setSort} sort={sort}/></div>:<></>
            }
            <div className='search-page-result'>
              {/* Showing 1-{totalPages}of /total/ results  */}
            </div>
          </div>
          <div className='search-page-products'>
            <SearchProducts men={men} women={women} kids={kids} acc={acc} all={all} category={category} minPrice={minPrice} maxPrice={maxPrice}
            setTotalPages = {setTotalPages}
            sort={sort}/>
          </div>
        </div>
    </div>
  )
}

export default SearchPage