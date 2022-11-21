import React from "react";

export default function Posts() {

    let posts = [{foto: "assets/img/meowed.svg",perfil: "meowed",conteudo: "assets/img/gato-telefone.svg", like: "respondeai", likes: 101523},
                {foto: "assets/img/barked.svg",perfil: "barked",conteudo: "assets/img/dog.svg", like: "adorable_animals", likes: 99159},]
    return (
        <div class="posts">
            {posts.map((f) => <GeraPost foto={f.foto} perfil={f.perfil} conteudo={f.conteudo} like={f.like} likes={f.likes}/>)}
        </div>
    );
  }

  function GeraPost(props){

    const[salvar,setSalvar] = React.useState("bookmark-outline")
    const[curtir,setCurtir] = React.useState("heart-outline")
    const[umLike,setUmLike] = React.useState(props.likes)

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
            <img onDoubleClick={CurteImagem} src={props.conteudo} />
          </div>

          <div class="fundo">
            <div class="acoes">
              <div>
                <ion-icon onClick={Curtida} name={curtir}></ion-icon>
                <ion-icon name="chatbubble-outline"></ion-icon>
                <ion-icon name="paper-plane-outline"></ion-icon>
              </div>
              <div>
                <ion-icon onClick={Salvada} name={salvar}></ion-icon>
              </div>
            </div>

            <div class="curtidas">
              <img src="assets/img/respondeai.svg" />
              <div class="texto">
              Curtido por <strong>{props.like}</strong> e <strong> outras {umLike} pessoas</strong>.
              </div>
            </div>
          </div>
        </div>
    )

    function Salvada(){
        if(salvar === "bookmark-outline") {
            setSalvar("bookmark")
        } else {
            setSalvar("bookmark-outline")
        }
    }

    function Curtida(){
        if(curtir === "heart-outline"){
            setCurtir("heart")
            setUmLike(props.likes + 1)
        } else {
            setCurtir("heart-outline")
            setUmLike(props.likes - 1)
        }
    }

    function CurteImagem(){
        if(curtir === "heart-outline"){
            setCurtir("heart")
            setUmLike(props.likes + 1)
        }
    }

}
