<script>
    import Step from "./Step.svelte";

    export let language = "cs";

    let translations = {
        en: {
            hi: "Hi I'm",
            frontendDeveloper: "Full Stack Developer",
            favoriteTech: "My favorite technologies include JavaScript (React, Node.js), TailwindCss and HTML!",
            getInTouch: "Get in touch →",
            personalProjects: "A few of my personal projects.",
            curiousToSee: "Curious to see my work?",
            watchVideo: "Watch the video",
            project1Description: "As my personal project I developed this BTC tipping web app featuring analytics and metamask integration, inspired by services like buymeacoffee.com",
            project2Description: "This site is meant to showcase your potential new website, including a headless CMS integration (contact me to try it out).",
            project3Description: "I designed, developed, and deployed this plumbing company website from scratch using HTML, CSS, and JS based on the client's requirements.",
            wantToKnowMore: "Want to know more?",
            aboutMe: "A bit about me.",
            iAm: "I am . . .",
            theCompletePackage: "The Complete Package",
            techStack: "Tech Stack",
            me: "Me",
            scrollToSee: "Scroll to see more →",
            invest: "So why not invest?",
            benefit1Name: "a self taught developer",
            benefit1Desc: "My interest in web development already started in elementary school, since then I have been, slowly and with many breaks, learning HTML and CSS. 3 years ago I also started learning JavaScript, now I am learning Svelte and React, along with TailwindCSS.",
            benefit2Name: "a product design and UX fan",
            benefit2Desc: "I enjoy keeping up with the latest UI and UX trends and implementing them into my projects in my own way. I often challenge myself to create original, modern and responsive designs from scratch.",
            benefit3Name: "an excellent communicator",
            benefit3Desc: "In my employment history, some jobs required me to communicate clearly and professionally with a client. I am still polishing this skill, because as an introvert, it doesn't come naturally to me.",
            stepsName1: "Web app for sending BTC donations",
            stepsName2: "Demo coffee shop",
            stepsName3: "Plumbing company website",
            addContent: "To CMS",
            firstName: "Jakub",
            lastName: "Lilley",
        },
        cs: {
            hi: "Vítejte v ",
            frontendDeveloper: "zaměřuji se na tvorbu webových stránek a aplikací.",
            favoriteTech: "Weby tvořím za pomoci moderních technologií jako je JavaScript (React, Node.js), TailwindCss a HTML!",
            getInTouch: "Kontaktujte mě →",
            personalProjects: "Několik mých projektů.",
            curiousToSee: "Chcete vidět mou práci?",
            watchVideo: "Sledujte video",
            project1Description: "Webová aplikace poskytující možnost posílání dobrovolných příspěvků registrovaným uživatelům v BTC ",
            project2Description: "Podívejte se, jak by mohla vypadat vaše budoucí stránka. Můžete si vyzkoušet i systém pro přidávání obsahu níže (pro přihlašovací údaje mě prosím kontaktujte emailem).",
            project3Description: "Navrhl, vyvinul jsem a udržuji tuto webovou stránku instalatérské společnosti pomocí HTML, CSS a JS dle požadavků klienta.",
            wantToKnowMore: "Chcete vědět více?",
            aboutMe: "Něco málo o mně.",
            iAm: "Jsem . . .",
            theCompletePackage: "Kompletní balíček",
            techStack: "Technologie",
            me: "Moje znalosti",
            scrollToSee: "Posunutím zobrazíte víc →",
            invest: "Tak proč se nespojit?",
            benefit1Name: "jsem samouk vývojář",
            benefit1Desc: "Můj zájem o webový vývoj začal už na základní škole, od té doby jsem se pomalu, s mnoha přestávkami, učil HTML a CSS. Před 3 roky jsem se také začal učit JavaScript, nyní se učím Svelte a React spolu s TailwindCSS.",
            benefit2Name: "jsem fanoušek produktového designu a UX",
            benefit2Desc: "Rád sleduji nejnovější trendy v UI a UX a implementuji je do svých projektů svým vlastním způsobem. Často vytvářím originální, moderní a responzivní designy od základu.",
            benefit3Name: "výborný komunikátor",
            benefit3Desc: "V mé pracovní historii některé pozice vyžadovaly, abych komunikoval jasně a profesionálně s klientem. Stále tuto dovednost zdokonaluji, protože jako introvert pro mě není přirozená.",
            stepsName1: "Aplikace pro posílání příspěvků v BTC",
            stepsName2: "Demo Kavárna",
            stepsName3: "Stránky pro instalatérskou firmu",
            addContent: "Zkusit přidat obsah",
            firstName: "BRNO Web Studio",
            lastName: "",
        },
    };

    $: steps = [
        {name: translations[language].stepsName1, icon: "fa-brands fa-btc", href: "http://cryptip.lilleyjakub.com"},
        {name: translations[language].stepsName2, icon: "fa-solid fa-mug-saucer", href: "http://cafe.lilleyjakub.com"},
        {name: translations[language].stepsName3, icon: "fa-solid fa-toilet", href: "https://www.vodotopovbrne.cz"},
    ];

    $: benefits = [
        {name: translations[language].benefit1Name, description: translations[language].benefit1Desc},
        {name: translations[language].benefit2Name, description: translations[language].benefit2Desc},
        {name: translations[language].benefit3Name, description: translations[language].benefit3Desc},
    ];
