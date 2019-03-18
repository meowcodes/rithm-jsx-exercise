class Person extends React.Component {
    render() {
        const { name, age, hobbies } = this.props;

        return (
            <div>
                <p>Learn some information about this person</p>
                <h3>{ age >= 18 ? "please go vote!" : "you must be 18" }</h3>
                <p>{ name.length > 7 ? name.substring(0,5) : name }</p>
                <ul>
                    { hobbies.map( h => <li>{h}</li>) }
                </ul>
            </div>
        );
    }
}