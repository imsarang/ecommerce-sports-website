import React, { useEffect } from 'react'

const SearchProducts = ({ men, women, kids, acc, all,category }) => {

    const showProducts = async ()=>{
        const str = men?'Men':women?'Women':kids?'Kids':acc?'Accessories':all?'All':'All'
        const result = await fetch(`/api/v2/search/main/${category}/${str}?page=${0}&limit=${7}`)
        const ans = await result.json()
        if(ans.success)
        {
            console.log(ans);
        }
    }

    useEffect(()=>{
        showProducts()
    },[men,women,acc,kids,all])
    return (
        <div>SearchProducts</div>
    )
}

export default SearchProducts