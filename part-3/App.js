class App extends React.Component {
    render() {
        return (
            <div>
                <Person name="whiskey" age={5} hobbies={ ["eating", "sleeping", "being cute"]} />
                <Person name="spike" age={20} hobbies={ ["sleeping", "playing with whiskey", "being cute"]} />
                <Person name="wonder woman" age={2000} hobbies={ ["kicking ass", "flying", "being cute"]} />
            </div>
        )
    }
}