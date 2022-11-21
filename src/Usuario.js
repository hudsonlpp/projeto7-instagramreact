import React from "react";

export default function Usuario() {
    const [perfil,setPerfil] = React.useState("Catana")
    const [foto,setFoto] = React.useState("assets/img/catanacomics.svg")

    return(
        <GeraUsuario usuario={perfil} imagem={foto} />
    )

    function inserirPerfil(){
        const resposta = prompt("Digite seu nome.")
        setPerfil(resposta)
    }

    function inserirFoto(){
        const resposta = prompt("Insira o link da sua foto.")
        setFoto(resposta)
    }

    function GeraUsuario(props){
        return (
            <div data-test="user" class="usuario">
              <img data-test="profile-image" onClick={inserirFoto} src={!foto ? "assets/img/catanacomics.svg" : foto} />
              <div class="texto">
                <strong>catanacomics</strong>
                <span data-test="name">
                {!perfil ? "Catana" : perfil}
                  <ion-icon data-test="edit-name" onClick={inserirPerfil} name="pencil"></ion-icon>
                </span>
              </div>
            </div>    
        );
    }
  }
