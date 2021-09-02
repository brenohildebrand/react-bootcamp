import React from 'react'
import Content from './Content'
import Sidebar from './Sidebar'

const Main = ({ articles }) => {
    return (
        <main>
            <Sidebar articles={articles}/>
            <Content articles={articles}/>
        </main>
    )
}

export default Main