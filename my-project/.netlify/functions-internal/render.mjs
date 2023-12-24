import { init } from '../serverless.js';

export const handler = init((() => {
function __memo(fn) {
	let value;
	return () => value ??= (value = fn());
}

return {
	appDir: "_app",
	appPath: "_app",
	assets: new Set(["assets/particles.json","favicon.png"]),
	mimeTypes: {".json":"application/json",".png":"image/png"},
	_: {
		client: {"start":"_app/immutable/entry/start.JN7s_PpU.js","app":"_app/immutable/entry/app.KMEu2Wqk.js","imports":["_app/immutable/entry/start.JN7s_PpU.js","_app/immutable/chunks/scheduler.8fdumybZ.js","_app/immutable/chunks/singletons.hm6-jwKf.js","_app/immutable/entry/app.KMEu2Wqk.js","_app/immutable/chunks/scheduler.8fdumybZ.js","_app/immutable/chunks/index.9jcULZQe.js"],"stylesheets":[],"fonts":[],"uses_env_dynamic_public":false},
		nodes: [
			__memo(() => import('../server/nodes/0.js')),
			__memo(() => import('../server/nodes/1.js')),
			__memo(() => import('../server/nodes/2.js'))
		],
		routes: [
			{
				id: "/",
				pattern: /^\/$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 2 },
				endpoint: null
			}
		],
		matchers: async () => {
			
			return {  };
		}
	}
}
})());
