import React from 'react'
import styled from 'styled-components'
import { topProducts } from '../data'
import Product from './Product'

const Container = styled.div`
display:flex;
flex-wrap:wrap;
align-items:center;
justify-content:space-between;
`
const Products = () => {
    return (
        <Container>
            {topProducts.map(item=>(
                <Product
                item={item} key={item.id}
                />
            ))}
        </Container>
    )
}

export default Products
