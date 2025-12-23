console.log(
    '%c Рендеримо список розробників в секції "Наша команда" ',
    'color: white; background-color: #D33F49',
);
//!✅ Рішення-3: з new URL(...)(динамічний шлях без явного import)
new URL("../images/symboldefs.svg#instagram", import.meta.url).href;

const developersList = document.querySelector(".workers-list");
//! крок №1. Створюємо дефолтний список розробників (4)
let dataDevelopersList = [
    {
        name: "Ігор",
        profession: "Product Designer",
        images: {
            desktop: [
                new URL('../images/igor-d-1x.jpg', import.meta.url).href,
                new URL('../images/igor-d-2x.jpg', import.meta.url).href,
                new URL('../images/igor-d-3x.jpg', import.meta.url).href, 
            ],
            tablet: [
                new URL('../images/igor-t-1x.jpg',  import.meta.url).href, 
                new URL('../images/igor-t-2x.jpg', import.meta.url).href,
                new URL('../images/igor-t-3x.jpg', import.meta.url).href,
            ],    
            mobile: [
                new URL('../images/igor-m-1x.jpg', import.meta.url).href,
                new URL('../images/igor-m-2x.jpg', import.meta.url).href,
                new URL('../images/igor-m-3x.jpg', import.meta.url).href,
            ],
            default: new URL('../images/igor-m-1x.jpg', import.meta.url).href,
        },
        icons: [
            new URL("../images/symboldefs.svg#instagram", import.meta.url).href,
            new URL('../images/symboldefs.svg#twitter', import.meta.url).href,
            new URL('../images/symboldefs.svg#facebook', import.meta.url).href, 
            new URL('../images/symboldefs.svg#linkedin', import.meta.url).href
        ]
    },
    {
        //!✅ Рішення-3:
        name: "Ольга Рєпіна",
        profession: "Frontend Developer",
        images: {
            desktop: [
                new URL("../images/olha-d-1x.jpg", import.meta.url).href,
                new URL("../images/olha-d-2x.jpg", import.meta.url).href,
                new URL("../images/olha-d-3x.jpg", import.meta.url).href
            ],
            tablet: [
                new URL("../images/olha-t-1x.jpg", import.meta.url).href,
                new URL("../images/olha-t-2x.jpg", import.meta.url).href,
                new URL("../images/olha-t-3x.jpg", import.meta.url).href
            ],
            mobile: [
                new URL("../images/olha-m-1x.jpg", import.meta.url).href,
                new URL("../images/olha-m-2x.jpg", import.meta.url).href,
                new URL("../images/olha-m-3x.jpg", import.meta.url).href
            ],
            default: new URL("../images/olha-m-1x.jpg", import.meta.url).href
        },
        icons: [
            new URL("../images/symboldefs.svg#instagram", import.meta.url).href,
            new URL("../images/symboldefs.svg#twitter", import.meta.url).href,
            new URL("../images/symboldefs.svg#facebook", import.meta.url).href,
            new URL("../images/symboldefs.svg#linkedin", import.meta.url).href
        ]
    },
    {
        name: "Микола Тарасов",
        profession: "Marketing",
        images: {
            desktop: [
                new URL('../images/micola-d-1x.jpg', import.meta.url).href,
                new URL('../images/micola-d-2x.jpg', import.meta.url).href,
                new URL('../images/micola-d-3x.jpg', import.meta.url).href,
            ],
            tablet: [
                new URL('../images/micola-t-1x.jpg', import.meta.url).href,
                new URL('../images/micola-t-2x.jpg', import.meta.url).href,
                new URL('../images/micola-t-3x.jpg', import.meta.url).href,
            ],
            mobile: [
                new URL('../images/micola-m-1x.jpg', import.meta.url).href,
                new URL('../images/micola-m-2x.jpg', import.meta.url).href,
                new URL('../images/micola-m-3x.jpg', import.meta.url).href,
            ],
            default: new URL('../images/micola-m-1x.jpg', import.meta.url).href,
        },
        icons: [new URL("../images/symboldefs.svg#instagram", import.meta.url).href,
        new URL('../images/symboldefs.svg#twitter', import.meta.url).href,
        new URL('../images/symboldefs.svg#facebook', import.meta.url).href,
        new URL('../images/symboldefs.svg#linkedin', import.meta.url).href
        ]
    },
    {
        name: "Михайло Єрмаков",
        profession: "UI Designer",
        images: {
            desktop: [
                new URL('../images/mihailo-d-1x.jpg', import.meta.url).href,
                new URL('../images/mihailo-d-2x.jpg', import.meta.url).href,
                new URL('../images/mihailo-d-3x.jpg', import.meta.url).href,
            ],
            tablet: [
                new URL('../images/mihailo-t-1x.jpg', import.meta.url).href,
                new URL('../images/mihailo-t-2x.jpg', import.meta.url).href,
                new URL('../images/mihailo-t-3x.jpg', import.meta.url).href,
            ],
            mobile: [
                new URL('../images/mihailo-m-1x.jpg', import.meta.url).href,
                new URL('../images/mihailo-m-2x.jpg', import.meta.url).href,
                new URL('../images/mihailo-m-3x.jpg', import.meta.url).href,
            ],
            default: new URL('../images/mihailo-m-1x.jpg', import.meta.url).href,
        },
        icons: [new URL("../images/symboldefs.svg#instagram", import.meta.url).href,
        new URL('../images/symboldefs.svg#twitter', import.meta.url).href,
        new URL('../images/symboldefs.svg#facebook', import.meta.url).href,
        new URL('../images/symboldefs.svg#linkedin', import.meta.url).href
        ]
    }
]

