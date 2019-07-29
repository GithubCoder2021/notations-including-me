import { Notation } from "./notation";
import Decimal from "break_infinity.js/break_infinity";

// https://en.wikipedia.org/wiki/Lion-Eating_Poet_in_the_Stone_Den
const SHI = "世使侍勢十史嗜士始室實屍市恃拭拾施是時氏濕獅矢石視試詩誓識逝適釋食";

export class ShiNotation extends Notation {
  public get name(): string {
    return "Shi";
  }

  public get infinite(): string {
    return this.shi(Decimal.NUMBER_MAX_VALUE);
  }

  public formatUnder1000(value: number): string {
    return this.shi(new Decimal(value));
  }

  public formatDecimal(value: Decimal): string {
    return this.shi(value);
  }

  private getShiCharacter(x: number): string {
    return SHI[Math.floor(x) % SHI.length];
  }

  private shi(value: Decimal): string {
    if (value.lt(0)) {
      return `-${this.shi(value.negate())}`;
    }
    const scaled = Math.pow(value.plus(1).log10() * 1000, 0.08);
    let shi = "";
    for (let i = 0; i < 3; i++) {
      shi += this.getShiCharacter(scaled * Math.pow(SHI.length, i));
    }
    return shi;
  }
}
