import React from 'react';
import ReactDOM from 'react-dom';
import ConcurrentModeDemo from './concurrentMode'

class Example extends React.Component {
	constructor(props) {
		super(props)
		this.state = {
			title: '1'
		}
	}

	changeTitle = () => {

		this.setState({
			title: '2'
    })
    this.setState({
			title: '3'
    })
    this.setState({
			title: '4'
		})
	}

	render() {
		return (
			<A value="1"/>
		)
	}
}

function A(props) {
	return (<span>{props.value}</span>)
}


ReactDOM.render(
  	<Example />,
    document.getElementById('root')
);