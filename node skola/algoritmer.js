function cpitalizeTitle(title) {
	// lista med undantag
	const exceptions = ["of", "the", "in", "and", "to"]

	// dela upp orden och kolla varje ord
	return title
		.split(" ") //dela sträng i ord
		.map((word, index) => {
			// om ordet är i listan med undantag och inte första ordet
			if (exceptions.includes(word.toLowerCase()) && index !== 0) {
				return word.toLowerCase() //gör ordet till små bokstäver
			} else {
				// gör första bokstaven stor och resten liten
				return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase()
			}
		})
		.join(" ") // sätt ihop orden till en ny sträng
}

console.log(cpitalizeTitle("the lord of the rings"))

// båda orden måste bestå av exakt samma bokstäver
// allt utom alfabetiska tecken ignoreras (mellanslag,komma, etc)
// Ex 1: "Meat" "Team"
function anagram(word1, word2) {
	// resna orden
	function cleanWord(word) {
		return word
			.toLowerCase() //gör till små bokstäver
			.replace(/[^a-z]/g, "") //ta bort alla icke-alfabetiska tecken
			.split("") //dela strängen till en array av bokstäver
			.sort() // sortera bokstäverna
			.join("") // sätt ihop bokstäverna igen till sträng
	}

	// jämför
	return cleanWord(word1) === cleanWord(word2)
}

console.log(anagram("meat", "team"))
console.log(anagram("hello,world", "Hello World"))
console.log(anagram("Listen", "Silent"))
console.log(anagram("Test", "Toast"))
