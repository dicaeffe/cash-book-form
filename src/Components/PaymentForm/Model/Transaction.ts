class Transaction {
	outgoingFund?: string | null;
	incomingFund?: string | null;
	amount?: number | null;

	constructor(
		outgoingFund?: string | null,
		incomingFund?: string | null,
		amount?: number | null) {
		this.outgoingFund = outgoingFund;
		this.incomingFund = incomingFund;
		this.amount = amount;
	}

	public toString(): string {
		return "|"
		+ this.outgoingFund + " ➡️ " + this.incomingFund + "|"
		+ this.amount + "€|"
	}

	public clone(): Transaction {
		return new Transaction(
			this.outgoingFund,
			this.incomingFund,
			this.amount
		)
	}
}

export default Transaction