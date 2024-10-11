class MyElement {
	key: number;
	value: string;
	label?: string;
	icon: JSX.Element;

	constructor(
		key: number,
		value:string,
		label:string,
		icon:JSX.Element
		) {
		this.key = key;
		this.value = value;
		this.label = label;
		this.icon = icon;
	}
}

export default MyElement