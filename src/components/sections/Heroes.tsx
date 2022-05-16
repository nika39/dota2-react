import React from "react";
import Category from "./categories/Category";

function Heroes() {
	return (
		<>
			<Category title="Strength" category={1} marginTop={false} />
			<Category title="Agility" category={2} marginTop={true} />
			<Category title="Intelligence" category={3} marginTop={true} />
		</>
	);
}

export default React.memo(Heroes);
