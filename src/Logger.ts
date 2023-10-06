export default class Logger {
  private readonly update: Function;

  constructor(update: Function) {
    this.update = update;
  }

  private stringfy(obj: any) {
    if (obj instanceof Date) {
      return obj.toString();
    }

    switch (typeof obj) {
      case "string":
        return obj;
      case "bigint":
      case "boolean":
      case "undefined":
      case "number":
        return String(obj);
      default:
        try {
          return JSON.stringify(obj);
        } catch (error) {
          return String(obj);
        }
    }
  }

  log(...args) {
    if (!args || !args.length) {
      return;
    }

    let result: string;

    if (args.length === 1) {
      result = args[0];
    } else {
      result = args.map((arg) => this.stringfy(arg)).join(" ");
    }

    this.update(result);
  }
}
