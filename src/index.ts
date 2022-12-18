import { JColor, JColorRandom } from "./color-engine/color";
import { run, route } from "./express-engine/express";
// import { Client } from "./client-engine/client";
import {
  JExit,
  JmultipleResolves,
  JRejectionHandled,
  JUnCaughtException,
  JuncaughtExceptionMonitor,
  JUnhandledRejection,
  JWarning,
} from "./process-engine/process";
import {
  difference,
  sum,
  multi,
  divi,
  mathPow,
  mathRandom,
} from "./maths-engine/maths";

export { JColor, JColorRandom };
export { run, route };
// export { Client };
export {
  JExit,
  JmultipleResolves,
  JRejectionHandled,
  JUnCaughtException,
  JuncaughtExceptionMonitor,
  JUnhandledRejection,
  JWarning,
};
export { difference, sum, multi, divi, mathPow, mathRandom };
