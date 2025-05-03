import adapter from "@sveltejs/adapter-netlify";

export default {
  kit: {
    adapter: adapterNetlify({ split: false }), // static HTML
    prerender: { default: true },
  },
};
