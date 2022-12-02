import React, { useEffect, useState } from 'react'
import { FaStar } from 'react-icons/fa'
import { useNavigate } from 'react-router-dom'
import "../styles/search.css"

const SearchProducts = ({ sort,men, women, kids, acc, all, category,maxPrice,minPrice,setTotalPages }) => {

    const [products, setProducts] = useState([])
    const navigate = useNavigate()

    const showProducts = async () => {
        let arr = []
        if (men) {
            const result = await fetch(`/api/v2/search/main/${category}/${'Men'}?page=${0}&limit=${7}&min=${minPrice}&max=${maxPrice}&sort=${sort}`)
            const ans = await result.json()
            arr = [...arr, ans.product]
        }
        if (women) {
            const result = await fetch(`/api/v2/search/main/${category}/${'Women'}?page=${0}&limit=${7}&min=${minPrice}&max=${maxPrice}&sort=${sort}`)
            const ans = await result.json()
            arr = [...arr, ans.product]
        }
        if (kids) {
            const result = await fetch(`/api/v2/search/main/${category}/${'Kids'}?page=${0}&limit=${7}&min=${minPrice}&max=${maxPrice}&sort=${sort}`)
            const ans = await result.json()
            arr = [...arr, ans.product]
        }
        if (acc) {
            const result = await fetch(`/api/v2/search/main/${category}/${'Accessories'}?page=${0}&limit=${7}&min=${minPrice}&max=${maxPrice}&sort=${sort}`)
            const ans = await result.json()
            arr = [...arr, ans.product]
        }
        if (all) {
            const result = await fetch(`/api/v2/search/main/${category}?page=${0}&limit=${8}&min=${minPrice}&max=${maxPrice}&sort=${sort}`)
            const ans = await result.json()
            arr = [...arr, ans.product]
        }
        let newArr = Array.from(new Set(arr))
        setProducts(newArr)
    }

    useEffect(() => {
        showProducts()
    }, [men, women, acc, kids, all,category,minPrice,maxPrice,sort])
    const handleItem = (id)=>{
        navigate(`/product/${id }`)
    }
    // if(products.map((x)=>x.length ==0)) return<>No Products Found!</>
    return (
        <div className='search-main-products'>
            {
                products.map((x) => {
                    return <>{x.map((item) => {
                        return <div className='search-card' onClick={()=>handleItem(item._id)}>
                            {
                                    item.avgRate == 0 || item.avgRate == null ? <></> : <div id='search-rating'>{item.avgRate}<FaStar color='gold' style={{
                                        margin:'0 0 4px 8px',
                                    }}/></div>
                                }
                            <div className='search-main-image'>
                                <img src={item.imageUrl} id='search-img-tag' />
                            </div>
                            <div className='seach-card-content'>
                                <div id='search-name'>{item.name}</div>
                                <div id='search-size'>Size: {item.size1}</div>
                                <div id='search-qty'>Quantity Available:{item.maxAvailable}</div>
                                <div id='search-price'>Price: Rs.{item.price}</div>
                                
                            </div>
                        </div>
                    })
                    }</>
                })
            }
        </div>
    )
}

export default SearchProducts