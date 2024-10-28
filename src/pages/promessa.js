import { Container } from "react-bootstrap";
import Menu from "./component/navbar";
import Footer from "./component/footer";
import { useEffect, useState } from "react";
export default function Promessa(){
    const [prometido, setPrometido] = useState("");
    useEffect(() => {
        setTimeout(async () => {
         document.title="Promessa é divida"

         const altera = await mudaTexto("Olá texto novo")
        
         setPrometido(altera);
 
        }, 2000);
    });

   return <>
    <Menu/>
    <Container>
        Promessa {prometido=="" ? <img src="./Pacman Loader.gif" width={200} height={80}/> : prometido}
    </Container>
    <Footer />
    </>

}
function mudaTexto(texto){
 return new Promise ((resolva) =>{
    setTimeout(() => {
    resolva(texto);
 },1000)
});
}