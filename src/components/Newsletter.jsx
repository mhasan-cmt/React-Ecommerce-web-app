import {
    SendOutlined
} from '@material-ui/icons'
import styled from 'styled-components'

const Container=styled.div`
height:60vh;
background-color:#fcf5f5;
display:flex;
align-items:center;
justify-content:center;
flex-direction:column;
`
const Title=styled.h1`
font-size:70px;
margin-bottom:20px;
`
const Description=styled.div`
font-size:24px;
font-weight:300;
margin-bottom:20px;
`
const InputContainer=styled.div`
width:50%;
height:40px;
background-color:white;
display:flex;
justify-content:space-between;
border:1px solid lightgray;
`
const Input=styled.input`
border:none;
flex:8;
padding-left:10px;
`
const Button=styled.button`
flex:1;
padding-left:20px;
border:none;
background:teal;
color:white;
cursor:pointer;
transition:.25s ease;
&:hover{
    transform:scale(1.1);
}
`
const Newsletter = () => {
    return (
        <Container>
            <Title>Newsletter</Title>            
            <Description>Get timely updates</Description>            
            <InputContainer>            
            <Input type="email" placeholder='Your email address'/>
            <Button>
                <SendOutlined></SendOutlined>    
            </Button> 
            </InputContainer>           
        </Container>
    )
}

export default Newsletter
