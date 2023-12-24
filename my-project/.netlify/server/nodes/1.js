

export const index = 1;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/fallbacks/error.svelte.js')).default;
export const imports = ["_app/immutable/nodes/1.a6Ha2zdh.js","_app/immutable/chunks/scheduler.8fdumybZ.js","_app/immutable/chunks/index.9jcULZQe.js","_app/immutable/chunks/singletons.VsZ68uxc.js"];
export const stylesheets = [];
export const fonts = [];
