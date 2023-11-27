var _=(e,t,a)=>{if(!t.has(e))throw TypeError("Cannot "+a)};var i=(e,t,a)=>(_(e,t,"read from private field"),a?a.call(e):t.get(e)),y=(e,t,a)=>{if(t.has(e))throw TypeError("Cannot add the same private member more than once");t instanceof WeakSet?t.add(e):t.set(e,a)},g=(e,t,a,s)=>(_(e,t,"write to private field"),s?s.call(e,a):t.set(e,a),a);import{a as v,S as M,i as f}from"./assets/vendor-cbe3413a.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))s(r);new MutationObserver(r=>{for(const l of r)if(l.type==="childList")for(const c of l.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&s(c)}).observe(document,{childList:!0,subtree:!0});function a(r){const l={};return r.integrity&&(l.integrity=r.integrity),r.referrerpolicy&&(l.referrerPolicy=r.referrerpolicy),r.crossorigin==="use-credentials"?l.credentials="include":r.crossorigin==="anonymous"?l.credentials="omit":l.credentials="same-origin",l}function s(r){if(r.ep)return;r.ep=!0;const l=a(r);fetch(r.href,l)}})();var p,m,d,n;class P{constructor(){y(this,p,"https://pixabay.com/api/");y(this,m,"31000801-179358ed9db1a9fc0904af43d");y(this,d,void 0);y(this,n,void 0);g(this,d,""),g(this,n,1),this.perPage=40}fetchGallery(){return v.get(`${i(this,p)}`,{params:{key:i(this,m),q:i(this,d),image_type:"photo",orientation:"horizontal",safesearch:!0,per_page:this.perPage,page:i(this,n)}})}get valueForSearch(){return i(this,d)}set valueForSearch(t){g(this,d,t)}get page(){return i(this,n)}set page(t){g(this,n,i(this,n)+1)}resetPage(){g(this,n,1)}}p=new WeakMap,m=new WeakMap,d=new WeakMap,n=new WeakMap;const o={form:document.querySelector("#search-form"),input:document.querySelector(".search-form__input"),btnClose:document.querySelector(".search-form__button"),targetObserver:document.querySelector(".target-element"),gallery:document.querySelector(".gallery__list"),btnLoadMore:document.querySelector(".load-more")},w=e=>e.map(({webformatURL:t,largeImageURL:a,tags:s,likes:r,views:l,comments:c,downloads:h})=>({webformatURL:t,largeImageURL:a,tags:s,likes:r,views:l,comments:c,downloads:h})),k=({page:e,totalHits:t,perPage:a})=>e<Math.ceil(t/a),q=()=>{const{height:e}=o.gallery.firstElementChild.getBoundingClientRect();window.scrollBy({top:e*2,behavior:"smooth"})},$=(e,t)=>{const a=e.map(({webformatURL:s,largeImageURL:r,tags:l,likes:c,views:h,comments:L,downloads:S})=>`<li class="gallery__item gallery">
      <a class="gallery__link" href="${r}">
      <img class="gallery__img" src="${s}" alt="${l}" loading="lazy" width=400/>
      </a>
      <div class="gallery__info">
      <ul class="gallery__details-list"><li class="gallery__details-item"><p class="gallery__details">
          <b>Likes</b>
          ${c}
        </p></li>
        <li class="gallery__details-item"><p class="gallery__details">
          <b>Views</b>
          ${h}
        </p></li>
        <li class="gallery__details-item"><p class="gallery__details">
          <b>Comments</b>
          ${L}
        </p></li>
        <li class="gallery__details-item"><p class="gallery__details">
          <b>Downloads</b>
          ${S}
        </p></li></ul>

      </div>
    </li>`).join("");return t.insertAdjacentHTML("beforeend",a)},x=new M(".gallery a",{captionDelay:250,captionsData:"alt"}),u=new P,b=async()=>{try{const{data:{totalHits:e,hits:t}}=await u.fetchGallery();if(e===0){f.error({title:"Error",message:"Sorry, there are no images matching your search query. Please try again."});return}k({totalHits:e,page:u.page,perPage:u.perPage})?o.btnLoadMore.style.display="flex":(o.btnLoadMore.style.display="none",f.info({title:"Oops",message:"We're sorry, but you've reached the end of search results."})),$(w(t),o.gallery),x.refresh(),u.page===1?f.success({title:"Hooray!",message:`We found ${e} images.`}):q()}catch(e){console.log(e)}},E=async e=>{e.preventDefault(),o.input.value.trim()!==""&&(o.btnLoadMore.style.display="none",u.resetPage(),o.gallery.innerHTML="",u.valueForSearch=e.target.elements.searchQuery.value.trim(),b())},A=()=>{u.page+=1,b()};o.form.addEventListener("submit",E);o.btnLoadMore.addEventListener("click",A);
//# sourceMappingURL=commonHelpers.js.map
