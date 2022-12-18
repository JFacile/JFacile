"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Client = void 0;
class Client {
    opt;
    constructor(opt) {
        this.opt = opt;
    }
    setOpt(param) {
        this.opt = param;
        if (this.opt === 1) {
            console.log("Coucou");
        }
        else {
            throw new Error(`/!/ Error /!/\nPlease defined a valid client's options`);
        }
    }
}
exports.Client = Client;
