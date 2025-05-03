import adapter from "@sveltejs/adapter-netlify";

export default {
  kit: {
    adapter: adapter({ split: false }), // static HTML
    prerender: { default: true },
  },
};
