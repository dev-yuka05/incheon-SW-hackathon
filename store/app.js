(() => {
    twemoji.parse(document.body);

    let content = document.querySelectorAll('.list .item')[0].outerHTML;
    let list = document.querySelector('.list');

    console.log(content);

    document.addEventListener('scroll', () => {
        if ((window.innerHeight + window.scrollY) >= document.body.offsetHeight-1) {
            list.innerHTML += content;
        }
    })
})();