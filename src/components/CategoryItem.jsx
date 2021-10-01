import  styled  from 'styled-components'
import React from 'react'

const Container=styled.div`
flex:1;
margin:3px;
height:70vh;
position:relative;
`
const Image=styled.img`
width:100%;
height:100%;
object-fit:cover;
`
const Info=styled.div`
position:absolute;
top:0;
left:0;
width:100%;
height:100%;
display:flex;
align-items:center;
justify-content:center;
flex-direction:column;
`
const Title=styled.h1`
color:coral;
`
const Button=styled.button`
background:transparent;
border:none;
font-size:18px;
padding:10px;
border:1px solid coral;
cursor:pointer;
color:blue;
font-weight:600;
transition:all .25s ease;
&:hover{
    background:white;
    color:gray;
}
`
const CategoryItem = ({item}) => {
    return (
        <Container>
            <Image src={item.img}/>
            <Info>
                <Title>{item.title}</Title>
                <Button>Shop Now</Button>
            </Info>
        </Container>
    )
}

export default CategoryItem
