import React from "react";
import axios from "axios";
import { useEffect, useState } from "react";
import { Carousel, Container } from "react-bootstrap";
import "../shop/Shop.css";

function ItemDetails(props) {
  const [video, setvideo] = useState({});
  const [items, setitems] = useState({
    images: {},
    ratings: {},
  });

  useEffect(() => {
    fetchitemsDeatils();
  }, []);
  const carosetItem = {
    height: "95vh",
    backgroundColor: "#045de9",
    backgroundImage: "linear-gradient(315deg, #045de9 0%, #09c6f9 74%)",
    fontSize: "5rem",
    justifyContent: "center",
    textAlign: "center",
    fontWeight: "800",
  };

  const fetchitemsDeatils = async () => {
    const response = await axios.get(
      `https://fortnite-api.theapinetwork.com/item/get?id=${props.match.params.id}`
    );
    // console.log(response.data.data.item);
    setitems(response.data.data.item);
    console.log(response.data.data.item.media[0].src);
    setvideo(response.data.data.item.media[0].src);
  };

  return (
    <div className="ShopDeatails">
      <Carousel fade>
        <Carousel.Item>
          <div
            className="split"
            style={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "center",
              backgroundColor: "#000",
            }}
          >
            <img
              style={carosetItem}
              className="d-block w-50 "
              // src={items.images.featured}
              alt="Loading ....."
            />
            <Container
              className="d-block caption w-50"
              style={{
                display: "flex",
                alignItems: "center",
                color: "white",
                margin: "10rem",
              }}
            >
              <h3>{items.name}</h3>
              <h4>{items.type}</h4>
              <p>{items.description}</p>
              <h5>{items.ratings.avgStars}</h5>
              <h5>{items.ratings.totalPoints}</h5>
              <h5>{items.ratings.numberVotes}</h5>
              <h1>Coming soon....</h1>
            </Container>
          </div>
        </Carousel.Item>
        <Carousel.Item>
          <div
            className="split"
            style={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "center",
              backgroundColor: "#000",
            }}
          >
            <video
              controls
              autoplay
              style={{
                height: "95vh",
                border: "none",
                backgroundColor: "#045de9",
                backgroundImage:
                  "linear-gradient(315deg, #045de9 0%, #09c6f9 74%)",
              }}
              className="d-block w-50"
              src={video}
              alt="Second slide"
              type="video/mp4"
            />
            <Container
              className="d-block caption w-50"
              style={{
                display: "flex",
                alignItems: "center",
                color: "white",
                margin: "10rem",
              }}
            >
              <h3>{items.name}</h3>
              <h4>{items.type}</h4>
              <p>{items.description}</p>
              <h5>{items.ratings.avgStars}</h5>
              <h5>{items.ratings.totalPoints}</h5>
              <h5>{items.ratings.numberVotes}</h5>
              <h1>Comping Soon...</h1>
            </Container>
          </div>
        </Carousel.Item>
      </Carousel>
      <div className="container">
        {/* <div className="refrt">
          <img src={items.images.icon} alt="avathar_img" />
          <h5>{items.name}</h5>
          <p>{items.description}</p>
          <video
            height="500"
            width="500"
            controls
            src={video}
            type="video/mp4"
          />
        </div> */}
      </div>
    </div>
  );
}

export default ItemDetails;
