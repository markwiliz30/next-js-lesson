import styled from 'styled-components'

// to use styled-components(library for styling in js files) wrap the <Component {...pageProps} /> in _app.js
const Title = styled.h1`
    font-size: 50px;
    color: ${({ theme }) => theme.colors.primary};
`

function CSSJS(){
    return <Title>Styled Component</Title>
}

export default CSSJS