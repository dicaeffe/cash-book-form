class MyPreConfig {
	date: Date;
	category?: string | null;
	description?: string | null;
	outgoingFund?: string | null;
	incomingFund?: string | null;
	amount?: string | null;

	constructor(
			date: Date | null,
			category?: string | null,
			description?: string | null,
			outgoingFund?: string | null,
			incomingFund?: string | null,
			amount?: string | null) {
		this.date = date ? date : new Date();
		this.category = category;
		this.description = description;
		this.outgoingFund = outgoingFund;
		this.incomingFund = incomingFund;
		this.amount = amount;
	}

	public update(formData: MyPreConfig) {
		formData.date = this.date ? this.date : formData.date

		if (this.category) {
			formData.category = this.category
		}
		if (this.description) {
			formData.description = this.description
		}
		if (this.outgoingFund) {
			formData.outgoingFund = this.outgoingFund
		}
		if (this.description) {
			formData.incomingFund = this.incomingFund
		}
		if (this.description) {
			formData.amount = this.amount
		}
	}

	public toString():string {
		return "\n"
		+ this.date.toISOString() + "\n"
		+ this.category + "\n"
		+ this.description + "\n"
		+ "---" + "\n"
		+ this.outgoingFund + " ➡️ " + this.incomingFund + "\n"
		+ this.amount + "€\n"
	}
}

export default MyPreConfig