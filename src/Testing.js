import React from 'react'
import styled from 'styled-components'

export const Testing = () => {
 return (
  <Wrapper>
   <h3>Hello World</h3>
   <p>Hello people</p>
   <button>Click</button>
  </Wrapper>
 )
}



const Wrapper = styled.section`
h3{
 color: red
}
`