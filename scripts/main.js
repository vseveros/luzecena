let filmes = []
const endPointDaApi = 'https://guilhermeonrails.github.io/casadocodigo/livros.json'
getBuscarFilmes()

async function getBuscarFilmes() {
    const res = await fetch(endPointDaApi)
    filmes = await res.json()
    console.log(filmes)
}