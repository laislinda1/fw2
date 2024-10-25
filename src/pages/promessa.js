import { Container } from "react-bootstrap";
import Menu from "./component/navbar";
import Footer from "./component/footer";
import { useState } from "react";
export default function Promessa(){
    const [prometido, setPrometido] = useState("")
    setTimeout(() => {
        setPrometido("é uma dívida")
        document.title="Promessa é divida"
    }, 2000);
    return <>
    <Menu/>
    <Container>
        Promessa {prometido=="" ? <img src="./Pacman Loader.gif" width={200} height={80}/> : prometido}
    </Container>
    <Footer />
    </>
}