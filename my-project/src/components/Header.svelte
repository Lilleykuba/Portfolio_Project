<script>
    export let language = "en";
    export let y;

    let translations = {
        en: {
            projects: "Projects",
            about: "About me",
        },
        cs: {
            projects: "Projekty",
            about: "O mě",
        },
    };

    let tabs = [
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
    <div class="language-switcher">
        <button on:click={() => language = 'en'}>English</button>
        <button on:click={() => language = 'cs'}>Česky</button>
    </div>    
</header>