import React, { Fragment } from 'react'
import Header from './components/header'
import Menu from './components/menu'
import Main from './components/main'
import Footer from './components/footer'

const App = () => {
    return (
        <Fragment>
            <Header/>
            <Menu/>
            <Main/>
            <Footer/>
        </Fragment>
    )
}

export default App