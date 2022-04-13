import React from 'react';
import { connect } from 'react-redux';
import { getBlackCard }  from '../actions/index';

class BlackCard extends React.Component {
	constructor(props) {
		super(props);
	}

	componentDidMount() {
		const { dispatch } = this.props;
		dispatch(getBlackCard());
	}

	render() {
		const { error, isLoading, card } = this.props;
		if (error) {
			return <React.Fragment>Error: {error.message}</React.Fragment>;
		} else if (isLoading) {
			return <React.Fragment>Loading...</React.Fragment>
		} else {
			return (
				<React.Fragment>
					<h1>Black Card Success!</h1>
					<p>{card.text}</p>
				</React.Fragment>
			)
		}
	}
}

const mapStateToProps = state => {
	return {
		card: state.card,
		isLoading: state.isLoading,
		error: state.error
	}
}

export default connect(mapStateToProps)(BlackCard);