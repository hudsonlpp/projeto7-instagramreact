export default function Sugestoes() {

    let sugestoes = [{foto: "assets/img/bad.vibes.memes.svg", perfil: "bad.vibes.memes", status: "Segue você", botao: "Seguir"},
                    {foto: "assets/img/chibirdart.svg", perfil: "chibirdart", status: "Segue você", botao: "Seguir"},
                    {foto: "assets/img/razoesparaacreditar.svg", perfil: "razoesparaacreditar", status: "Novo no Instagram", botao: "Seguir"},
                    {foto: "assets/img/adorable_animals.svg", perfil: "adorable_animals", status: "Segue você", botao: "Seguir"},
                    {foto: "assets/img/smallcutecats.svg", perfil: "smallcutecats", status: "Segue você", botao: "Seguir"}]

    return (
        <div class="sugestoes">
          <div class="titulo">
            Sugestões para você
            <div>Ver tudo</div>
          </div>

          {sugestoes.map((f) => <GeraSugestoes foto={f.foto} perfil={f.perfil} status={f.status} botao={f.botao}/>)}

        </div>
    );
  }

function GeraSugestoes(props){
    return(
        <div class="sugestao">
            <div class="usuario">
              <img src={props.foto} />
              <div class="texto">
                <div class="nome">{props.perfil}</div>
                <div class="razao">{props.status}</div>
              </div>
            </div>

            <div class="seguir">{props.bo}</div>
          </div>
    )
}
//Sugestoes (onde cada item será um componente diferente, o Sugestao)
