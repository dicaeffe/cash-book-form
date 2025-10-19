import PaymentData from "./PaymentData";

class BERequests {
  bodies: BEBody[];

  constructor(paymentData: PaymentData) {
    this.bodies = [];
    paymentData.transactions.forEach((t, index) => {
      this.bodies.push(
        new BEBody(
          paymentData.transactions.length > 1 ? index : null,
          paymentData.transactionDate,
          paymentData.category,
          paymentData.description,
          t.outgoingFund,
          t.incomingFund,
          t.amount
        )
      );
    });
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
    index: number | null,
    transactionDate: Date,
    category: string,
    description: string,
    outgoingFund?: string | null,
    incomingFund?: string | null,
    amount?: number | null,
    causal?: string
  ) {
    this.transactionDate = transactionDate;
    this.category = category;
    this.causal = causal ? causal : "";
    this.description = description + this.part(index);
    this.outgoingFund = outgoingFund ? outgoingFund : "";
    this.incomingFund = incomingFund ? incomingFund : "";
    this.amount = amount ? amount : 0;
  }

  part(index: number | null): string {
    return index ? " [parte " + (index + 1) + "]" : "";
  }
}

export default BERequests;
