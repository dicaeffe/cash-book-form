import PaymentData from "./PaymentData";

class BERequests {
	bodies: BEBody[];

	constructor(paymentData: PaymentData) {
		this.bodies = []
		paymentData.transactions.forEach((t, index) => {
			this.bodies.push(
				new BEBody(
					index,
					paymentData.transactionDate,
					paymentData.category,
					paymentData.description,
					t.outgoingFund,
					t.incomingFund,
					t.amount
				)
			)
		})
	}
}
class BEBody {
	transactionDate: Date;
	category: string;
	causal: string;
	description: string;
	outgoingFund?: string;
	incomingFund?: string;
	amount?: number;

	constructor(
		index: number,
		transactionDate: Date,
		category: string,
		description: string,
		outgoingFund?: string | null,
		incomingFund?: string | null,
		amount?: number | null,
		causal?: string) {

		this.transactionDate = transactionDate;
		this.category = category;
		this.causal = causal ? causal : "";
		this.description = description + " [parte "+ (index+1) +"]";
		this.outgoingFund = outgoingFund ? outgoingFund : "";
		this.incomingFund = incomingFund ? incomingFund : "";
		this.amount = amount ? amount : 0;
	}
}

export default BERequests