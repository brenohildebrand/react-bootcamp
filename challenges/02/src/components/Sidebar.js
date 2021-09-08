import React from 'react'
import styled from 'styled-components'
import H2 from './H2'

const Sidebar = ({ articles, articleOnClick }) => {

    return (
        <Aside>
            {articles.map(article => (
                <ArticlePreview 
                    key={article.title} 
                    onClick={() => articleOnClick(article.id)}
                >
                    <H2>{article.title}</H2>
                </ArticlePreview>
            ))}
        </Aside>
    )
}

const Aside = styled.aside`
    flex-grow: 1;
    
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    border: 1px solid black;

    ${H2} {
        margin-bottom: 50px;
    }
`

const ArticlePreview = styled.div`
    width: 80%;
    padding: 10px;
    margin: 5px;
    border-bottom: 1px solid rgba(0, 0, 0, 0.2);

    &:last-of-type {
        border: none;
    }
`

export default Sidebar