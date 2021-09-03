import React from 'react'
import H2 from './H2'

const Sidebar = ({ articles, articleOnClick }) => {

    return (
        <aside>
            {articles.map(article => (
                <div 
                    key={article.title} 
                    className="article-preview" 
                    onClick={() => articleOnClick(article.id)}
                >
                    <H2>{article.title}</H2>
                </div>
            ))}
        </aside>
    )
}

export default Sidebar