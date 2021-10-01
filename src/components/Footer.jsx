import styled from 'styled-components'
import {
    Facebook, Twitter,YouTube
}from '@material-ui/icons'

const Container = styled.div`
display:flex;
`
const Left = styled.div`
flex:1;
`
const Center = styled.div`
flex:1;
`
const Right = styled.div`
flex:1;
`
const Logo=styled.h1``
const Desc=styled.div``
const SocialContainer=styled.div``
const Footer = () => {
    return (
        <Container>
            <Left>
                <Logo>SHAFIN</Logo>
                <Desc>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Reiciendis deserunt suscipit possimus distinctio
                    ab libero fugiat eos ut aperiam deleniti.
                </Desc>
                <SocialContainer>
                    <Facebook/>
                    <Twitter/>
                    <YouTube/>
                </SocialContainer>
            </Left>
            <Center></Center>
            <Right></Right>
        </Container>
    )
}

export default Footer
