import Layout from "../components/layout";
import Link from "next/link";
function Pagina404() {
    return (
        <Layout title="Pagina No Encontrada">
            <p className="error">Página No Encontrada</p>
            <Link href={'/'}>
                <a className="error-enlace">Ir a Inicio</a>
            </Link>
        </Layout>
    );
}

export default Pagina404;