function digitPerkalianMinimum(angka) {
	// you can only write your code here!
	//buat perkalian minimun yg sama
	var tampung = [];
	for (var i = 1; i < angka; i++) {
		for (var j = 1; j < angka; j++) {
			if (i * j === angka) {
				tampung.push(String(i).length + String(j).length);
			}
		}
	}
	//console.log(tampung);

	//buat modus utk duplicate nilai array
	var tampungUniques = [];
	for (var j = 0; j < tampung.length; j++) {
		var tampungPosition = tampungUniques.indexOf(tampung[j]);
		if (tampungPosition === -1) {
			tampungUniques.push(tampung[j]);
		}
	}
	//console.log(tampungUniques);

	//membandingkan nilai array
	if (tampungUniques[0] > tampungUniques[1]) {
		return tampungUniques[1];
	} else if (tampungUniques[0]) {
		return tampungUniques[0];
	} else {
		return parseInt(String(angka).length) + 1;
	}
}

// TEST CASES
console.log(digitPerkalianMinimum(24)); // 2
console.log(digitPerkalianMinimum(90)); // 3
console.log(digitPerkalianMinimum(20)); // 2
console.log(digitPerkalianMinimum(179)); // 4
console.log(digitPerkalianMinimum(1)); // 2