</script>

<main class="flex flex-col flex-1 p-4">
    <section id="introPage" class="grid grid-cols-1 lg:grid-cols-2 gap-10 py-8 sm:py-14">
        <div class="flex flex-col justify-center text-center gap-6 md:gap-8 lg:gap-10">
            <h2 class="font-semibold text-4xl sm:text-5xl md:text-6xl">
                {translations[language].hi} <span class="poppins text-violet-400">{translations[language].firstName}</span> {translations[language].lastName} <br />{translations[language].frontendDeveloper}
            </h2>
            <p class="text-base sm:text-lg md:text-xl">
                {translations[language].favoriteTech}
            </p>
            <a 
                class="blueShadow mx-auto lg:mr-auto lg:ml-0 text-base sm:text-lg md:text-xl poppins relative overflow-hidden px-6 py-3 group rounded-full bg-white text-slate-950 cursor-pointer"
                href="#contactMe"
            >
                <div class="absolute top-0 right-full w-full h-full bg-violet-400 opacity-20 group-hover:translate-x-full z-0 duration-200" />
                <h4 class="relative z-9">{translations[language].getInTouch}</h4>
            </a>
        </div>
        <!-- <div class="relative shadow-2xl grid place-items-center">
            <img src={"images/profile.png"} alt="Profile image" class="object-cover z-[2] max-h-[83vh]" />
        </div> -->
    </section>

    <section id="projects" class="py-20 lg:py-32 flex flex-col gap-24">
        <div class="flex flex-col gap-2 text-center">
            <h6 class="text-lg sm:text-xl md:text-2xl">
                {translations[language].personalProjects}
            </h6>
            <h3 class="font-semibold text-3xl sm:text-4xl md:text-5xl">
                {translations[language].curiousToSee}
            </h3>
        </div>
        <!-- <a
            href="#"
            target="_blank"
            class="mx-auto px-4 py-2 rounded-md border border-solid border-white flex items-center gap-2 -mb-4 sm:-mb-0 -mt-10 hover:border-violet-700 duration-200"
        >
            <i class="fa-regular fa-circle-play"></i>
            <p>{translations[language].watchVideo}</p>
        </a> -->
        <div class="grid grid-cols-1 lg:grid-cols-3 gap-12 lg:gap-10">
            <Step step={steps[0]}>
                <p>
                    {translations[language].project1Description}
                </p>
            </Step>
            <Step step={steps[1]}>
                <p>
                    {translations[language].project2Description}
                </p>
                <a class="ml-auto cursor-pointer hover:text-slate-950 duration-200 relative after:absolute after:top-0 after:h-0 
                            after:right-full after:w-full after:h-full after:bg-white after:duration-200 
                            hover:after:translate-x-full after:z-[-1] overflow-hidden"
                href="https://cafe.lilleyjakub.com/admin"> 
                    {translations[language].addContent}
                </a>
            </Step>
            <Step step={steps[2]}>
                <p>
                    {translations[language].project3Description}
                </p>
            </Step>
        </div>
    </section>
    <section id="about" class="py-20 pt-10 lg:pt-16 lg:py-32 flex flex-col gap-16 sm:gap-20 md:gap-24 relative">
        <div class="relative">
            <div class="flex flex-col gap-2 text-center realtive
                        before:absolute before:top-0 before:left-0 before:w-2/3 before:h-1.5 before:bg-violet-700
                        after:absolute after:bottom-0 after:right-0 after:w-2/3 after:h-1.5 after:bg-violet-700  py-4">
                <h6 class="text-lg sm:text-xl md:text-2xl">{translations[language].wantToKnowMore}</h6>
                <h3 class="font-semibold text-3xl sm:text-4xl md:text-5xl">
                    {translations[language].aboutMe}
                </h3>
            </div>
        </div>
        <p class="mx-auto poppins font-semibold text-lg sm:text-xl md:text-2xl">{translations[language].iAm}</p>
        <div class="flex flex-col gap-20 w-full mx-auto max-w-[800px]">
            {#each benefits as benefit, index}
            <div class="flex gap-6 sm:gap-8">
                <p class="poppins text-4xl sm:text-5xl md:text-6xl text-slate-500 font-semibold">
                    0{index + 1}        
                </p>
                <div class="flex flex-col gap-6 sm:gap-8">
                    <h3 class="text-2xl sm:text-3xl md:text-5xl">
                        {benefit.name}
                    </h3>
                    <p>{benefit.description}</p>
                </div>
            </div>
            {/each}
        </div>
        <!-- <h5 class="text-2xl sm:text-3xl font-semibold text-center poppins">{translations[language].theCompletePackage}</h5>
        <div class="flex flex-col overflow-x-scroll gap-10 max-w-[800px] mx-auto w-full">
            <table class="bg-white text-slate-700 rounded text-center">
                <thead class="border-b border-solid border-slate-200">
                    <tr class="">
                        <th class="whitespace-nowrap bg-violet-700 text-white p-4 px-8">{translations[language].techStack}</th>
                        <th class="whitespace-nowrap bg-violet-700 text-white p-4 px-8">{translations[language].me}</th>
                    </tr>
                </thead>
                <tbody>
                    <tr class="border-b border-solid border-slate-200">
                        <td class="border-r border-s border-white pl-4 pr-8 font-semibold text-sm whitespace-nowrap">HTML</td>
                        <td><i class="fa-solid fa-check text-green-500"></i></td>
                    </tr>
                    <tr class="border-b border-solid border-slate-200">
                        <td class="border-r border-s border-white pl-4 pr-8 font-semibold text-sm whitespace-nowrap">CSS</td>
                        <td><i class="fa-solid fa-check text-green-500"></i></td>
                    </tr>
                    <tr class="border-b border-solid border-slate-200">
                        <td class="border-r border-s border-white pl-4 pr-8 font-semibold text-sm whitespace-nowrap">JavaScript</td>
                        <td><i class="fa-solid fa-check text-green-500"></i></td>
                    </tr>
                    <tr class="border-b border-solid border-slate-200">
                        <td class="border-r border-s border-white pl-4 pr-8 font-semibold text-sm whitespace-nowrap">Node.js</td>
                        <td><i class="fa-solid fa-check text-green-500"></i></td>
                    </tr>
                    <tr class="border-b border-solid border-slate-200">
                        <td class="border-r border-s border-white pl-4 pr-8 font-semibold text-sm whitespace-nowrap">React</td>
                        <td><i class="fa-solid fa-check text-green-500"></i></td>
                    </tr>
                    <tr class="border-b border-solid border-slate-200">
                        <td class="border-r border-s border-white pl-4 pr-8 font-semibold text-sm whitespace-nowrap">SvelteKit</td>
                        <td><i class="fa-solid fa-check text-green-500"></i></td>
                    </tr>
                </tbody>
            </table>
        </div> -->
        <!-- <div class="mx-auto -mt-12 italic sm:hidden opacity-50">
            <p>{translations[language].scrollToSee}</p>
        </div> -->
        <p id="contactMe" class="mx-auto">{translations[language].invest}</p>
    </section>
</main>
