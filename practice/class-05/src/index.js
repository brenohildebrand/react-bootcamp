import ReactDOM from 'react-dom'

function Title() {
    return (
        <div>
            <h1>Hello Brainn!</h1>
            <span>This is the best react bootcamp ever!</span>
        </div>
    )
}

ReactDOM.render(<Title />, document.querySelector('#root'))