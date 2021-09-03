import React from 'react'
import H2 from './H2'

const Content = ({ currentArticle }) => {
    const { title, content } = currentArticle
    
    return (
        <section>
            <H2>{title}</H2>
            {content}
        </section>
    )
}

export default Content