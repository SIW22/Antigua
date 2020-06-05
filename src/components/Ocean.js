import React, { Component } from 'react';
import Compass from 'Compass';
import Scroll from 'Scroll';

class Ocean extends Component {
	render() {
		return (
			<div class="ocean-background">
				 <Compass />
				 <Scroll />
			</div>
		);
	}
}

export default Ocean;
