class App extends React.Component {
    render() {
        return (
            <div>
                <Tweet username='whiskey' name='Whiskey' message='Please give me treats' date='everyday' />
                <Tweet username='spike' name='Spike' message='Please give me treats' date='everyday' />
                <Tweet username='whiskey' name='Whiskey' message='Please give me more treats' date='every other Friday' />
            </div>
        )
    }
}