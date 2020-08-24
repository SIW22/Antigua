import React, { Component } from 'react';

class CipherBlock extends Component {
	render() {

		const inputBlock = this.props.letter === ' ' ? <input className="blank-inputs" type="text" disabled={true} maxLength="1"/> : <input className="form-inputs" type="text" placeholder="_" maxLength="1"></input> ;

		return (
			<div className="letter-block">
   			<span className="key-letter">{ this.props.letter === ' ' ? ' ' : this.props.letter }</span>
  			{ inputBlock }
  		</div>
		);
	}
}

export default CipherBlock;