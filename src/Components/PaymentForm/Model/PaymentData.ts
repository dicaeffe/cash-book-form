import Transaction from "./Transaction";

class PaymentData {
	transactionDate: Date;
	category: string;
	description: string;
	transactions: Transaction[];

	constructor(
		date: Date | null,
		category?: string | null,
		description?: string | null,
		transactions?: Transaction[] | null) {
		this.transactionDate = date ? date : new Date();
		this.category = category ? category : "spesaCasa";
		this.description = description ? description : "";
		this.transactions = transactions ? transactions : [new Transaction("ccWebank", "out", 0)];
	}

	public toString(): string {
		return "|"
			+ this.transactionDate.toISOString() + "|"
			+ this.category + "|"
			+ this.description + "|"
			+ "|["
			+ this.transactions?.map((value, index) =>
				index + value.toString()
				+ "|"
			)
			+ "]|"
	}

	public clone(): PaymentData {
		return new PaymentData(
			this.transactionDate,
			this.category,
			this.description,
			this.transactions?.map(t => {return t.clone()})
		)
	}

	public getFieldValue(fieldName: string, index: number): number | string | null | undefined {
		switch (fieldName) {
			case "incomingFund":
				return this.transactions![index].incomingFund;
			case "outgoingFund":
				return this.transactions![index].outgoingFund;
			case "amount":
				return this.transactions![index].amount;
		}
		throw new Error('Function not implemented.');
	}

	public setFieldValue(fieldName: string, index: number, newValue: string) {
		switch (fieldName) {
			case "incomingFund":
				this.transactions![index].incomingFund = newValue;
				break;
			case "outgoingFund":
				this.transactions![index].outgoingFund = newValue;
				break;
			case "amount":
				this.transactions![index].amount = Number(newValue);
				break;
		}
	}

	public setNumValue(fieldName: string, index: number, newValue: number) {
		switch (fieldName) {
			case "amount":
				this.transactions![index].amount = newValue;
				break;
		}
	}
}

export default PaymentData