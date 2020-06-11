import React, { Component } from 'react';

class Scroll extends Component {
	state = {
		puzzle: []
	}

	let scrollTexture = "https://i.imgur.com/2MSbsHW.png";

	createAssembly = () => {
			let assembly = document.createElement("div");
			assembly.className = "cylinder assembly";
			return assembly;
	}

	createFace = (w, h, x, y, z, rx, ry, rz, tsrc, tx, ty) => {
			let face = document.createElement("div");
			face.className = "cylinder";
			face.style.cssText = PrefixFree.prefixCSS(
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
			let tube = createAssembly();
			let sideAngle = (Math.PI / sides) * 2;
			let sideLength = dia * Math.tan(Math.PI/sides);
			for (let c = 0; c < sides; c++) {
					let x = Math.sin(sideAngle * c) * dia / 2;
					let z = Math.cos(sideAngle * c) * dia / 2;
					let ry = Math.atan2(x, z);
					tube.appendChild(createFace(
						sideLength + 1, height, x, 0, z, 0, ry, 0, texture, sideLength * c, 0));
			}
			return tube;
	}

	createScroll = () => {
			let barrel = createTube(100, 500, 20, scrollTexture);
			return barrel;
	}

	let scrollBase = document.querySelector('.scroll');

	scrollBase.appendChild(createScroll());


	render() {
		return (
			<div class="scroll reveal">
				<div class="image">
					<img src="https://i.imgur.com/7fFgXVs.png" class="scroll-2D" />
				</div>
			</div>
		);
	}

}

export default Scroll;