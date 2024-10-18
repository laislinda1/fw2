import { Container }  from "react-bootstrap"
import styles from "@/styles/Footer.module.css"
export default function footer() {
    return (
        <>
    <Container>
      <footer className={`${styles.footerGradiente} my-3 border-2 border border-danger-subtle rounded rounded-3`} >
        <ul className="nav justify-content-center border-bottom border-2 border-danger-subtle">
            <li> Disciplina de Frameworks 2</li>
        </ul>
        <p className="text-center">&copy; 2024 - IFMS</p>
      </footer>
     </Container>
</>
 );
}