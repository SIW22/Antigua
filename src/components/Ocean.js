import React, { Component } from 'react';
import Compass from './Compass';


class Ocean extends Component {
	render() {
		return (
				<div class="ocean-background">

					<div class="waves">

						<div class="wave1">
							<img src="https://i.imgur.com/p99svDt.png" alt="wave overlay"></img>
						</div>

						<div class="wave2">
							<img src="https://i.imgur.com/2hA86cZ.png" alt="wave overlay"></img>
						</div>

						<div class="wave3">
							<img src="https://i.imgur.com/drAxKxR.png" alt="wave overlay"></img>
						</div>

						<div class="wave4">
							<img src="https://i.imgur.com/drAxKxR.png" alt="wave overlay"></img>
						</div>

					</div>

					<img src="https://i.imgur.com/0FJ8qsU.png" alt="logo" class="logo"></img>
					
					<Compass />
				
				</div>
		);
	}
}

export default Ocean;