"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.JmultipleResolves = exports.JuncaughtExceptionMonitor = exports.JRejectionHandled = exports.JWarning = exports.JUnCaughtException = exports.JUnhandledRejection = exports.JExit = void 0;
const JExit = () => process.on("exit", (code) => console.log(`\x1B[31mExit !\x1B[34m Le procecuss s'est arrêté avec le code ${code}`));
exports.JExit = JExit;
const JUnhandledRejection = () => {
    process.on("unhandledRejection", (reaseon, promise) => console.log(`\x1B[31m/!/ UnhandledRejection /!/\x1B[34m \nReason : ${reaseon}\nPromise : ${promise}`));
};
exports.JUnhandledRejection = JUnhandledRejection;
const JUnCaughtException = () => {
    process.on("uncaughtException", (err, origin) => {
        console.log(`\x1B[31m/!/ UncaughtException /!/\x1B[34m \nErreur : ${err}\nOrgin : ${origin}`);
    });
};
exports.JUnCaughtException = JUnCaughtException;
const JWarning = () => process.on("warning", (...args) => console.log(...args));
exports.JWarning = JWarning;
const JRejectionHandled = () => {
    process.on("rejectionHandled", () => {
        console.log(`\x1B[31m/!/ RejectionHandled /!/\x1B[34m Erreur !`);
    });
};
exports.JRejectionHandled = JRejectionHandled;
const JuncaughtExceptionMonitor = () => {
    process.on("uncaughtExceptionMonitor", (err, origin) => {
        console.log(`\x1B[31m/!/ UncaughtExceptionMonitor /!/\x1B[34m \nErreur : ${err}\nOrgin : ${origin}`);
    });
};
exports.JuncaughtExceptionMonitor = JuncaughtExceptionMonitor;
const JmultipleResolves = () => {
    process.on("multipleResolves", (err, origin) => {
        console.log(`\x1B[31m/!/ MultipleResolves /!/\x1B[34m \nErreur : ${err}\nOrgin : ${origin}`);
    });
};
exports.JmultipleResolves = JmultipleResolves;
