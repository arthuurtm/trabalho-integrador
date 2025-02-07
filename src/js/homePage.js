const menu = document.getElementById('menu');
const modal = document.getElementById("userModal");
const openModal = document.getElementById("openModal");
const closeModal = document.getElementById("closeModal");
const navigator = document.getElementById('navigator');
const hideNavigator = document.getElementById('hideNavigator');
const header = document.getElementById('menu-header');

function changeSitePage(src, title, focus = null) {
    if (!!focus) {
        header.classList.add('hidden');
        navigator.classList.toggle('hidden');
    } else {
        header.classList.remove('hidden');
    }
    
    var iframe = document.getElementById('site_page');
    iframe.src = src;
    iframe.title = title;

    iframe.onload = function () {
        var script = document.createElement('script');
        script.type = 'text/javascript';
        script.text = `
            function changeSitePage(src, title, focus = false) {
                window.parent.postMessage(
                { 
                    action: 'changeSitePage',
                    src: src, 
                    title: title, 
                    focus: focus 
                },
                '*'
            );
                console.log("Solicitação enviada!");
            }
        `;
        iframe.contentDocument.body.appendChild(script);
    };
}

window.addEventListener('message', function (event) {
    if (event.data.action === 'changeSitePage') {
        console.log("Mensagem recebida na página principal:", event.data);

        changeSitePage(event.data.src, event.data.title, event.data.focus);
    }
});

hideNavigator.addEventListener('click', () => {
    navigator.classList.toggle('hidden');
});

openModal.addEventListener("click", () => {
    modal.style.display = "flex";
});

closeModal.addEventListener("click", () => {
    modal.style.display = "none";
});

window.addEventListener("click", (event) => {
    if (event.target === modal) {
        modal.style.display = "none";
    }
});

changeSitePage('views/tela_jogos.html', 'Início');
