// Hudson Schumaker

class Hello extends React.Component {
  constructor(props) {
    super(props);
    this.state = {user: 'Mario'}
  }
  render() {
    return <h1>Hello World {this.state.user}</h1>;
  }
}  
