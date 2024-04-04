class MyProps<T> {
	defaultValue: T;
	id?: string;
	label?: string;
	helperText?: string;
	isError?: boolean;
	type?: string;
	InputProps?: any;
	onChange: (value:T) => void;

	constructor(defaultValue:T, id: string, label:string, helperText:string, isError: boolean, type:string, InputProps: JSX.Element, onChange:() => void) {
		this.defaultValue = defaultValue;
		this.id = id;
		this.label = label;
		this.helperText = helperText;
		this.isError = isError;
		this.type = type;
		this.InputProps = InputProps;
		this.onChange = onChange;
	}
}

export default MyProps