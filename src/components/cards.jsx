// Card.jsx
import React from 'react';
import styled from 'styled-components';

// Import your images
import aiMLmage from '../assets/ai-ml.jpg';
import dsaImage from '../assets/dsa.jpeg';
import eventImage from '../assets/event.jpeg';
import marketingImage from '../assets/marketing.jpeg';
import mediaImage from '../assets/media.jpeg';
import webImage from '../assets/webdev.jpg';
import emerge from '../assets/emergetech.jpg';

const Card = () => {
    return (
        <StyledWrapper>
            <div className="wrapper">
                <div className="inner" style={{ '--quantity': 7 }}>

                    <div className="card" style={{ '--index': 0, '--color-card': '142, 252, 204' }}>
                        <div className="card-header">DSA</div>
                        <div className="img" style={{ backgroundImage: `url(${dsaImage})` }} />
                    </div>

                    <div className="card" style={{ '--index': 1, '--color-card': '252, 142, 142' }}>
                        <div className="card-header">Web Dev</div>
                        <div className="img" style={{ backgroundImage: `url(${webImage})` }} />
                    </div>

                    <div className="card" style={{ '--index': 2, '--color-card': '252, 252, 142' }}>
                        <div className="card-header">Media</div>
                        <div className="img" style={{ backgroundImage: `url(${mediaImage})` }} />
                    </div>

                    <div className="card" style={{ '--index': 3, '--color-card': '142, 252, 157' }}>
                        <div className="card-header">Event Management</div>
                        <div className="img" style={{ backgroundImage: `url(${eventImage})` }} />
                    </div>

                    <div className="card" style={{ '--index': 4, '--color-card': '215, 252, 142' }}>
                        <div className="card-header">Marketing</div>
                        <div className="img" style={{ backgroundImage: `url(${marketingImage})` }} />
                    </div>

                    <div className="card" style={{ '--index': 5, '--color-card': '252, 142, 239' }}>
                        <div className="card-header"> Emerging tech</div>
                        <div className="img" style={{ backgroundImage: `url(${emerge})` }} />
                    </div>

                    <div className="card" style={{ '--index': 6, '--color-card': '142, 249, 252' }}>
                        <div className="card-header">AI/ML</div>
                        <div className="img" style={{ backgroundImage: `url(${aiMLmage})` }} />
                    </div>

                    

                </div>
            </div>
        </StyledWrapper>
    );
}

const StyledWrapper = styled.div`
  .wrapper {
    width: min(300px, 90vw);
    height: min(300px, 90vw);
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    overflow: visible;
  }

  .inner {
    --w: min(100px, 30vw);
    --h: min(160px, 48vw);
    --translateZ: calc((var(--w) + var(--h)) + 0px);
    --rotateX: 0deg;
    --perspective: min(380px, 100vw);
    position: absolute;
    width: var(--w);
    height: var(--h);
    top: 25%;
    left: calc(50% - (var(--w)/2) - 2.5px);
    transform-style: preserve-3d;
    transform: perspective(var(--perspective));
    animation: rotating 35s linear infinite;
  }

  @keyframes rotating {
    from { transform: perspective(var(--perspective)) rotateX(var(--rotateX)) rotateY(0); }
    to { transform: perspective(var(--perspective)) rotateX(var(--rotateX)) rotateY(1turn); }
  }

  .card {
    position: absolute;
    inset: 0;
    border: 1px solid rgba(var(--color-card));
    border-radius: 12px;
    overflow: hidden;
    display: flex;
    flex-direction: column;
    transform: rotateY(calc((360deg / var(--quantity)) * var(--index))) translateZ(var(--translateZ));
  }

  .card-header {
    height: 24px;
    background: rgba(var(--color-card), 0.8);
    color: #000;
    font-weight: bold;
    text-align: center;
    line-height: 24px;
    font-size: clamp(0.5rem, 2vw, 0.6rem);
  }

  .img {
    flex: 1;
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
  }

  @media (max-width: 768px) {
    .wrapper {
      width: min(250px, 85vw);
      height: min(250px, 85vw);
    }

    .inner {
      --w: min(80px, 25vw);
      --h: min(128px, 40vw);
      --perspective: min(300px, 90vw);
    }

    .card-header {
      font-size: clamp(0.45rem, 1.8vw, 0.55rem);
      height: 20px;
      line-height: 20px;
    }
  }

  @media (max-width: 480px) {
    .wrapper {
      width: min(200px, 80vw);
      height: min(200px, 80vw);
    }

    .inner {
      --w: min(70px, 22vw);
      --h: min(110px, 35vw);
      --perspective: min(250px, 85vw);
    }

    .card-header {
      font-size: clamp(0.4rem, 1.5vw, 0.5rem);
      height: 18px;
      line-height: 18px;
    }
  }
`;

export default Card;    