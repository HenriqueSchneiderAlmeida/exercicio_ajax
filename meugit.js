document.addEventListener('DOMContentLoaded', function () {
        const NomeGitHub = document.querySelector('#nome');
        const NomeUsuario = document.querySelector('#nomeGitHub');
        const ImagemGitHub = document.querySelector('#imgGitHub');
        const reposElement = document.querySelector('#reposGitHub');
        const segueElement = document.querySelector('#segueGitHub');
        const seguidoElement = document.querySelector('#seguidoGitHub');
        const linkElement = document.querySelector('#linkgitHub');
                
        fetch ('https://api.github.com/users/HenriqueSchneiderAlmeida')
        .then(function(resposta) {
            return resposta.json();
        })
        .then(function(json) {
            NomeGitHub.innerHTML = json.name;
            NomeUsuario.innerHTML = json.login;
            ImagemGitHub.src = json.avatar_url;
            reposElement.innerHTML = json.public_repos;
            segueElement.innerHTML = json.following;
            seguidoElement.innerHTML = json.followers;
            linkElement.href = json.html_url;
        })
        .catch(function(erro) {
            alert("Ocorreu um erro ao buscar os dados, tente novamente mais tarde.");
        })
        .finally(function() {
            alert("Fim da busca no GitHub!");
        })
    })