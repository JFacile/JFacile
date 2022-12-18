export const JExit = () =>
  process.on("exit", (code) =>
    console.log(
      `\x1B[31mExit !\x1B[34m Le procecuss s'est arrêté avec le code ${code}`
    )
  );

export const JUnhandledRejection = () => {
  process.on("unhandledRejection", (reaseon, promise) =>
    console.log(
      `\x1B[31m/!/ UnhandledRejection /!/\x1B[34m \nReason : ${reaseon}\nPromise : ${promise}`
    )
  );
};

export const JUnCaughtException = () => {
  process.on("uncaughtException", (err, origin) => {
    console.log(
      `\x1B[31m/!/ UncaughtException /!/\x1B[34m \nErreur : ${err}\nOrgin : ${origin}`
    );
  });
};

export const JWarning = () =>
  process.on("warning", (...args) => console.log(...args));

export const JRejectionHandled = () => {
  process.on("rejectionHandled", () => {
    console.log(`\x1B[31m/!/ RejectionHandled /!/\x1B[34m Erreur !`);
  });
};

export const JuncaughtExceptionMonitor = () => {
  process.on("uncaughtExceptionMonitor", (err, origin) => {
    console.log(
      `\x1B[31m/!/ UncaughtExceptionMonitor /!/\x1B[34m \nErreur : ${err}\nOrgin : ${origin}`
    );
  });
};

export const JmultipleResolves = () => {
  process.on("multipleResolves", (err, origin) => {
    console.log(
      `\x1B[31m/!/ MultipleResolves /!/\x1B[34m \nErreur : ${err}\nOrgin : ${origin}`
    );
  });
};
