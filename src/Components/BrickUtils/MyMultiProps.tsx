import MyElement from "./MyElement";

class MyMultiProps<T> {
	defaultValue: T;
	id?: string;
	label?: string;
	helperText?: string;
	isError?: boolean;
	type?: string;
	InputProps?: any;
	values: MyElement[];
	onChange: (a:T) => void;

	constructor(defaultValue:T, id: string, label:string, helperText:string, isError: boolean, type:string, InputProps: JSX.Element, values: MyElement[], onChange:() => void) {
		this.defaultValue = defaultValue;
		this.id = id;
		this.label = label;
		this.helperText = helperText;
		this.isError = isError;
		this.type = type;
		this.InputProps = InputProps;
		this.values = values;
		this.onChange = onChange;
	}
}

export default MyMultiProps