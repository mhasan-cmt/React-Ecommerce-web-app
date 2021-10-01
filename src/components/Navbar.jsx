import React from 'react'
import styled from 'styled-components'
import {
Search, ShoppingCart
}
from '@material-ui/icons';
import {
Badge
} from '@material-ui/core'


const Container= styled.div`
height:60px;
`
const Wrapper= styled.div`
padding:10px 20px;
display:flex;
align-items:center;
`
const Center=styled.div`
flex:1;
text-align:center;
`
const Left=styled.div`
flex:1;
display:flex;
align-items:center;
`
const Right=styled.div`
flex:1;
display:flex;
align-items:center;
justify-content:flex-end;
`
const Language=styled.span`
font-size:14px;
cursor:pointer;
`
const SearchContainer=styled.div`
border:1px solid lightgray;
display:flex;
align-items:center;
margin-left:25px;
padding:5px;
`
const Input=styled.input`
`
const Logo=styled.h1`
font-weight:bold;

`
const MenuItem=styled.div`
font-size:14px;
cursor:pointer;
margin-left:25px;
`
const Navbar = () => {
    return (
        <Container>
            <Wrapper>
                <Left>
                    <Language>EN</Language>
                    <SearchContainer>
                        <Input/>
                        <Search 
                        style={{color:'gray',fontSize:16}}/>
                    </SearchContainer>
                </Left>
                <Center><Logo>SHAFIN</Logo></Center>
                <Right>
                    <MenuItem>REGISTER</MenuItem>
                    <MenuItem>SIGN IN</MenuItem>
                    <MenuItem>
                        <Badge color="primary" badgeContent={99}>
                            <ShoppingCart/>
                        </Badge>
                    </MenuItem>
                </Right>
            </Wrapper>
        </Container>
    )
}

export default Navbar
