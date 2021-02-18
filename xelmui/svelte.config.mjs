const autoProcess = require("svelte-preprocess");

const preprocess = autoProcess({ postcss: true });

export { preprocess };