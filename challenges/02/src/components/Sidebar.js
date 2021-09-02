import React from 'react'
import Button from './Button'
import H2 from './H2'

const Sidebar = ({ articles }) => {
    
    return (
        <aside>
            {articles.map(article => (
                <div key={article.title} className="article-preview">
                    <H2>{article.title}</H2>
                </div>
            ))}
        </aside>
    )

    /*
    return (
        <aside>
            <H2>Buttons</H2>
            <Button kind="primary">
                Primary
            </Button>
            <Button kind="secondary">
                Secondary
            </Button>
        </aside>
    )
    */
}

export default Sidebar