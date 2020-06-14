import React, { Component } from 'react';

class CipherBlock extends Component {
	render() {
		return (
			<div>
   			<span className="key-letter">A</span>
  			<input className="form-inputs" type="text" placeholder="_" maxlength="1"></input>
  		</div>
		);
	}
}

export default CipherBlock;