function pluck<T, K extends keyof T>(array: T[], key: K): T[K][] {
	return array.map((obj) => obj[key]);
}

export default pluck;
