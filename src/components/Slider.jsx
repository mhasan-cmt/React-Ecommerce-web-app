import styled from "styled-components"
import {
    ArrowLeft, ArrowRight
}
from '@material-ui/icons'
import {slideItems} from '../data.js'
import { useState } from "react"

const Container=styled.div`
width:100%;
height:100vh;
display:flex;
position:relative;
overflow:hidden;
`
const Wrapper=styled.div`
height:100%;
display:flex;
transform:translateX(${(props)=>props.slideIndex * -100}vw);
`
const Arrow=styled.div`
width:50px;
height:50px;
background-color:#f7eeee;
border-radius:50%;
display:flex;
align-items:center;
justify-content:center;
position:absolute;
top:0;
bottom:0;
left:${props=>props.direction === "left" && "10px"};
right:${props=>props.direction === "right" && "10px"};
margin:auto;
cursor:pointer;
opacity:.5;
z-index:2;
`
const Slide=styled.div`
display:flex;
align-items:center;
height:100vh;
width:100vw;
background-color:#${props=>props.bg}
`
const ImageContainer=styled.div`
flex:1;
height:100%;
`
const Image=styled.img`
height:80%;
`
const InfoContainer=styled.div`
flex:1;
padding:50px;
`
const Title=styled.h1`
font-size:70px;

`
const Description=styled.p`
margin:50px 0;
font-size:20px;
font-weight:500;
letter-spacing:3px;
`
const Button=styled.button`
padding:10px;
font-size:20px;
background-color:transparent;
cursor:pointer;
`
const Slider = () => {
    const [slideIndex, setSlideIndex] = useState(0);
  const handleClick = (direction) => {
    if (direction === "left") {
      setSlideIndex(slideIndex > 0 ? slideIndex - 1 : 2);
    } else {
      setSlideIndex(slideIndex < 2 ? slideIndex + 1 : 0);
    }
  };
    return (
        <Container>
            <Arrow
                direction='left'
                onclick={()=>handleClick("left")}>
            <ArrowLeft/>
            </Arrow>
            <Wrapper slideIndex={slideIndex}>
                {slideItems.map(item=>(
                    <Slide bg={item.bg}>
                    <ImageContainer>
                        <Image src={item.img} />
                    </ImageContainer>
                    <InfoContainer>
                        <Title>{item.title}</Title>
                        <Description>{item.description}</Description>
                        <Button>SHOP NOW</Button>
                    </InfoContainer>
                </Slide>
                ))}
            </Wrapper>
            <Arrow 
            direction='right'
            onclick={()=>handleClick("right")}
            >
            <ArrowRight/>
            </Arrow>
        </Container>
    )
}

export default Slider
