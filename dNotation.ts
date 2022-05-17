class DNotation extends ADNotations.Notation {
  get name() {
    return "Simple";
  }

  formatDecimal(value, places) {
    return `Mantissa: ${value.mantissa.toFixed(places)},d,  Exponent: ${value.exponent}`;
  }
}
