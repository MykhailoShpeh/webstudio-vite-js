/* empty css                 */(function(){const a=document.createElement("link").relList;if(a&&a.supports&&a.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))g(e);new MutationObserver(e=>{for(const i of e)if(i.type==="childList")for(const o of i.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&g(o)}).observe(document,{childList:!0,subtree:!0});function l(e){const i={};return e.integrity&&(i.integrity=e.integrity),e.referrerPolicy&&(i.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?i.credentials="include":e.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function g(e){if(e.ep)return;e.ep=!0;const i=l(e);fetch(e.href,i)}})();console.log('%c Рендеримо список розробників в секції "Наша команда" ',"color: white; background-color: #D33F49");const t=document.querySelector(".workers-list"),m=[{name:"Ігор",profession:"Product Designer",images:{desktop:["./images/igor-d-1x.jpg","./images/igor-d-2x.jpg","./images/igor-d-3x.jpg"],tablet:["./images/igor-t-1x.jpg","./images/igor-t-2x.jpg","./images/igor-t-3x.jpg"],mobile:["./images/igor-m-1x.jpg","./images/igor-m-2x.jpg","./images/igor-m-3x.jpg"],default:"./images/igor-m-1x.jpg"},icons:["./images/symboldefs.svg#instagram","./images/symboldefs.svg#twitter","./images/symboldefs.svg#facebook","./images/symboldefs.svg#linkedin"]},{name:"Ольга Рєпіна",profession:"Frontend Developer",images:{desktop:["../images/olha-d-1x.jpg","./images/olha-d-2x.jpg","./images/olha-d-3x.jpg"],tablet:["./images/olha-t-1x.jpg","./images/olha-t-2x.jpg","./images/olha-t-3x.jpg"],mobile:["./images/olha-m-1x.jpg","./images/olha-m-2x.jpg","./images/olha-m-3x.jpg"],default:"./images/olha-m-1x.jpg"},icons:["./images/symboldefs.svg#instagram","./images/symboldefs.svg#twitter","./images/symboldefs.svg#facebook","./images/symboldefs.svg#linkedin"]},{name:"Микола Тарасов",profession:"Marketing",images:{desktop:["./images/micola-d-1x.jpg","./images/micola-d-2x.jpg","./images/micola-d-3x.jpg"],tablet:["./images/micola-t-1x.jpg","./images/micola-t-2x.jpg","./images/micola-t-3x.jpg"],mobile:["./images/micola-m-1x.jpg","./images/micola-m-2x.jpg","./images/micola-m-3x.jpg"],default:"./images/micola-m-1x.jpg"},icons:["./images/symboldefs.svg#instagram","./images/symboldefs.svg#twitter","./images/symboldefs.svg#facebook","./images/symboldefs.svg#linkedin"]},{name:"Михайло Єрмаков",profession:"UI Designer",images:{desktop:["./images/mihailo-d-1x.jpg","./images/mihailo-d-2x.jpg","./images/mihailo-d-3x.jpg"],tablet:["./images/mihailo-t-1x.jpg","./images/mihailo-t-2x.jpg","./images/mihailo-t-3x.jpg"],mobile:["./images/mihailo-m-1x.jpg","./images/mihailo-m-2x.jpg","./images/mihailo-m-3x.jpg"],default:"./images/mihailo-m-1x.jpg"},icons:["./images/symboldefs.svg#instagram","./images/symboldefs.svg#twitter","./images/symboldefs.svg#facebook","./images/symboldefs.svg#linkedin"]}];console.log(m);const r=m.map(s=>`<li class="workers-list__item">
                        <picture>
                            <source srcset="${s.images.desktop[0]} 1x, ${s.images.desktop[1]} 2x, ${s.images.desktop[2]} 3x"
                             media="(min-width: 1200px)" />
                            <source srcset="${s.images.tablet[0]} 1x, ${s.images.tablet[1]} 2x, ${s.images.tablet[2]} 3x"
                                media="(min-width: 768px)">
                            <source srcset="${s.images.mobile[0]} 1x, ${s.images.mobile[1]} 2x, ${s.images.mobile[2]} 3x"
                                media="(min-width: 480px)">
                            <img class="workers-list__img" src="${s.images.mobile[0]}" alt="Ігор">
                        </picture>
                        <p class="workers-list__text">${s.name}</p>
                        <h3 class="workers-list__title">${s.profession}</h3>
                        <ul class="workers-list--social-media">
                            <li class="workers-list__item--social-media">
                                <a class="workers-list__link" href="https://www.instagram.com/">
                                    <svg class="svgs" width="20" height="20">
                                        <use href="${s.icons[0]}"></use>
                                    </svg>
                                </a>
                            </li>
                            <li class="workers-list__item--social-media">
                                <a class="workers-list__link" href="https://twitter.com/">
                                    <svg class="svgs" width="20" height="20">
                                        <use href="${s.icons[1]}"></use>
                                    </svg>
                                </a>
                            </li>
                            <li class="workers-list__item--social-media">
                                <a class="workers-list__link" href="https://uk-ua.facebook.com/">
                                    <svg class="svgs" width="20" height="20">
                                        <use href="${s.icons[2]}"></use>
                                    </svg>
                                </a>
                            </li>
                            <li class="workers-list__item--social-media">
                                <a class="workers-list__link" href="https://ua.linkedin.com/">
                                    <svg class="svgs" width="20" height="20">
                                        <use href="${s.icons[3]}"></use>
                                    </svg>
                                </a>
                            </li>
                        </ul>
                    </li>
    `).join("");t.innerHTML=r;
