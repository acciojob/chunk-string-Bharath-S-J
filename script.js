function chunkString(str, size) {
	// Convert size to number
	size = parseInt(size);

	// Handle null or invalid input
	if (!str || typeof str !== "string" || isNaN(size) || size <= 0) {
		return [];
	}

	const res = [];
	for (let i = 0; i < str.length; i += size) {
		res.push(str.slice(i, i + size));
	}
	return res;
}

// Do not change the code below
// const str = prompt("Enter String.");
// const size = prompt("Enter Chunk Size.");
// alert(chunkString(str, size));
