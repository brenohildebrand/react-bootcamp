import React from 'react'

const App = () => {
    return (
        <div>
            {function() {
                const message = (
                    <h1 key="message">
                        Hello World!
                    </h1>
                )

                const secondMessage = (
                    <h2 key="secondMessage">
                        I'm a function, and I am working!
                    </h2>
                )

                return [message, secondMessage]
            }()}
        </div>
    )
}

export default App