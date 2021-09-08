import React from 'react'
import styled from 'styled-components'
import H2 from './H2'
import P from './P'

const Content = ({ article }) => {
    const { title, content } = article
    
    return (
        <Section>
            <H2>{title}</H2>
            <P>{content}</P>
        </Section>
    )
}

const Section = styled.section`
    flex-grow: 3;

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    max-width: 75vw;
    padding: 50px 250px;

    border: 1px solid black;

    ${P} {
        margin-top: 30px;
    }
`

export default Content