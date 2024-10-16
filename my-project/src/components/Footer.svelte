<!-- Adding Czech language support to each of the Svelte components -->

// Footer.svelte
<script>
    export let language = "en";

    let translations = {
        en: {
            connect: "Connect with me ↓",
            email: "Email",
            github: "GitHub",
            linkedin: "LinkedIn",
        },
        cs: {
            connect: "Spojte se se mnou ↓",
            email: "E-mail",
            github: "GitHub",
            linkedin: "LinkedIn",
        },
    };
</script>

<footer class="py-20 sm:py-32 bg-black border-t border-solid border-violet-950 flex flex-col gap-4 sm:gap-8 justify-center items-center">
    <p class="px-4 py-2 bg-white text-slate-950 font-medium">
        {translations[language].connect}
    </p>
    <div class="flex flex-col gap-4 items-center justify-center">
        <p><b class="pr-2">{translations[language].email}</b> jakub.lilley@gmail.com</p>
        <p><b class="pr-2">{translations[language].github}</b>
            <a class="text-violet-400" target="_blank" href="https://github.com/Camobeast">
                Camobeast<sup><span class="text-xs scale-75 pl-0.5">
                    <i class="fa-solid fa-arrow-up-right-from-square text-xs scale-[75%]"></i>
                </span></sup>
            </a>
        </p>
        <p><b class="pr-2">{translations[language].linkedin}</b>
            <a class="text-violet-400" target="_blank" href="https://www.linkedin.com/in/jakub-lilley/">
                Jakub Lilley<sup><span class="text-xs scale-75 pl-0.5">
                    <i class="fa-solid fa-arrow-up-right-from-square text-xs scale-[75%]"></i>
                </span></sup>
            </a>
        </p>
    </div>
</footer>