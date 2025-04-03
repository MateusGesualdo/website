const galeria = document.querySelector("#galeria");
const dadosImagens = [
  {
    src: "https://picsum.photos/id/10/200",
    title: "paisagem 1",
  },
  {
    src: "https://picsum.photos/id/11/200",
    title: "paisagem 2",
  },
  {
    src: "https://picsum.photos/id/12/200",
    title: "paisagem 3",
  },
  {
    src: "https://picsum.photos/id/13/200",
    title: "paisagem 4",
  },
  {
    src: "https://picsum.photos/id/14/200",
    title: "paisagem 5",
  },
  {
    src: "https://picsum.photos/id/15/200",
    title: "paisagem 6",
  }
];

function adicionarImagem(dados) {
  
  const imagem = document.createElement("img");
  
  imagem.src = dados.src;
  imagem.title = dados.title;

  galeria.append(imagem)
}

dadosImagens.forEach(adicionarImagem)