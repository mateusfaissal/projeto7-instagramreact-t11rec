import Post from './Post'

export default function Posts() {
    
    const posts = [
        { usuario: "meowed", fotousuario: "assets/img/meowed.svg", conteudo: "assets/img/gato-telefone.svg", curtida: "assets/img/respondeai.svg", textocurtida: "respondeai" },
        { usuario: "barked", fotousuario: "assets/img/barked.svg", conteudo: "assets/img/dog.svg", curtida: "assets/img/adorable_animals.svg", textocurtida: "adorable_animals" },
        { usuario: "meowed", fotousuario: "assets/img/meowed.svg", conteudo: "assets/img/gato-telefone.svg", curtida: "assets/img/respondeai.svg", textocurtida: "respondeai" },
    ]
    return (
        <div className="posts">
            {posts.map( (p) => (
                    <Post 
                        key={p.usuario}
                        usuario={p.usuario} 
                        fotousuario={p.fotousuario} 
                        conteudo={p.conteudo} 
                        curtida={p.curtida} 
                        textocurtida={p.textocurtida} 
                    /> 
                )
            )}
        </div>
    );
}