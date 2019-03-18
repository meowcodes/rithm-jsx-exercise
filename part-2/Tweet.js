class Tweet extends React.Component {
    render() {
        const { username, name, message, date } = this.props;
        const nameStyle = {
            color: 'blue',
            backgroundColor: 'yellow'
        }

        return (
            <div>
                <div style={ nameStyle }> { username }: { name } </div>
                <small> { date } </small>
                <div> { message } </div>
            </div>
        )
    }
}