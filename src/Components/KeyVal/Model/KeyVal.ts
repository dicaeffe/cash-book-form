class KeyVal {
  key: string;
  value: string;

  constructor(key?: string | null, value?: string | null) {
    this.key = key ? key : "appunti";
    this.value = value ? value : "";
  }

  public toString(): string {
    return "|" + this.key + "|" + this.value + "|";
  }

  public clone(): KeyVal {
    return new KeyVal(this.key, this.value);
  }
}

export default KeyVal;
