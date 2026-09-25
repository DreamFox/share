export default {
  async fetch(request, env) {
    // Static assets are served by the assets binding before this runs.
    // Keep a tiny fallback for non-asset requests.
    return new Response("Not found", { status: 404 });
  },
};