const jsonDevelopersList = JSON.stringify(dataDevelopersList);

console.log("jsonDevelopersList: ", jsonDevelopersList);

console.log(dataDevelopersList[0].images.desktop[0])

// console.log(dataDevelopersList)

//! звернення до localstorage, чи є dataDevelopers

if (localStorage.getItem('dataDevelopers')) {
    //! забираємо дані з localstorage в змінну dataDevelopersList
    dataDevelopersList = JSON.parse(localStorage.getItem('dataDevelopers'));

    console.log("dataDevelopersList: ", dataDevelopersList);
} else {
    console.log('створюємо дефолтний список розробників');

    localStorage.setItem('dataDevelopers', JSON.stringify(dataDevelopersList));
}

const markup = dataDevelopersList.map(item =>
    `<li class="workers-list__item">
                        <picture>
                            <source srcset="${item.images.desktop[0]} 1x, ${item.images.desktop[1]} 2x, ${item.images.desktop[2]} 3x"
                             media="(min-width: 1200px)" />
                            <source srcset="${item.images.tablet[0]} 1x, ${item.images.tablet[1]} 2x, ${item.images.tablet[2]} 3x"
                                media="(min-width: 768px)">
                            <source srcset="${item.images.mobile[0]} 1x, ${item.images.mobile[1]} 2x, ${item.images.mobile[2]} 3x"
                                media="(min-width: 480px)">
                            <img class="workers-list__img" src="${item.images.mobile[0]}" alt="Ігор">
                        </picture>
                        <p class="workers-list__text">${item.name}</p>
                        <h3 class="workers-list__title">${item.profession}</h3>
                        <ul class="workers-list--social-media">
                            <li class="workers-list__item--social-media">
                                <a class="workers-list__link" href="https://www.instagram.com/">
                                    <svg class="svgs" width="20" height="20">
                                        <use href="${item.icons[0]}"></use>
                                    </svg>
                                </a>
                            </li>
                            <li class="workers-list__item--social-media">
                                <a class="workers-list__link" href="https://twitter.com/">
                                    <svg class="svgs" width="20" height="20">
                                        <use href="${item.icons[1]}"></use>
                                    </svg>
                                </a>
                            </li>
                            <li class="workers-list__item--social-media">
                                <a class="workers-list__link" href="https://uk-ua.facebook.com/">
                                    <svg class="svgs" width="20" height="20">
                                        <use href="${item.icons[2]}"></use>
                                    </svg>
                                </a>
                            </li>
                            <li class="workers-list__item--social-media">
                                <a class="workers-list__link" href="https://ua.linkedin.com/">
                                    <svg class="svgs" width="20" height="20">
                                        <use href="${item.icons[3]}"></use>
                                    </svg>
                                </a>
                            </li>
                        </ul>
                    </li>
    `
).join("");

developersList.innerHTML = markup;