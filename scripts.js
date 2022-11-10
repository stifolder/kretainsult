const adjectives = [];
		const nouns = [];

		function getRandomInt(max) {
			return Math.floor(Math.random() * max);
		}

		function generate() {
			let generated = "";
			let numOfAdjectives = getRandomInt(3) + 1;
			for (let i = 0; i < numOfAdjectives; i++) {
				let adjective = adjectives[getRandomInt(adjectives.length)];
				if (i > 0) {
					adjective = adjective.toLowerCase();
				}
				generated += adjective + ", ";
			}
			generated = generated.substring(0, generated.length - 2) + " ";
			generated += nouns[getRandomInt(nouns.length)].toLowerCase() + "!"
			document.getElementById("generated").innerHTML = generated;
		}

		var xhttp = new XMLHttpRequest();
		xhttp.onreadystatechange = function () {
			if (this.readyState == 4 && this.status == 200) {
				var xmlDoc = xhttp.responseXML;
				words = xmlDoc.getElementsByTagName("Word");
				for (let word of words) {
					let type = word.getAttribute("type");

					if (type == "m") {
						adjectives.push(word.innerHTML);
					}

					if (type == "f") {
						nouns.push(word.innerHTML);
					}
				}
				generate();
			}
		}
		
		xhttp.open("GET", "piszkosszavak.xml", true);
		xhttp.send();