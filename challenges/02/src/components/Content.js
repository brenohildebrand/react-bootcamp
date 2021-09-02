import React, { useState } from 'react'
import H2 from './H2'
import P from './P'

const Content = ({ articles }) => {
    const [ title, setTitle ] = useState(articles[0].title)
    const [ content, setContent ] = useState(articles[0].content)

    return (
        <section>
            <H2>{title}</H2>
            {content}
        </section>
    )
}

export default Content