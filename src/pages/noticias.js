import { Container } from "react-bootstrap"
import Menu from "./component/navbar"
import Footer from "./component/footer"

export default function noticias(){
   var produtos = [
    {
        id: 1,
        produto: "Notebook",
        descricao: "Notebook leve e compacto, ideal para trabalho e estudo, com bateria de longa duração e teclado confortável."
    },
    {
        id: 2,
        produto: "Smartphone",
        descricao: "Smartphone com câmera de alta resolução, tela grande e desempenho excepcional para jogos e aplicações exigentes."
    },
    {
        id: 3,
        produto: "Fone de Ouvido",
        descricao: "Fone de ouvido sem fio com cancelamento de ruído, qualidade de som premium e conforto para longas horas de uso."
    },
    {
        id: 4,
        produto: "Smartwatch",
        descricao: "Smartwatch com monitoramento de saúde, notificações em tempo real e diversos aplicativos para facilitar seu dia a dia."
    },
    {
        id: 5,
        produto: "Câmera Digital",
        descricao: "Câmera digital com lente intercambiável, ideal para fotógrafos iniciantes e profissionais, oferecendo qualidade de imagem superior."
    }
]

    return (
    <>
    <Menu/>
    <Container> Lista
    {produtos.map(produto =>
    <div>
        <p>{produto.produto}</p>
        <p>{produto.descricao}</p>
    </div>
    )}
    </Container>
    <Footer/>
    </>

    );
}