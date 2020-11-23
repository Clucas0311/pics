import React from 'react';

// Using class base components because you have gather user input
// You need to use state
class SearchBar extends React.Component {
	// Whenever someone calls the input this method will be called
	// event object-->  onChange Called everytime someone changes text in the input
	// initialize state set to properties
	// Controlled Components - storing items in state property and not the DOM
	state = { term: '' };

	// Arrow function allows the value of this to always equal the instance of search bar
	onFormSubmit = (event) => {
		// prevent the browser from refreshing itself
		event.preventDefault();

		this.props.onSubmit(this.state.term);
	};

	render() {
		return (
			<div className="ui segment">
				{/* Prevents the form from automatically submiting  */}
				<form onSubmit={this.onFormSubmit} className="ui form">
					<div className="field">
						<label>Image Search</label>
						{/* // When we pass a method to a prop we don't put parens -- we only want the ref */}
						{/* Whenever someone types something in into the input callback is invoked */}
						<input
							type="text"
							// whenever the component rerenders it will store the new value
							// assign current value to value prop
							value={this.state.term}
							// Event target is the text the user types
							// onChange is called everytime the user types something
							// the term value will always be updated as user types
							// inside the callback we take the event object
							// update the state 'term' new value
							// everytime we call set state the component rerenders itself
							// render gets called again when the user types something
							onChange={(e) => this.setState({ term: e.target.value })}
						/>
					</div>
				</form>
			</div>
		);
	}
}

// Show in app component
export default SearchBar;
