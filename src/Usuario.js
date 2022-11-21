export default function Usuario() {

    let usuario = {foto:"assets/img/catanacomics.svg", perfil: "Catana"}

    return (
            <div class="usuario">
              <img src={usuario.foto} />
              <div class="texto">
                <strong>catanacomics</strong>
                <span>
                  {usuario.perfil}
                  <ion-icon name="pencil"></ion-icon>
                </span>
              </div>
            </div>    
    );
  }
