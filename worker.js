const API_HOST = "https://api005.dnshe.com";

export default {
  async fetch(request, env, ctx) {
    try {
      const res = await fetch(`${API_HOST}/index.php?m=domain_hub&endpoint=subdomains&action=list`, {
        headers: {
          "X-API-Key": env.API_KEY,
          "X-API-Secret": env.API_SECRET,
          "User-Agent": "Mozilla/5.0"
        }
      });

      const text = await res.text();
      return new Response(text, {
        headers: { "Content-Type": "application/json; charset=utf-8" }
      });
    } catch (e) {
      return new Response(e.message, { status: 500 });
    }
  }
};
