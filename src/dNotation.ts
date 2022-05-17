  import { Notation } from "./notation";
import Decimal from "break_infinity.js/break_infinity";
import { fixMantissaOverflow } from "./utils";

export class DNotation extends Notation {
  public get name(): string {
    return "DNotation";
  }

  public formatDecimal(value: Decimal, places: number): string {
    const fixedValue = fixMantissaOverflow(value, places, 10, 1);
    const mantissa = fixedValue.mantissa.toFixed(places);
    const exponent = this.formatExponent(fixedValue.exponent);
    return `[${mantissa}]d(${exponent})`;
  }
