import Suggestion from './Suggestion'

export default function Suggestions() {

    const sugestoes = [
        { imagem: "assets/img/bad.vibes.memes.svg", nome: "bad.vibes.memes" },
        { imagem: "assets/img/chibirdart.svg", nome: "chibirdart" },
        { imagem: "assets/img/razoesparaacreditar.svg", nome: "razoesparaacreditar" },
        { imagem: "assets/img/adorable_animals.svg", nome: "adorable_animals" },

    ]

    return (
        <div className="sugestoes">
            <div className="titulo">
                Sugestões para você
                <div>Ver tudo</div>
            </div>
            {sugestoes.map((s) => <Suggestion key={s.nome} nome={s.nome} imagem={s.imagem} />)}
            <div className="links">
                Sobre • Ajuda • Imprensa • API • Carreiras • Privacidade • Termos • Localizações • Contas mais relevantes •
                Hashtags • Idioma
            </div>

            <div className="copyright">
                © 2021 INSTAGRAM DO FACEBOOK
            </div>
        </div>

    )

}