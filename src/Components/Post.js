import { useState } from "react"

export default function Post(props) {

    const [postLiked, setPostLiked] = useState('none');
    //let [heartName, setHeartName] = useState('heart-outline');
    //let [postName, setPostName] = useState('bookmark-outline');
    const [numberLikes, setNumberLikes] = useState(Number('101'));
    const [curtido, setCurtido] = useState(false);
    const [salvo, setSalvo] = useState(false);



    function curtePostImg() {
        if (!curtido) {
            setCurtido(true)
            setPostLiked('red');
            //setHeartName('heart');
            setNumberLikes(numberLikes + 1)
        }

    }

    function curtePost() {
        if (!curtido) {
            setCurtido(true);
            //setHeartName('heart');
            setPostLiked('red');
            setNumberLikes(numberLikes + 1)
        } else {
            setCurtido(false);
            //setHeartName('heart-outline');
            setPostLiked('none');
            setNumberLikes(numberLikes - 1);
        }
    }

    function salvaPost() {
        if (!salvo) {
            //setPostName('bookmark');
            setSalvo(true)
        } else {
            setSalvo(false);
        }
    }

    return (

                <div className="post" data-test="post">
                    <div className="topo">
                        <div classNAme="usuario">
                            <img src={props.fotousuario} alt={props.usuario} />
                            {props.usuario}
                        </div>
                        <div className="acoes">
                            <ion-icon name="ellipsis-horizontal"></ion-icon>
                        </div>
                    </div>
                    <div className="conteudo">
                        <img data-test="post-image" onDoubleClick={curtePostImg} src={props.conteudo} alt={props.usuario} />
                    </div>
                    <div className="fundo">
                        <div className="acoes">
                            <div>
                                <ion-icon data-test="like-post" onClick={curtePost} name={!curtido ? "heart-outline" : "heart"} className={postLiked}></ion-icon>
                                <ion-icon name="chatbubble-outline"></ion-icon>
                                <ion-icon name="paper-plane-outline"></ion-icon>
                            </div>
                            <div>
                                <ion-icon data-test="save-post" onClick={salvaPost} name={!salvo ? "bookmark-outline" : "bookmark"}></ion-icon>
                            </div>
                        </div>
                        <div className="curtidas">
                            <img src={props.curtida} alt={props.textocurtida} />
                            <div className="texto">
                                Curtido por <strong>{props.textocurtida} </strong> e <strong data-test="likes-number">outras {numberLikes} pessoas</strong>
                            </div>
                        </div>
                    </div>
                </div>
            )

}