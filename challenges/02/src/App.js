import React, { Fragment } from 'react'
import Header from './components/Header'
import Menu from './components/Menu'
import Main from './components/Main'
import Footer from './components/Footer'

const articles =
[
    {
        id: 1,
        title: 'How to learn C++',
        content: (
            <>
                <p>Watch 
                    <a href="https://www.youtube.com/channel/UCQ-W1KE9EYfdxhL6S4twUNw">
                        The Cherno
                    </a>
                    .
                </p> 
                <p>Practice, practice, practice.</p>
                <p>See real code on GitHub.</p>
            </>
        )
    },
    {
        id: 42,
        title: 'Watch out! This is the meaning of everything!',
        content: (
            <>
                <p>Once, someone asked: "What's the meaning of life?".</p>
                <p>And then, here comes the answer...</p>
                <p><b>42</b></p>
            </>
        )
    },
    {
        id: 33,
        title: 'The history of JavaScript',
        content: (
            <>
                <p>
                    Brendan Eich, a Netscape Communications Corporation 
                    programmer, created JavaScript in September 1995. 
                </p>
                <p>
                    It took Eich only 10 days to develop the scripting language,
                    then known as Mocha.
                </p>
                <p>
                    Let's step back to look at this complex JavaScript history.
                </p>
                <p>
                    <a href="https://checkmarx.com/blog/javascript-history-infographic/">
                        Keep Reading!
                    </a>
                </p>
            </>
        )
    },
    {
        id: 113,
        title: 'LoremIpsum: Together!',
        content: (
            <>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                <p>
                    Vestibulum auctor interdum nisi, eu ultricies mi pharetra 
                    sed.
                </p>
                <p>
                    In euismod mollis mi eget consectetur. Curabitur lorem enim, 
                    dapibus vel accumsan nec, fermentum et est. 
                </p>
                <p>
                    Sed consectetur est vitae nunc pretium, id pharetra ex 
                    fringilla.
                </p>
            </>
        )
    },
    {
        id: 114,
        title: 'Ran out of ideas. So... cats!',
        content: (
            <>
                <p>I am Mr. Sandman!</p>
                <a href="https://www.youtube.com/watch?v=3TdPBB9Z_cs">
                    Mr. Sandman!
                </a>
            </>
        )
    }
]

const App = () => {
    return (
        <Fragment>
            <Header/>
            <Menu/>
            <Main articles={articles}/>
            <Footer/>
        </Fragment>
    )
}

export default App