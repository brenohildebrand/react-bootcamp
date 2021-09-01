import React, { Fragment } from 'react'
import Header from './components/Header'
import Menu from './components/Menu'
import Main from './components/Main'
import Footer from './components/Footer'

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