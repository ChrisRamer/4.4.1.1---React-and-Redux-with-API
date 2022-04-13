import React from 'react';
import { connect } from 'react-redux';
import { getWhiteCards } from '../actions/index';

class WhiteCards extends React.Component {
	constructor(props) {
		super(props);
	}

	componentDidMount() {
		const { dispatch } = this.props;
		dispatch(getWhiteCards());
	}

	render() {
		const { error, isLoading, cards } = this.props;
		if (error) {
			return <React.Fragment>Error: {error.message}</React.Fragment>;
		} else if (isLoading) {
			return <React.Fragment>Loading...</React.Fragment>
		} else {
			return (
				<React.Fragment>
					<h1>White Cards Success!</h1>
					{cards.map((card, index) =>
						<li key={index}>
							<p>{card.text}</p>
						</li>
					)}
				</React.Fragment>
			)
		}
	}
}

const mapStateToProps = state => {
	return {
		cards: state.cards,
		isLoading: state.isLoading,
		error: state.error
	}
}

export default connect(mapStateToProps)(WhiteCards);