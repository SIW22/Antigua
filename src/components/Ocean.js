import React, { Component } from 'react';

class Ocean extends Component {
	render() {
		return (
				<div className="ocean-background">

					<div className="waves">

						<div className="wave1">
							<img src="https://i.imgur.com/p99svDt.png" alt="wave overlay"></img>
						</div>

						<div className="wave2">
							<img src="https://i.imgur.com/2hA86cZ.png" alt="wave overlay"></img>
						</div>

						<div className="wave3">
							<img src="https://i.imgur.com/drAxKxR.png" alt="wave overlay"></img>
						</div>

						<div className="wave4">
							<img src="https://i.imgur.com/drAxKxR.png" alt="wave overlay"></img>
						</div>

					</div>

					<img src="https://i.imgur.com/0FJ8qsU.png" alt="logo" className="logo"></img>
					
					
				</div>
		);
	}
}

export default Ocean;