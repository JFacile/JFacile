export class Client {
  opt: number;
  constructor(opt: number) {
    this.opt = opt;
  }

  setOpt(param: number) {
    this.opt = param;

    if (this.opt === 1) {
      console.log("Coucou");
    } else {
      throw new Error(`/!/ Error /!/\nPlease defined a valid client's options`);
    }
  }
}
