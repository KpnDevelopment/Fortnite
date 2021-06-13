import React from "react";
import { Card, CardImg, Carousel, CarouselItem } from "react-bootstrap";
import "./Banner.css";

function Banner() {
  return (
    <div className="Carousel">
      <Card className="bannerCard">
        <Card.Title className="title">Fortunate</Card.Title>
      </Card>
      <div className="wave">
        <svg
          id="wave"
          style={{ transform: "rotate(0deg)", transition: "0.3s" }}
          viewBox="0 0 1440 250"
          version="1.1"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            <linearGradient id="sw-gradient-0" x1="0" x2="0" y1="1" y2="0">
              <stop stop-color="rgba(243, 62, 234.006, 0.8)" offset="0%"></stop>
              <stop stop-color="rgba(255, 11, 110.611, 1)" offset="100%"></stop>
            </linearGradient>
          </defs>
          <path
            style={{ transform: "translate(0, 0px)", opacity: "1" }}
            fill="url(#sw-gradient-0)"
            d="M0,225L80,220.8C160,217,320,208,480,191.7C640,175,800,150,960,145.8C1120,142,1280,158,1440,175C1600,192,1760,208,1920,208.3C2080,208,2240,192,2400,162.5C2560,133,2720,92,2880,75C3040,58,3200,67,3360,62.5C3520,58,3680,42,3840,41.7C4000,42,4160,58,4320,62.5C4480,67,4640,58,4800,58.3C4960,58,5120,67,5280,83.3C5440,100,5600,125,5760,133.3C5920,142,6080,133,6240,108.3C6400,83,6560,42,6720,54.2C6880,67,7040,133,7200,154.2C7360,175,7520,150,7680,150C7840,150,8000,175,8160,179.2C8320,183,8480,167,8640,145.8C8800,125,8960,100,9120,75C9280,50,9440,25,9600,50C9760,75,9920,150,10080,150C10240,150,10400,75,10560,62.5C10720,50,10880,100,11040,129.2C11200,158,11360,167,11440,170.8L11520,175L11520,250L11440,250C11360,250,11200,250,11040,250C10880,250,10720,250,10560,250C10400,250,10240,250,10080,250C9920,250,9760,250,9600,250C9440,250,9280,250,9120,250C8960,250,8800,250,8640,250C8480,250,8320,250,8160,250C8000,250,7840,250,7680,250C7520,250,7360,250,7200,250C7040,250,6880,250,6720,250C6560,250,6400,250,6240,250C6080,250,5920,250,5760,250C5600,250,5440,250,5280,250C5120,250,4960,250,4800,250C4640,250,4480,250,4320,250C4160,250,4000,250,3840,250C3680,250,3520,250,3360,250C3200,250,3040,250,2880,250C2720,250,2560,250,2400,250C2240,250,2080,250,1920,250C1760,250,1600,250,1440,250C1280,250,1120,250,960,250C800,250,640,250,480,250C320,250,160,250,80,250L0,250Z"
          ></path>
          <defs>
            <linearGradient id="sw-gradient-1" x1="0" x2="0" y1="1" y2="0">
              <stop stop-color="rgba(243, 62, 234.006, 1)" offset="0%"></stop>
              <stop stop-color="rgba(255, 11, 151.944, 1)" offset="100%"></stop>
            </linearGradient>
          </defs>
          <path
            style={{ translate: "(0, 50px)", opacity: "0.9" }}
            fill="url(#sw-gradient-1)"
            d="M0,150L80,158.3C160,167,320,183,480,158.3C640,133,800,67,960,50C1120,33,1280,67,1440,100C1600,133,1760,167,1920,154.2C2080,142,2240,83,2400,87.5C2560,92,2720,158,2880,191.7C3040,225,3200,225,3360,191.7C3520,158,3680,92,3840,66.7C4000,42,4160,58,4320,83.3C4480,108,4640,142,4800,129.2C4960,117,5120,58,5280,54.2C5440,50,5600,100,5760,133.3C5920,167,6080,183,6240,170.8C6400,158,6560,117,6720,120.8C6880,125,7040,175,7200,200C7360,225,7520,225,7680,204.2C7840,183,8000,142,8160,116.7C8320,92,8480,83,8640,79.2C8800,75,8960,75,9120,75C9280,75,9440,75,9600,91.7C9760,108,9920,142,10080,150C10240,158,10400,142,10560,150C10720,158,10880,192,11040,170.8C11200,150,11360,75,11440,37.5L11520,0L11520,250L11440,250C11360,250,11200,250,11040,250C10880,250,10720,250,10560,250C10400,250,10240,250,10080,250C9920,250,9760,250,9600,250C9440,250,9280,250,9120,250C8960,250,8800,250,8640,250C8480,250,8320,250,8160,250C8000,250,7840,250,7680,250C7520,250,7360,250,7200,250C7040,250,6880,250,6720,250C6560,250,6400,250,6240,250C6080,250,5920,250,5760,250C5600,250,5440,250,5280,250C5120,250,4960,250,4800,250C4640,250,4480,250,4320,250C4160,250,4000,250,3840,250C3680,250,3520,250,3360,250C3200,250,3040,250,2880,250C2720,250,2560,250,2400,250C2240,250,2080,250,1920,250C1760,250,1600,250,1440,250C1280,250,1120,250,960,250C800,250,640,250,480,250C320,250,160,250,80,250L0,250Z"
          ></path>
        </svg>
      </div>
    </div>
  );
}

export default Banner;
