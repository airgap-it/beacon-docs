export default class Logger {
  private readonly update: Function;

  constructor(update: Function) {
    this.update = update;
  }

  log(...args) {
    if (!args || !args.length) {
      return;
    }

    let result: string;

    if (args.length === 1) {
      result = args[0];
    } else {
      result = args.map((arg) => String(arg)).join(" ");
    }

    this.update(result);
  }
}
