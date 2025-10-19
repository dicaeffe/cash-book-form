class KeyVal {
  key: string;
  value: string;
  count: number = 0;

  constructor(
    key?: string | null,
    value?: string | null,
    count?: number | null
  ) {
    this.key = key ? key : "appunti";
    this.value = value ? value : "";
    this.count = count ? count : 0;
  }

  public toString(): string {
    return "|" + this.key + "|" + this.value + "|";
  }

  public clone(): KeyVal {
    return new KeyVal(this.key, this.value);
  }
}

export default KeyVal;
