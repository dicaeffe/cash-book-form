class MyPreConfig {
  transactionDate: Date;
  category?: string | null;
  description?: string | null;
  outgoingFund?: string | null;
  incomingFund?: string | null;
  amount?: number | null;

  constructor(
    date: Date | null,
    category?: string | null,
    description?: string | null,
    outgoingFund?: string | null,
    incomingFund?: string | null,
    amount?: number | null
  ) {
    this.transactionDate = date ? date : new Date();
    this.category = category;
    this.description = description;
    this.outgoingFund = outgoingFund;
    this.incomingFund = incomingFund;
    this.amount = amount;
  }

  public update(formData: MyPreConfig) {
    formData.transactionDate = this.transactionDate
      ? this.transactionDate
      : formData.transactionDate;

    if (this.category) {
      formData.category = this.category;
    }
    if (this.description) {
      formData.description = this.description;
    }
    if (this.outgoingFund) {
      formData.outgoingFund = this.outgoingFund;
    }
    if (this.incomingFund) {
      formData.incomingFund = this.incomingFund;
    }
    if (this.amount) {
      formData.amount = this.amount;
    }
  }

  public toString(): string {
    return (
      "\n" +
      this.transactionDate.toISOString() +
      "\n" +
      this.category +
      "\n" +
      this.description +
      "\n" +
      "---" +
      "\n" +
      this.outgoingFund +
      " ➡️ " +
      this.incomingFund +
      "\n" +
      this.amount +
      "€\n"
    );
  }
}

export default MyPreConfig;
