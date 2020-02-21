import React, {Component} from "react";

class Error extends Component {

    state = {
        isError: false,
        error: ""
    }

    static getDerivedStateFromError(error) {

        return {
            isError: true
        }
    }

    componentDidCatch(error, errorInfo) {

        this.setState({
            isError: true
        })
    }

    render() {
        if (this.state.isError) {
            return <h2> This information cannot be displayed </h2>;
        }
        return this.state.error ? <h2> Cant display </h2> : this.props.children
    }
}

export default Error