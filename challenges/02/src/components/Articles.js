import { useState } from "react"
import Content from "./Content"
import Main from "./Main"
import Sidebar from './Sidebar'

const Articles = ({ articles }) => {

    const [currentArticle, setCurrentArticle] = useState(articles[0])

    function articleOnClick(id) {
        setCurrentArticle(articles.filter(article => article.id === id)[0])
    }

    return (
        <Main>
            <Sidebar articles={articles} articleOnClick={articleOnClick}/>
            <Content article={currentArticle}/>
        </Main>
    )
}

export default Articles