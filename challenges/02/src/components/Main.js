import React, { useState } from 'react'
import Content from './Content'
import Sidebar from './Sidebar'

const Main = ({ articles }) => {

    const [currentArticle, setCurrentArticle] = useState(articles[0])

    function articleOnClick(id) {
        setCurrentArticle(articles.filter(article => article.id === id)[0])
    }

    return (
        <main>
            <Sidebar articles={articles} articleOnClick={articleOnClick}/>
            <Content currentArticle={currentArticle}/>
        </main>
    )
}

export default Main