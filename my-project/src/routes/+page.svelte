<script>
    export const prerender = true;

const seo = {
  title: 'Tvorba webových stránek pro malé firmy v Brně | BrnoWebStudio',
  description: 'Pomáháme brněnským podnikatelům s moderními, rychlými a bezpečnými weby.'
};

    import Main from "../components/Main.svelte";
</script>

<svelte:head>
  <title>{seo.title}</title>
  <meta name="description" content={seo.description} />
  <!-- OpenGraph -->
  <meta property="og:type" content="website" />
  <meta property="og:title" content={seo.title} />
  <meta property="og:description" content={seo.description} />
  <meta property="og:url" content="https://lilleyjakub.com" />
  <meta property="og:locale" content="cs_CZ" />
  <!-- Twitter Card -->
  <meta name="twitter:card" content="summary_large_image" />
</svelte:head>

<Main {language} />