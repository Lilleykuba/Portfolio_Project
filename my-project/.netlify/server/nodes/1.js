

export const index = 1;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/fallbacks/error.svelte.js')).default;
export const imports = ["_app/immutable/nodes/1.eG4oCZwo.js","_app/immutable/chunks/scheduler.8fdumybZ.js","_app/immutable/chunks/index.9jcULZQe.js","_app/immutable/chunks/singletons.hm6-jwKf.js"];
export const stylesheets = [];
export const fonts = [];
