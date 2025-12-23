/* empty css                 */(function(){const i=document.createElement("link").relList;if(i&&i.supports&&i.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))l(s);new MutationObserver(s=>{for(const t of s)if(t.type==="childList")for(const a of t.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&l(a)}).observe(document,{childList:!0,subtree:!0});function r(s){const t={};return s.integrity&&(t.integrity=s.integrity),s.referrerPolicy&&(t.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?t.credentials="include":s.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function l(s){if(s.ep)return;s.ep=!0;const t=r(s);fetch(s.href,t)}})();console.log('%c Рендеримо список розробників в секції "Наша команда" ',"color: white; background-color: #D33F49");//!✅ Рішення-3: з new URL(...)(динамічний шлях без явного import)
new URL("/webstudio-vite-js/assets/symboldefs-11308a41.svg#instagram",self.location).href;const n=document.querySelector(".workers-list");//! крок №1. Створюємо дефолтний список розробників (4)
let o=[{name:"Ігор",profession:"Product Designer",images:{desktop:[new URL("/webstudio-vite-js/assets/igor-d-1x-d133f3ce.jpg",self.location).href,new URL("/webstudio-vite-js/assets/igor-d-2x-36ffad5d.jpg",self.location).href,new URL("/webstudio-vite-js/assets/igor-d-3x-dd33fd33.jpg",self.location).href],tablet:[new URL("/webstudio-vite-js/assets/igor-t-1x-b958a221.jpg",self.location).href,new URL("/webstudio-vite-js/assets/igor-t-2x-69132e85.jpg",self.location).href,new URL("/webstudio-vite-js/assets/igor-t-3x-b16c3836.jpg",self.location).href],mobile:[new URL("/webstudio-vite-js/assets/igor-m-1x-9b34f6f4.jpg",self.location).href,new URL("/webstudio-vite-js/assets/igor-m-2x-231d21f7.jpg",self.location).href,new URL("/webstudio-vite-js/assets/igor-m-3x-3265e2ee.jpg",self.location).href],default:new URL("/webstudio-vite-js/assets/igor-m-1x-9b34f6f4.jpg",self.location).href},icons:[new URL("/webstudio-vite-js/assets/symboldefs-11308a41.svg#instagram",self.location).href,new URL("/webstudio-vite-js/assets/symboldefs-11308a41.svg#twitter",self.location).href,new URL("/webstudio-vite-js/assets/symboldefs-11308a41.svg#facebook",self.location).href,new URL("/webstudio-vite-js/assets/symboldefs-11308a41.svg#linkedin",self.location).href]},{name:"Ольга Рєпіна",position:"Frontend Developer",images:{desktop:[new URL("/webstudio-vite-js/assets/olha-d-1x-7415698b.jpg",self.location).href,new URL("/webstudio-vite-js/assets/olha-d-2x-d341eef7.jpg",self.location).href,new URL("/webstudio-vite-js/assets/olha-d-3x-2fdea0d5.jpg",self.location).href],tablet:[new URL("/webstudio-vite-js/assets/olha-t-1x-19360d3f.jpg",self.location).href,new URL("/webstudio-vite-js/assets/olha-t-2x-7a76fd99.jpg",self.location).href,new URL("/webstudio-vite-js/assets/olha-t-3x-4be6b96b.jpg",self.location).href],mobile:[new URL("/webstudio-vite-js/assets/olha-m-1x-b014b8bf.jpg",self.location).href,new URL("/webstudio-vite-js/assets/olha-m-2x-e93d0201.jpg",self.location).href,new URL("/webstudio-vite-js/assets/olha-m-3x-38dd9cb0.jpg",self.location).href],default:new URL("/webstudio-vite-js/assets/olha-m-1x-b014b8bf.jpg",self.location).href},icons:[new URL("/webstudio-vite-js/assets/symboldefs-11308a41.svg#instagram",self.location).href,new URL("/webstudio-vite-js/assets/symboldefs-11308a41.svg#twitter",self.location).href,new URL("/webstudio-vite-js/assets/symboldefs-11308a41.svg#facebook",self.location).href,new URL("/webstudio-vite-js/assets/symboldefs-11308a41.svg#linkedin",self.location).href]},{name:"Микола Тарасов",profession:"Marketing",images:{desktop:[new URL("/webstudio-vite-js/assets/micola-d-1x-72bf44d8.jpg",self.location).href,new URL("/webstudio-vite-js/assets/micola-d-2x-cdac9439.jpg",self.location).href,new URL("/webstudio-vite-js/assets/micola-d-3x-840d8f97.jpg",self.location).href],tablet:[new URL("/webstudio-vite-js/assets/micola-t-1x-0658dd93.jpg",self.location).href,new URL("/webstudio-vite-js/assets/micola-t-2x-973c66f8.jpg",self.location).href,new URL("/webstudio-vite-js/assets/micola-t-3x-4180371b.jpg",self.location).href],mobile:[new URL("/webstudio-vite-js/assets/micola-m-1x-04f2f041.jpg",self.location).href,new URL("/webstudio-vite-js/assets/micola-m-2x-fc3d89a3.jpg",self.location).href,new URL("/webstudio-vite-js/assets/micola-m-3x-744415b5.jpg",self.location).href],default:new URL("/webstudio-vite-js/assets/micola-m-1x-04f2f041.jpg",self.location).href},icons:[new URL("/webstudio-vite-js/assets/symboldefs-11308a41.svg#instagram",self.location).href,new URL("/webstudio-vite-js/assets/symboldefs-11308a41.svg#twitter",self.location).href,new URL("/webstudio-vite-js/assets/symboldefs-11308a41.svg#facebook",self.location).href,new URL("/webstudio-vite-js/assets/symboldefs-11308a41.svg#linkedin",self.location).href]},{name:"Михайло Єрмаков",profession:"UI Designer",images:{desktop:[new URL("/webstudio-vite-js/assets/mihailo-d-1x-71dbda84.jpg",self.location).href,new URL("/webstudio-vite-js/assets/mihailo-d-2x-b04c3fe7.jpg",self.location).href,new URL("/webstudio-vite-js/assets/mihailo-d-3x-52a8023e.jpg",self.location).href],tablet:[new URL("/webstudio-vite-js/assets/mihailo-t-1x-123be701.jpg",self.location).href,new URL("/webstudio-vite-js/assets/mihailo-t-2x-9ecdc35f.jpg",self.location).href,new URL("/webstudio-vite-js/assets/mihailo-t-3x-eeb8d25c.jpg",self.location).href],mobile:[new URL("/webstudio-vite-js/assets/mihailo-m-1x-de4ced1b.jpg",self.location).href,new URL("/webstudio-vite-js/assets/mihailo-m-2x-b086a8e5.jpg",self.location).href,new URL("/webstudio-vite-js/assets/mihailo-m-3x-28a7826c.jpg",self.location).href],default:new URL("/webstudio-vite-js/assets/mihailo-m-1x-de4ced1b.jpg",self.location).href},icons:[new URL("/webstudio-vite-js/assets/symboldefs-11308a41.svg#instagram",self.location).href,new URL("/webstudio-vite-js/assets/symboldefs-11308a41.svg#twitter",self.location).href,new URL("/webstudio-vite-js/assets/symboldefs-11308a41.svg#facebook",self.location).href,new URL("/webstudio-vite-js/assets/symboldefs-11308a41.svg#linkedin",self.location).href]}];const f=JSON.stringify(o);console.log("jsonDevelopersList: ",f);console.log(o[0].images.desktop[0]);//! звернення до localstorage, чи є dataDevelopers
if(localStorage.getItem("dataDevelopers")){//! забираємо дані з localstorage в змінну dataDevelopersList
o=JSON.parse(localStorage.getItem("dataDevelopers")),console.log("dataDevelopersList: ",o)}else console.log("створюємо дефолтний список розробників"),localStorage.setItem("dataDevelopers",JSON.stringify(o));const c=o.map(e=>`<li class="workers-list__item">
                        <picture>
                            <source srcset="${e.images.desktop[0]} 1x, ${e.images.desktop[1]} 2x, ${e.images.desktop[2]} 3x"
                             media="(min-width: 1200px)" />
                            <source srcset="${e.images.tablet[0]} 1x, ${e.images.tablet[1]} 2x, ${e.images.tablet[2]} 3x"
                                media="(min-width: 768px)">
                            <source srcset="${e.images.mobile[0]} 1x, ${e.images.mobile[1]} 2x, ${e.images.mobile[2]} 3x"
                                media="(min-width: 480px)">
                            <img class="workers-list__img" src="${e.images.mobile[0]}" alt="Ігор">
                        </picture>
                        <p class="workers-list__text">${e.name}</p>
                        <h3 class="workers-list__title">${e.profession}</h3>
                        <ul class="workers-list--social-media">
                            <li class="workers-list__item--social-media">
                                <a class="workers-list__link" href="https://www.instagram.com/">
                                    <svg class="svgs" width="20" height="20">
                                        <use href="${e.icons[0]}"></use>
                                    </svg>
                                </a>
                            </li>
                            <li class="workers-list__item--social-media">
                                <a class="workers-list__link" href="https://twitter.com/">
                                    <svg class="svgs" width="20" height="20">
                                        <use href="${e.icons[1]}"></use>
                                    </svg>
                                </a>
                            </li>
                            <li class="workers-list__item--social-media">
                                <a class="workers-list__link" href="https://uk-ua.facebook.com/">
                                    <svg class="svgs" width="20" height="20">
                                        <use href="${e.icons[2]}"></use>
                                    </svg>
                                </a>
                            </li>
                            <li class="workers-list__item--social-media">
                                <a class="workers-list__link" href="https://ua.linkedin.com/">
                                    <svg class="svgs" width="20" height="20">
                                        <use href="${e.icons[3]}"></use>
                                    </svg>
                                </a>
                            </li>
                        </ul>
                    </li>
    `).join("");n.innerHTML=c;
