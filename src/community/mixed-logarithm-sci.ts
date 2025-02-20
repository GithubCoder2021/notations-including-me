import Decimal from "break_infinity.js";
import { Notation } from "../notation";
import { ScientificNotation } from "../scientific";

const scientific = new ScientificNotation();

export class MixedLogarithmSciNotation extends Notation {
  public get name(): string {
    return "Mixed Logarithm (Sci)";
  }

  public formatDecimal(value: Decimal, places: number, placesExponent: number): string {
    if (value.exponent < 33) {
      return scientific.formatDecimal(value, places, placesExponent);
    }
    // This doesn't use a default precision of at least 1 on small numbers
    // (since for sufficiently small numbers it uses scientific).
    return `e${this.formatExponent(value.log10(), places, (n, _) => n.toString(), placesExponent)}`;
  }
}
