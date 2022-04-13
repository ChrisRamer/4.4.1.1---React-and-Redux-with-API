import React from 'react';
import { connect } from 'react-redux';
import { getWhiteCards } from '../actions/index';
import cardImg from './../img/white_card.png';

class WhiteCards extends React.Component {
	constructor(props) {
		super(props);
	}

	componentDidMount() {
		//const { dispatch } = this.props;
		//dispatch(getWhiteCards());
	}

	render() {
		/*
		const { error, isLoading, cards } = this.props;
		if (error) {
			return <React.Fragment>Error: {error.message}</React.Fragment>;
		} else if (isLoading) {
			return <React.Fragment>Loading...</React.Fragment>
		*/
		const cards = [
			"White card #1",
			"White card #2",
			"White card #3",
			"White card #4",
			"White card #5",
		]
		return (
			<React.Fragment>
				<div className="cards-grid">
					{cards.map((card, index) =>
						<div key={index} className="white-card" style={{ backgroundImage: `url(${cardImg})` }}>
							<div id="white-card-text">
								{card}
							</div>
						</div>
					)}
				</div>
			</React.Fragment>
		)
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