function handleIntersection(entries,observer){entries.forEach(entry=>{if(entry.isIntersecting){setTimeout(()=>{entry.target.classList.add('actonsc')},100)}})}
const options={root:null,rootMargin:'0px',threshold:0.5};const bannerScList=document.querySelectorAll('.onscrls');bannerScList.forEach(bannerSc=>{const observer=new IntersectionObserver(handleIntersection,options);observer.observe(bannerSc)})
// Load Unicons once so all `uil` icons render across local pages.
if(!document.querySelector('link[data-unicons]')){
    var unicons=document.createElement('link');
    unicons.rel='stylesheet';
    unicons.href='https://unicons.iconscout.com/release/v4.0.8/css/line.css';
    unicons.setAttribute('data-unicons','true');
    document.head.appendChild(unicons);
}
document.addEventListener('DOMContentLoaded', function() {
    var images = document.querySelectorAll('img');
    images.forEach(function(img) {
        img.addEventListener('contextmenu', function(e) {
            e.preventDefault();
        });
    });
});
document.addEventListener('DOMContentLoaded', function () {
    var siteRoot = 'https://www.innovogroup.com/';
    var localFlowPages = new Set([
        'index.html',
        'safety-induction-venture.html',
        'safety-induction-language.html',
        'safety-induction-start.html',
        'safety-induction-video.html',
        'safety-induction-category.html',
        'safety-induction-visitor-form.html',
        'safety-induction-employee-form.html',
        'safety-induction-qr.html'
    ]);

    document.querySelectorAll('a[href]').forEach(function (link) {
        var href = (link.getAttribute('href') || '').trim();
        if (!href) return;
        if (/^(#|https?:|\/\/|mailto:|tel:|javascript:)/i.test(href)) return;

        var normalized = href.replace(/^\.\//, '').split('#')[0].split('?')[0];
        if (!normalized) return;

        // Keep local HTML files and local asset links untouched.
        if (localFlowPages.has(normalized) || /\.html?$/i.test(normalized) || normalized.startsWith('assets/')) return;

        // Send all other relative links to Innovo live website.
        link.setAttribute('href', siteRoot + normalized);
    });

    document.querySelectorAll('form[action]').forEach(function (form) {
        var action = (form.getAttribute('action') || '').trim();
        if (!action) return;
        if (/^(https?:|\/\/)/i.test(action)) return;

        var normalized = action.replace(/^\.\//, '');
        form.setAttribute('action', siteRoot + normalized);
    });
});
