export default function Stories() {

    let stories = [{perfil: "9gag",foto: "assets/img/9gag.svg"},
                    {perfil: "meowed",foto: "assets/img/meowed.svg"},
                    {perfil: "barked",foto: "assets/img/barked.svg"},
                    {perfil: "nathanwpylestrangeplanet",foto: "assets/img/nathanwpylestrangeplanet.svg"},
                    {perfil: "wawawicomics",foto: "assets/img/wawawicomics.svg"},
                    {perfil: "respondeai",foto: "assets/img/respondeai.svg" },
                    {perfil: "filomoderna",foto: "assets/img/filomoderna.svg"},
                    {perfil: "memeriagourmet",foto: "assets/img/memeriagourmet.svg"},]

    return (
        <div class="stories">
            {stories.map((f) => <GeraStories perfil={f.perfil} foto={f.foto} />)}

            <div class="setinha">
                <ion-icon name="chevron-forward-circle"></ion-icon>
            </div>
        </div>
    );
  }

function GeraStories(props){
    return(
        <div class="story">
          <div class="imagem">
            <img src={props.foto} />
          </div>
          <div class="usuario">
            {props.perfil}
          </div>
        </div>
    )
}
