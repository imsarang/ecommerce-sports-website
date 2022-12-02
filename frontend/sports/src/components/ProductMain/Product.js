import { faCaretRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useEffect, useState } from "react";
import { FaStar } from "react-icons/fa";
import { NavLink, useParams } from "react-router-dom";
import { ForShield } from "../Footer";
import Advantage from "./Advantage";
import Review from "./Review";
import Technical from "./Technical";
import "../styles/product.css";
import { useDispatch, useSelector } from "react-redux";
import {
  CLICK_CHANGE_ADDRESS,
  CLICK_SIZE_CHART,
  pincode,
  sizechart,
} from "../redux/clickingReducer";

import { ADD_TO_CART, CART_NOTIF } from "../redux/cartReducer";
import SizeChart from "./SizeChart";
import Loading from "../Loading";
import InfoModal from "../Info/InfoModal";

const Product = () => {
  const [stage, setStage] = useState("advantage");
  const { id } = useParams();
  const pin = useSelector(pincode);
  const show = useSelector(sizechart);
  const [item, setProduct] = useState({});
  const [review, setForReview] = useState([]);
  const [adv, setAdvantage] = useState({
    advantage1: {
      heading: "",
      content: "",
    },
    advantage2: {
      heading: "",
      content: "",
    },
    advantage3: {
      heading: "",
      content: "",
    },
    advantage4: {
      heading: "",
      content: "",
    },
  });
  const [load, setLoad] = useState(false);
  const [showAdd, setAddToCart] = useState(false);
  const [seconds, setSeconds] = useState(5);

  const dispatch = useDispatch();

  const showProductFromDatabase = async () => {
    setLoad(true);
    const result = await fetch(`/api/v2/product/${id}`);
    const product = await result.json();
    const {
      _id,
      name,
      imageUrl,
      price,
      mrp1,
      maxAvailable,
      size1,
      category,
      technical,
      advantage,
      reviews,
      avgRate,
    } = product.product;
    if (product.success) {
      // console.log(id);
      setProduct({
        id: _id,
        name: name,
        imageUrl: imageUrl,
        price: price,
        mrp: mrp1,
        available: maxAvailable,
        size: size1,
        category1: category.category1,
        category2: category.category2,
        style: technical.style,
        surfaceCover: technical.surfaceCover,
        material: technical.material,
        storage: technical.storage,
        country: technical.country,
        avgRate: avgRate,
      });
      console.log(product.product);
      setForReview([...review, reviews]);
      setAdvantage({
        advantage1: {
          heading: advantage.advantage1.heading,
          content: advantage.advantage1.content,
        },
        advantage2: {
          heading: advantage.advantage2.heading,
          content: advantage.advantage2.content,
        },
        advantage3: {
          heading: advantage.advantage3.heading,
          content: advantage.advantage3.content,
        },
        advantage4: {
          heading: advantage.advantage4.heading,
          content: advantage.advantage4.content,
        },
      });
    }
    setLoad(false);
  };
  useEffect(() => {
    showProductFromDatabase();
  }, [id]);
  const handleAddress = () => {
    dispatch(CLICK_CHANGE_ADDRESS());
  };
  const handleStage = (inStage) => {
    setStage(inStage);
  };
  const handleSizeChart = () => {
    dispatch(CLICK_SIZE_CHART());
  };
  const handleAddToCart = () => {
    setSeconds(2);
    setAddToCart(true);
    dispatch(
      ADD_TO_CART({
        id: item.id,
        name: item.name,
        imageUrl: item.imageUrl,
        price: item.price,
        rating: item.avgRate,
        quantity: 1,
        available: item.available,
        size: item.size,
      })
    );
    dispatch(CART_NOTIF({}));
  };

  if (load) return <Loading />;
  else {
    return (
      <>
        {show ? (
          <>
            <SizeChart category2={item.category2} />
          </>
        ) : (
          <></>
        )}
        <div
          className="idvl-product-page"
          style={{
            padding: "5% 0 0 0",
          }}
        >
          <section
            className="product-info-1"
            style={{
              display: "flex",
              justifyContent: "center",
              // backgroundColor:'yellow'
            }}
          >
            <div
              className="product-img"
              style={{
                width: "50%",
                height: "90vh",
              }}
            >
              <div>
                <img
                  src={item.imageUrl}
                  style={{
                    maxHeight: 550,
                    width: "80%",
                    margin: "5% 1% 5% 10%",
                  }}
                  alt="Image not Found"
                />
              </div>
            </div>
            <div
              className="product-content-1"
              style={{
                width: "50%",
              }}
            >
              <div
                className="heading"
                style={{
                  margin: "5%",
                  fontFamily: "Oswald",
                  fontWeight: "bold",
                  fontSize: "20px",
                }}
              >
                {item.name}
              </div>
              <div
                className="product-price"
                style={{
                  display: "flex",
                  margin: "5%",
                  fontFamily: "Oswald",
                }}
              >
                <div
                  className="actual-price"
                  style={{
                    backgroundColor: "yellow",
                    padding: "2% 5% 2% 5% ",
                  }}
                >
                  Rs.{item.price}
                </div>
                <div
                  className="mrp-price"
                  style={{
                    padding: "2% 5% 2% 5%",
                  }}
                >
                  MRP Rs.{item.mrp}
                </div>
                {item.rating != 0 ? (
                  <div
                    className="pro-rate"
                    style={{
                      padding: "2% 5% 2% 5%",
                    }}
                  >
                    {item.avgRate == 0 ? (
                      <></>
                    ) : (
                      <>
                        {item.avgRate}/5 <FaStar style={{ color: "gold" }} />
                      </>
                    )}
                  </div>
                ) : (
                  <></>
                )}
              </div>
              <div
                className="pro-warranty"
                style={{
                  display: "flex",
                  margin: "5%",
                }}
              >
                <div className="warranty-icon">
                  <ForShield size={50} />
                </div>
                <div
                  style={{
                    // margin:'0 0 0 1%',
                    padding: "1% 5% 1% 5%",
                  }}
                >
                  <NavLink
                    to="/warranty"
                    style={{
                      color: "black",
                      textDecoration: "none",
                      fontFamily: "Oswald",
                    }}
                  >
                    2 Years Warranty
                  </NavLink>
                </div>
              </div>
              {item.category2 != "Accessories" ? (
                <div
                  className="pro-size"
                  style={{
                    display: "flex",
                    fontFamily: "Oswald",
                    width: "100%",
                    padding: "2% 0 2% 5%",
                  }}
                >
                  <div
                    style={{
                      margin: "0 3% 0 0",
                      padding: "0% 0% 0% 5%",
                      fontSize: "29px",
                      fontFamily: "Bebas Neue",
                    }}
                  >
                    Size
                  </div>
                  <div
                    style={{
                      padding: "0% 2% 0% 2%",
                      width: "50%",
                    }}
                  >
                    <div
                      className="pro-size-drop"
                      style={{
                        padding: "1%",
                        width: "100%",
                        fontFamily: "Oswald",
                        fontSize: "20px",
                      }}
                    >
                      {item.size}
                    </div>
                  </div>
                  <div
                    className="view-size-chart"
                    style={{
                      display: "flex",
                      margin: "0.5% 0 0 0",
                      cursor: "pointer",
                      width: "15%",
                    }}
                    onClick={handleSizeChart}
                  >
                    <div
                      style={{
                        padding: "0 10% 0 0",
                      }}
                    >
                      View size chart
                    </div>
                    <div>
                      <FontAwesomeIcon icon={faCaretRight} />
                    </div>
                  </div>
                </div>
              ) : (
                <></>
              )}
              <div
                style={{
                  width: "90%",
                  padding: "1% 0 1% 5%",
                  fontFamily: "Bebas Neue",
                  color: "white",
                  fontSize: "20px",
                }}
              >
                {item.available === 0 ? (
                  <div
                    style={{
                      // border:'1px solid red',
                      backgroundColor: "red",
                      padding: "1.5%",
                      borderRadius: "1%",
                    }}
                  >
                    Out of Stock
                  </div>
                ) : (
                  <div
                    style={{
                      backgroundColor: "#349beb",
                      padding: "1.5%",
                      borderRadius: "5px",
                    }}
                  >
                    Available Quantity: {item.available}x
                  </div>
                )}
              </div>
              <div
                className="add-to-cart"
                style={{
                  padding: "5%",
                  width: "100%",
                }}
              >
                <button
                  style={{
                    // padding:'2%'
                    width: "40%",
                    padding: "2%",
                    borderRadius: "10px",
                    fontFamily: "Bebas Neue",
                    fontSize: "20px",
                    backgroundImage:
                      "linear-gradient(to right,rgb(245, 232, 56),rgb(247, 162, 49))",
                    border: "none",
                    boxShadow: "2px 2px rgb(207, 206, 204)",
                  }}
                  onClick={handleAddToCart}
                >
                  Add to cart
                </button>
              </div>
              {showAdd ? (
                <InfoModal
                  text={"Product Added To Cart"}
                  setShow={setAddToCart}
                  seconds={seconds}
                  setSeconds={setSeconds}
                />
              ) : (
                <></>
              )}
              <div
                className="delivery-services"
                style={{
                  display: "flex",
                  width: "100%",
                  padding: "0 5% 0 5%",
                  fontFamily: "Oswald",
                }}
              >
                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    width: "50%",
                    backgroundColor: "#e8e9eb",
                    padding: "2% 5% 2% 5%",
                  }}
                >
                  <div>{pin}</div>
                  <div style={{}}>
                    <span
                      onClick={handleAddress}
                      style={{
                        cursor: "pointer",
                        color: "#1d66db",
                      }}
                    >
                      CHANGE
                    </span>
                  </div>
                </div>
                <div
                  style={{
                    padding: "1% 4% 1% 4%",
                    margin: "0 1% 0 1%",
                    backgroundColor: "#e8e9eb",
                  }}
                >
                  Free Home delivery above Rs.1699*
                </div>
                <div
                  style={{
                    backgroundColor: "#e8e9eb",
                    padding: "1% 0 0 2%",
                  }}
                >
                  90 days Return Policy
                </div>
              </div>
            </div>
          </section>
          <section className="product-content-2">
            <div
              className="adv-tech-rev"
              style={{
                // backgroundColor: 'green',
                width: "100%",
                // height: '50vh'
              }}
            >
              <div
                className="product-c-2-head"
                style={{
                  width: "100%",
                  backgroundColor: "#e8e9eb",
                  display: "flex",
                  justifyContent: "space-between",
                  padding: "0% 10% 0% 10%",
                  fontFamily: "Bebas Neue",
                  fontSize: "25px",
                }}
              >
                <div
                  onClick={() => handleStage("advantage")}
                  className={stage == "advantage" ? "curInfo" : "defInfo"}
                  id="adv"
                >
                  Advantages
                </div>
                <div
                  onClick={() => handleStage("technical")}
                  className={stage == "technical" ? "curInfo" : "defInfo"}
                  id="tech"
                >
                  Technical Information
                </div>
                <div
                  onClick={() => handleStage("review")}
                  className={stage == "review" ? "curInfo" : "defInfo"}
                  id="rev"
                >
                  Reviews
                </div>
              </div>
              <div className="product-content-1">
                {stage === "advantage" ? (
                  <>
                    <Advantage
                      adv1={adv.advantage1}
                      adv2={adv.advantage2}
                      adv3={adv.advantage3}
                      adv4={adv.advantage4}
                    />
                  </>
                ) : stage === "technical" ? (
                  <Technical
                    gender={item.category2}
                    surface_cover={item.surfaceCover}
                    quantity={item.available}
                    size={item.size}
                    pro_style={item.style}
                    material={item.material}
                    warranty={2}
                    countryOrigin={item.country}
                    mrp={`${item.price} inclusive of all taxes`}
                    storage={item.storage}
                  />
                ) : stage === "review" ? (
                  <Review
                    rating={review}
                    id={item.id}
                    productName={item.name}
                    handleStage={handleStage}
                  />
                ) : (
                  <></>
                )}
              </div>
            </div>
          </section>
        </div>
      </>
    );
  }
};

export default Product;
