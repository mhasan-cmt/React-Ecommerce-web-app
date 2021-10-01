import styled from "styled-components"

const Container = styled.div`
height:30px;
background-color:teal;
color:white;
display:flex;
align-items:center;
justify-content:center;
font-weight:500;
`
const Anouncement = () => {
    return (
        <Container>
            October Is Loaded With Food Deals. Here's How to Get Free & Cheap Food Every Day
        </Container>
    )
}

export default Anouncement
