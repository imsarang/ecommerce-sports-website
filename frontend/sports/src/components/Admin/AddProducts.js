import React, { useState } from 'react'
import { FaAddressBook, FaAddressCard, FaLeaf, FaPlus, FaTrash } from 'react-icons/fa'
import defaultImage from '../images/defaultImage.png'
import { category1, category2, category3, category4_1, category4_2, category4_3, category4_4, category4_5 } from '../general'
// import { app } from '../firebase/firebase1'
// import { ref, uploadBytes } from '@firebase/storage'
// import firebase from 'firebase/compat/app'
// require('firebase/storage')
import { storage } from '../firebase/firebase1'
import defaultPic from '../images/defaultPic.jpg'
import Loading from '../Loading'

const AddProducts = ({ setChoice }) => {

  const [show, setShow] = useState(false)
  const [tempFile, setTempImg] = useState('')
  const [forFirebase, setForFirebase] = useState('')
  const [load,setLoad] = useState(false)

  const [productInfo, setProduct] = useState({
    imageUrl: null,
    name: '',
    available: '',
    price: null,
    mrp: null,
    size: '',
    heading1: '', content1: '',
    heading2: '', content2: '',
    heading3: '', content3: '',
    heading4: '', content4: '',

    surfaceCover: '',
    style: '',
    material: '',
    storage: '',
    country: '',

    category1: '',
    category2: '',
    category3: '',
    category4: '',

  })
  const handleSubmit1 = (e) => {
    e.preventDefault()

  }

  const addToDataBase = async () => {
    setLoad(true)
    try {
      const product = await fetch('api/v2/add', {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          imageUrl: productInfo.imageUrl,
          name: productInfo.name,
          price: productInfo.price,
          mrp1: productInfo.mrp,
          maxAvailable: productInfo.available,
          category: {
            category1: productInfo.category1,
            category2: productInfo.category2,
            category3: productInfo.category3,
            category4: productInfo.category4,
          },
          size1: productInfo.size,
          advantage: {
            advantage1: {
              heading: productInfo.heading1,
              content: productInfo.content1
            },
            advantage2: {
              heading: productInfo.heading2,
              content: productInfo.content2
            },
            advantage3: {
              heading: productInfo.heading3,
              content: productInfo.content3
            },
            advantage4: {
              heading: productInfo.heading4,
              content: productInfo.content4
            },
          },
          technical: {
            proCategory: productInfo.category2,
            surfaceCover: productInfo.surfaceCover,
            quantity: productInfo.available,
            size2: productInfo.size,
            style: productInfo.style,
            material: productInfo.material,
            storage: productInfo.storage,
            country: productInfo.country,
            mrp2: productInfo.mrp
          },
          review: []
        })
      })

      if (product) {
        const actual = await product.json()
      }
    } catch (e) {
      console.log(e);
    }
    setLoad(false)
  }

  const handleAddProduct = async (e) => {
    e.preventDefault()



    if (forFirebase != '') {
      const file = forFirebase
    }
    addToDataBase()
    setChoice({
      order: false,
      returns: false,
      allProducts: true,
      addNew: false
    })
  }
  const handleInputs = (e) => {
    setProduct({ ...productInfo, [e.target.name]: e.target.value })
  }

  const handleRemoveImage = async()=>{
    const fileUrl = productInfo.imageUrl
    const fileRef = storage.refFromURL(fileUrl)

    try
    {
      await fileRef.delete()
      
    }catch(e){console.log(e);}

    setProduct({...productInfo,imageUrl:null})
  }

  const onCreate = async (e) => {
    setLoad(true)
    const file = e.target.files[0]
    const storageRef = storage.ref()
    const fileRef = storageRef.child(file.name)
    await fileRef.put(file)
    const fileUrl = await fileRef.getDownloadURL()
    setProduct({ ...productInfo, imageUrl: fileUrl })
    setLoad(false)
  }

  if(load)return<Loading/>

  return (
    <div className='add-products-bg'>
      <div className='add-main'>

        {
          !show ? <>
            <form onSubmit={handleSubmit1}>
              <div className='add-content-1'>
                <div className='add-image'>
                  <div className='add-image-1'>
                    <input type='file' name='imageUrl' id='add-image-tag'
                      onChange={onCreate}
                    />
                    <div className='image-space'>
                      {
                        productInfo.imageUrl != null ?

                          <img className='add-img-tag' src={productInfo.imageUrl} alt='Picture not found' />
                          : <img className='add-img-tag' src={defaultPic} />
                      }

                    </div>
                  </div>
                  <div style={{ display: 'flex', width: '100%' }}>
                    <div style={{width:'100%'}}>
                      <label htmlFor='add-image-tag' className='add-image-label1'>
                        <div className='image-plus'>
                          <FaPlus />
                        </div>
                      </label>
                    </div>
                    <div style={{width:'100%',margin:'0 0 0 1%'}}>
                      <label className='add-image-label2' onClick={handleRemoveImage}>
                        <div className='image-plus'>
                          <FaTrash />
                        </div>
                      </label>
                    </div>
                  </div>
                </div>
                <div className='add-sub-content'>
                  <div className='add-name'>
                    <div className='add-new-class'>Product Name:</div>
                    <input
                      type='text'
                      maxLength={30}
                      placeholder='Name of Product'
                      name='name'
                      value={productInfo.name}
                      onChange={(e) => handleInputs(e)}
                      className='add-input'
                      required />
                  </div>
                  <div className='add-category'>
                    <div className='add-new-class'>Category:</div>
                    <div className='add-category-select'>
                      <div className='add-category-select-idvl'>
                        <select
                          maxLength={30}
                          placeholder='Select'
                          name='category1'
                          value={productInfo.category1}
                          onChange={(e) => handleInputs(e)}
                          className='select-add'
                          required>
                          <option>Category1</option>
                          {
                            category1.map((item) => {
                              return <option className='select-option'>{item}</option>
                            })
                          }
                        </select>
                      </div>

                      <div className='add-category-select-idvl'>
                        <select
                          maxLength={30}
                          placeholder='Select'
                          name='category2'
                          value={productInfo.category2}
                          onChange={(e) => handleInputs(e)}
                          className='select-add'
                          required>
                          <option>Category 2</option>
                          {
                            category2.map((item) => {
                              return <option className='select-option'>{item}</option>
                            })
                          }
                        </select>
                      </div>

                      <div className='add-category-select-idvl'>
                        <select
                          maxLength={30}
                          placeholder='Select'
                          name='category3'
                          value={productInfo.category3}
                          onChange={(e) => handleInputs(e)}
                          className='select-add'
                          required>
                          <option>Category 3</option>
                          {
                            category3.map((item) => {
                              return <option className='select-option'>{item}</option>
                            })
                          }
                        </select>
                      </div>

                      {
                        productInfo.category2 === "Accessories" ? <></> :
                          <div className='add-category-select-idvl'>
                            <select
                              maxLength={30}
                              placeholder='Select'
                              name='category4'
                              value={productInfo.category4}
                              onChange={(e) => handleInputs(e)}
                              className='select-add'
                              required>

                              <option>Category 4</option>
                              {
                                productInfo.category2 == 'Men' && productInfo.category3 == 'Upper' ?
                                  category4_1.map((item) => {
                                    return <option className='select-option'>{item}</option>
                                  }) :
                                  productInfo.category2 == 'Men' && productInfo.category3 == 'Lower' ?
                                    category4_2.map((item) => {
                                      return <option className='select-option'>{item}</option>
                                    }) :
                                    productInfo.category2 == 'Women' && productInfo.category3 == 'Upper' ?
                                      category4_3.map((item) => {
                                        return <option className='select-option'>{item}</option>
                                      }) :
                                      productInfo.category2 == 'Women' && productInfo.category3 == 'Lower' ?
                                        category4_4.map((item) => {
                                          return <option className='select-option'>{item}</option>
                                        }) :
                                        productInfo.category2 == 'Kids' ?
                                          category4_5.map((item) => {
                                            return <option className='select-option'>{item}</option>
                                          }) : <></>
                              }
                            </select>
                          </div>
                      }

                    </div>
                  </div>

                  <div className='add-size'>
                    <div className='add-new-class'>Size:</div>
                    <input
                      type='text'
                      maxLength={30}
                      placeholder='Size'
                      name='size'
                      value={productInfo.size}
                      onChange={(e) => handleInputs(e)}
                      className='add-input'
                      required />
                  </div>
                  <div className='add-price'>
                    <div className='add-new-class'>Your Price:</div>
                    <input
                      type='text'
                      maxLength={30}
                      placeholder='Price'
                      name='price'
                      value={productInfo.price}
                      onChange={(e) => handleInputs(e)}
                      className='add-input'
                      required />
                  </div>
                  <div className='add-mrp'>
                    <div className='add-new-class'>MRP:</div>
                    <input
                      type='text'
                      maxLength={30}
                      placeholder='MRP'
                      name='mrp'
                      value={productInfo.mrp}
                      onChange={(e) => handleInputs(e)}
                      className='add-input'
                      required />
                  </div>
                  <div className='add-available'>
                    <div className='add-new-class'>Units Available:</div>
                    <input
                      type='text'
                      maxLength={30}
                      placeholder='Quantity'
                      name='available'
                      value={productInfo.available}
                      onChange={(e) => handleInputs(e)}
                      className='add-input'
                      required />
                  </div>
                </div>
              </div>

              <div className='add-content-2'>
                <div className='add-content-2-head'>
                  Advantages
                </div>
                <div className='add-advantages'>
                  <div className='add-advantage'>
                    <div className='advs-label'>1:</div>
                    <div className='advs-con'>
                      <div className='adv-heading'>
                        <div>Title:</div>
                        <input type='text'
                          placeholder='Title'
                          maxLength={25}
                          name='heading1'
                          value={productInfo.heading1}
                          onChange={(e) => handleInputs(e)}
                          className='adv-con-input'
                          required />
                      </div>
                      <div className='adv-content'>
                        <div>Content:</div>
                        <input
                          type='text'
                          maxLength={50}
                          placeholder='Content'
                          name='content1'
                          value={productInfo.content1}
                          onChange={(e) => handleInputs(e)}
                          className='adv-con-input' />
                      </div>
                    </div>
                  </div>

                  <div className='add-advantage'>
                    <div className='advs-label'>2:</div>
                    <div className='advs-con'>
                      <div className='adv-heading'>
                        <label>Title:</label>
                        <input type='text'
                          placeholder='Title'
                          maxLength={25}
                          name='heading2'
                          value={productInfo.heading2}
                          onChange={(e) => handleInputs(e)}
                          className='adv-con-input' />
                      </div>
                      <div className='adv-content'>
                        <label>Content:</label>
                        <input
                          type='text'
                          maxLength={50}
                          placeholder='Content'
                          name='content2'
                          value={productInfo.content2}
                          onChange={(e) => handleInputs(e)}
                          className='adv-con-input' />
                      </div>
                    </div>
                  </div>

                  <div className='add-advantage'>
                    <div className='advs-label'>3:</div>
                    <div className='advs-con'>
                      <div className='adv-heading'>
                        <label>Title:</label>
                        <input type='text'
                          placeholder='Title'
                          maxLength={25}
                          name='heading3'
                          value={productInfo.heading3}
                          onChange={(e) => handleInputs(e)}
                          className='adv-con-input' />
                      </div>
                      <div className='adv-content'>
                        <label>Content:</label>
                        <input
                          type='text'
                          maxLength={50}
                          placeholder='Content'
                          name='content3'
                          value={productInfo.content3}
                          onChange={(e) => handleInputs(e)}
                          className='adv-con-input' />
                      </div>
                    </div>
                  </div>

                  <div className='add-advantage'>
                    <div className='advs-label'>4:</div>
                    <div className='advs-con'>
                      <div className='adv-heading'>
                        <label>Title:</label>
                        <input type='text'
                          placeholder='Title'
                          maxLength={25}
                          name='heading4'
                          value={productInfo.heading4}
                          onChange={(e) => handleInputs(e)}
                          className='adv-con-input' />
                      </div>
                      <div className='adv-content'>
                        <label>Content:</label>
                        <input
                          type='text'
                          maxLength={50}
                          placeholder='Content'
                          name='content4'
                          value={productInfo.content4}
                          onChange={(e) => handleInputs(e)}
                          className='adv-con-input' />
                      </div>
                    </div>
                  </div>

                </div>
              </div>
              <div className='add-pro-btn'>
                <button type='submit' className='add-btn' onClick={() => setShow(true)}>Next</button>
              </div>
            </form>
          </> : <>
            <form onSubmit={(e) => handleAddProduct(e)}>
              <div className='add-technical'>
                <div className='add-technical-head'>
                  Technical Information
                </div>
                <div className='add-technical-info'>
                  <div className='add-technical-content'>
                    <div className='add-item'>
                      <label className='add-label'>Category:</label>
                      <span className='add-span'>{productInfo.category1}</span>
                      <span className='add-span'>{productInfo.category2}</span>
                      <span className='add-span'>{productInfo.category3}</span>
                      <span className='add-span'>{productInfo.category4}</span>
                    </div>
                    <div className='add-item'>
                      <div className='add-label'>Size:</div>
                      <span className='add-span'>{productInfo.size}</span>
                    </div>
                    <div className='add-item'>
                      <div className='add-label'>Surface Cover:</div>
                      <div className='tech-input-div'>
                        <input
                          type='text'
                          placeholder='Surface Cover'
                          name='surfaceCover'
                          value={productInfo.surfaceCover}
                          onChange={(e) => handleInputs(e)}
                          className='tech-input' />
                      </div>
                    </div>

                    <div className='add-item'>
                      <div className='add-label'>Style:</div>
                      <div className='tech-input-div'><input
                        type='text'
                        placeholder='Style'
                        name='style'
                        value={productInfo.style}
                        onChange={(e) => handleInputs(e)}
                        className='tech-input' />
                      </div>
                    </div>
                    <div className='add-item'>
                      <div className='add-label'>Material:</div>
                      <div className='tech-input-div'>
                        <input
                          type='text'
                          placeholder='Material'
                          name='material'
                          value={productInfo.material}
                          onChange={(e) => handleInputs(e)}
                          className='tech-input' />
                      </div>
                    </div>
                    <div className='add-item'>
                      <div className='add-label'>Storage:</div>
                      <div className='tech-input-div'><input
                        type='text'
                        placeholder='Storage'
                        name='storage'
                        value={productInfo.storage}
                        onChange={(e) => handleInputs(e)}
                        className='tech-input' />
                      </div>
                    </div>
                    <div className='add-item'>
                      <div className='add-label'>Country of Origin:</div>
                      <div className='tech-input-div'>
                        <input
                          type='text'
                          placeholder='Origin'
                          name='country'
                          value={productInfo.country}
                          onChange={(e) => handleInputs(e)}
                          className='tech-input' />
                      </div>
                    </div>
                  </div>
                </div>
                <div className='add-pro-btn'>
                  <button className='add-btn' onClick={() => setShow(false)}>Previous</button>
                  <button type='submit' className='add-btn-1'>Add Product</button>
                </div>
              </div>
            </form>
          </>
        }

      </div>
    </div>
  )
}

export default AddProducts