function getClassNames(classObj: object, classList?: string) {
	let classes = [];

	if (classList) {
		classes.push(...classList.split(" "));
	}

	classes.push(
		...Object.entries(classObj)
			.filter(([key, value]) => value)
			.map(([key, value]) => key)
	);

	return classes.join(" ");
}

export default getClassNames;
