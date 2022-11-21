export default function Posts() {

    let posts = [{foto: "assets/img/meowed.svg",perfil: "meowed",conteudo: "assets/img/gato-telefone.svg", curtidas: "Curtido por <strong>respondeai</strong> e <strong>outras 101.523 pessoas</strong>"},
                {foto: "assets/img/barked.svg",perfil: "barked",conteudo: "assets/img/dog.svg", curtidas: "Curtido por <strong>adorable_animals</strong> e <strong>outras 99.159 pessoas</strong>"},]

    return (
        <div class="posts">
            {posts.map((f) => <GeraPost foto={f.foto} perfil={f.perfil} conteudo={f.conteudo} curtidas={f.curtidas}/>)}
        </div>
    );
  }

  function GeraPost(props){
    return(
        <div class="post">
          <div class="topo">
            <div class="usuario">
              <img src={props.foto} />
              {props.perfil}
            </div>
            <div class="acoes">
              <ion-icon name="ellipsis-horizontal"></ion-icon>
            </div>
          </div>

          <div class="conteudo">
            <img src={props.conteudo} />
          </div>

          <div class="fundo">
            <div class="acoes">
              <div>
                <ion-icon name="heart-outline"></ion-icon>
                <ion-icon name="chatbubble-outline"></ion-icon>
                <ion-icon name="paper-plane-outline"></ion-icon>
              </div>
              <div>
                <ion-icon name="bookmark-outline"></ion-icon>
              </div>
            </div>

            <div class="curtidas">
              <img src="assets/img/respondeai.svg" />
              <div class="texto">
              {props.curtidas}
              </div>
            </div>
          </div>
        </div>
    )
}
