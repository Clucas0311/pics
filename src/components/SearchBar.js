import React from 'react';

class SearchBar extends React.Component {
	// Whenever someone calls the input this method will be called
	// event object-->  onChange Called everytime someone changes text in the input
	onInputChange(event) {
		console.log(event.target.value);
	}

	render() {
		return (
			<div className="ui segment">
				<form className="ui form">
					<div className="field">
						<label>Image Search</label>
						{/* // When we pass a method to a prop we don't put parens -- we only want the ref */}
						<input type="text" onChange={this.onInputChange} />
					</div>
				</form>
			</div>
		);
	}
}

export default SearchBar;
