import React, { Component } from 'react';
import prefix from 'react-prefixer';
import Scramble from './Scramble';
import Cipher from './Cipher';

class Scroll extends Component {
	state = {
		contents: []
	}

	createAssembly = () => {
			let assembly = document.createElement("div");
			assembly.className = "cylinder assembly";
			return assembly;
	}

	createFace = (w, h, x, y, z, rx, ry, rz, tsrc, tx, ty) => {
			let face = document.createElement("div");
			face.className = "cylinder";
			face.style.cssText = prefix(
					"background: url(" + tsrc + ") -" + tx + "px " + ty + "px;" +
					"width:" + w + "px;" +
					"height:" + h + "px;" +
					"margin-top: -" + (h / 2) + "px;" +
					"margin-left: -" + (w / 2) + "px;" +
					"transform: translate3d(" + x + "px," + y + "px," + z + "px)" +
					"rotateX(" + rx + "rad) rotateY(" + ry + "rad) rotateY(" + rz + "rad);");
			return face;
	}

	createTube = (dia, height, sides, texture) => {
		let tube = this.createAssembly();
		let sideAngle = (Math.PI / sides) * 2;
		let sideLength = dia * Math.tan(Math.PI/sides);
		for (let c = 0; c < sides; c++) {
				let x = Math.sin(sideAngle * c) * dia / 2;
				let z = Math.cos(sideAngle * c) * dia / 2;
				let ry = Math.atan2(x, z);
				tube.appendChild(this.createFace(
					sideLength + 1, height, x, 0, z, 0, ry, 0, texture, sideLength * c, 0));
		}
		return tube;
	}

	createScroll = () => {
		  let scrollTexture = "https://i.imgur.com/Ui7NosV.png";
			let scroll = this.createTube(100, 500, 20, scrollTexture);
			return scroll;
	}

	appendScroll = () => {
		let scrollBase = document.querySelector('.scroll');
		let newScroll = this.createScroll();
		scrollBase.appendChild(newScroll);
		return newScroll;
	}
	

	componentDidMount() {
		this.appendScroll()
	}

	render() {

		return (
			<>
				<div className="scroll">
					<div className="image">
						<img src="https://i.imgur.com/k5nyQRD.png" className="scroll-2D" alt="scroll" />
						<Scramble />
						{/* <Cipher /> */}
					</div>
				</div>
			</>
		);
	}

}

export default Scroll;