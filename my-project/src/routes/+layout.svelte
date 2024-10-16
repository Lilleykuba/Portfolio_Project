<script>
  import "../app.css";
  import Footer from "../components/Footer.svelte";
  import Header from "../components/Header.svelte";
  import Main from "../components/Main.svelte";

  let y;
  let innerHeight = 0;
  let innerWidth = 0;
  let language = 'en';

  function goTop() {
    document.body.scrollIntoView();
  }

  function toggleLanguage() {
    language = language === 'en' ? 'cs' : 'en';
  }
</script>

<div class="relative flex flex-col max-width-[1400px] mx-auto w-full text-sm 
sm:text-base min-h-screen">
  <div class={"fixed bottom-0 w-full duration-200 flex p-10 z-[10] " + (
    y > 0 ? " opacity-full pointer-events-auto": " pointer-events-none opacity-0"
  )}>
    <button on:click={goTop} class="ml-auto rounded-full aspect-square bg-slate-900 text-violet-400 px-3 sm:px-4 hover:bg-slate-800 cursor-pointer ">
      <i class="fa-solid fa-arrow-up grid place-items-center aspect-square"></i>
    </button>
  </div>
  <Header y={y} {language} on:toggleLanguage={toggleLanguage} />
  <Main {language} />
  <Footer {language} />
</div>

<svelte:window bind:scrollY={y} bind:innerHeight bind:innerWidth></svelte:window>