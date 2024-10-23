<script>
    import { createEventDispatcher } from 'svelte';

    export let language = "cz";
    export let y;

    const dispatch = createEventDispatcher();

    function toggleLanguage() {
        dispatch('toggleLanguage');
    }

    let translations = {
        en: {
            projects: "Projects",
            about: "About me",
        },
        cs: {
            projects: "Projekty",
            about: "O mně",
        },
    };

    $: tabs = [
        {name: translations[language].projects, link: "#projects"},
        {name: translations[language].about, link: "#about"},
    ];
</script>

<header class={"sticky z-[10] top-0 duration-200 px-6 flex items-center justify-between border border-solid " + (
    y > 0 ? " py-4 bg-slate-950 border-violet-950": " py-6 bg-transparent border-transparent"
)}>
    <h1 class="font-medium">
        <b class="font-bold poppins">Jakub</b> Lilley
    </h1>
    <div class="sm:flex ml-auto pr-4 items-center gap-4 hidden">
        {#each tabs as tab, index}
            <a href={tab.link} class="duration-200 hover:text-violet-400">
                <p>{tab.name}</p>
            </a>
        {/each}
    </div>
    <a 
        href="https://www.linkedin.com/in/jakub-lilley/">
        LinkedIn
    </a>
    <div class="flex items-center gap-4">
        <button on:click={toggleLanguage} class="bg-violet-400 text-white px-4 py-2 ml-4 rounded">
            {language === 'en' ? 'CZ' : 'EN'}
        </button>
    </div>   
</header>