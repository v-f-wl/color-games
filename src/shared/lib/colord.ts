import { colord, extend } from "colord";
import labPlugin from "colord/plugins/lab";
import a11yPlugin from "colord/plugins/a11y";

extend([labPlugin, a11yPlugin]);

export { colord };