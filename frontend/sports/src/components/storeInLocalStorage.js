exports.setLocal = (data)=>{
    data.expireDate = new Date(new Date().getTime() + 60000)
    localStorage.setItem("token",JSON.stringify(data.access))
    localStorage.setItem("expire",JSON.stringify(data.expireDate))
}

exports.getLocal = ()=>{
    const token = localStorage.getItem("token")
    return JSON.parse(token)
}

exports.removeLocal=(item)=>{
    localStorage.removeItem(item)
}
exports.getExpireDate = ()=>{
    let token = localStorage.getItem("token")
    token = JSON.parse(token)
    return token
}