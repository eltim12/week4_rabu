function urutkanAbjad(str) {
	// you can only write your code here!
	//buat looping untuk split ('')
	var tampungWords = [];
	for (var i = 0; i < str.length; i++) {
		for (var j = 0; j < str[i].length; j++) {
			if (str[i] !== str[j]) {
				tampungWords.push(str[i][j]);
			} else {
				tampungWords.push(str[i]);
			}
		}
	}

	//buat sort untuk looping tersebut
	var isWords = 0;
	for (var x = 0; x < tampungWords.length; x++) {
		for (var y = 0; y < tampungWords.length; y++) {
			if (tampungWords[y] > tampungWords[y + 1]) {
				isWords = tampungWords[y];
				tampungWords[y] = tampungWords[y + 1];
				tampungWords[y + 1] = isWords;
			}
		}
	}
	//console.log(tampungWords.toString());

	//cari hasil penambahan string untuk mendapatkan hasil akhir
	var hasilWords = '';
	for (var k = 0; k < tampungWords.length; k++) {
		hasilWords += tampungWords[k];
	}
	return hasilWords;
}

// TEST CASES
console.log(urutkanAbjad('hello')); // 'ehllo'
console.log(urutkanAbjad('truncate')); // 'acenrttu'
console.log(urutkanAbjad('developer')); // 'deeeloprv'
console.log(urutkanAbjad('software')); // 'aeforstw'
console.log(urutkanAbjad('aegis')); // 'aegis