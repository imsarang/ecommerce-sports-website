import React, { useEffect, useState } from 'react'
import { FaAngleDown, FaAngleUp, FaArrowDown, FaArrowUp } from 'react-icons/fa'
import { useNavigate } from 'react-router-dom'
import '../styles/search.css'

const SearchInput = ({find,setShowSearch,setFind}) => {

    const [searchProduct, setSearchProduct] = useState([])
    const navigate = useNavigate()
    const [productCat, setProductCat] = useState([])
    const [show,setShow] = useState(false)
    const [total,setTotal] = useState()
    const [productCat1,setProductCat1] = useState([])
    useEffect(()=>{
        showSearchProducts()
        // handleProductSections()
    },[find])
    const showSearchProducts = async()=>{
        const result = await fetch(`/api/v2/search/product?search=${find}&limit=${4}`,{
            method:"GET"
        })
        const ans = await result.json()
        if(ans.success)
        {
            let arr = []
            let category =[]
            ans.product.map((item)=>{
                arr = [...arr,[item.category.category1,item.category.category2]]
                category = [...category,item.category.category1]
            })
            let newArr=[]
            arr.map((x)=>{
                let y  = x.join(" ")
                newArr = [...newArr,y]
            })
            arr = Array.from(new Set(newArr))
            category = Array.from(new Set(category))

            setProductCat(arr)
            setSearchProduct(ans.product)
            setTotal(ans.total)
            setProductCat1(category)
            // convertToDistinct()
        }
    }
    
    const handleProductClick = (id)=>{
        navigate(`/product/${id}`)
        setShowSearch(false)
        setFind('')
    }
    const handleProductSections = (item)=>{
        const link = item.split(' ')
        if(link[1]==''||link[1]==null) link[1] = 'all'
        navigate(`/${link[0]}/${link[1]}`)
        setShowSearch(false)
    }
    const handleShowAll = async()=>{
        setShow(true)
        const result = await fetch(`/api/v2/search/product?search=${find}`,{
            method:"GET"
        })

        const ans = await result.json()
        setSearchProduct(ans.product)
    }
    const handleShowLess = async()=>{
        const result = await fetch(`/api/v2/search/product?search=${find}&limit=${4}`,{
            method:"GET"
        })
        const ans = await result.json()
        setSearchProduct(ans.product)
        setShow(false)
        setFind('')
    }
  return (
    <div className='search-main'>
        <div className='section-heading'>
            {
                productCat1.length!=0?<>Available Categories</>:<>No Category Available</>
            }
        </div>
        <div className='search-section'>
            {
                productCat1.map((item)=>{
                    return <div className='search-section-item' onClick={()=>handleProductSections(item)}>
                    <div className='section-item'>
                        <div className='search-category'>All {item} Products</div>
                    </div>
                </div>
                })
            }
        {
            productCat.length!=0?productCat.map((item,index)=>{
                if(index%2==0)
                return <div className='search-section-item' onClick={()=>handleProductSections(item)}>
                    <div className='section-item'>
                        <div className='search-category'>{item}</div>
                    </div>
                </div>
                else return <div className='search-section-item' onClick={()=>handleProductSections(item)}>
                <div className='section-item'>
                    <div className='search-category'>{item}</div>
                </div>
            </div>
            }):<div id='not-available'></div>
        }
        </div>
        <hr/>
        <div className='search-result' onClick={show?handleShowLess:handleShowAll}>
            {
                show?<>Show Less <FaAngleUp id='goUp'/></>:total>4?<>Show All {total} results<FaAngleDown id='goDown'/></>:<></>
            }
        </div>
        {
            searchProduct.length!=0?searchProduct.map((item)=>{
                return <div className='search-item' onClick={()=>handleProductClick(item._id)}>
                    <div className='search-image'>
                        <img src={item.imageUrl} id='search-photo'/>
                    </div>
                    <div className='search-content'>
                        <div className='search-name'>{item.name}</div>
                        <div className='search-category'>{item.category.category1} {item.category.category2}</div>
                    </div>
                </div>
            }):<div id='not-available'>No Products Available</div>
        }
    </div>
  )
}

export default SearchInput