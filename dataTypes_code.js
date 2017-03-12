function dataTypes(val){
	var output;

	switch (typeof(val)){
		case 'boolean':
			output = val;
			break;

		case 'number':
			if (val > 100){
				output = "more than 100";
			}
			else if (val < 100){
				output = "less than 100";
			}
			else{
				output = 'equal to 100';
			}
			break;

		case 'string':
			output = val.length;
			break;

		case 'undefined':
			output = "no value";
			break;

		case 'function':
			output = val(true);
			break;

	}

	if (Array.isArray(val)){
		if (val.length>=3){
			output = val[2];
		}
		else{
			return undefined;
		}
	} 

	if (val == null){
		output = "no value";
	}

	/*if (val == callback){
		output = "called callback";
	}*/

	return output;
	
}
