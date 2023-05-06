import Image from "next/future/image";
import Link from "next/link";
import styles from '../styles/guitarras.module.css'
function Guitarra({ guitarra }) {
    const { nombre, url, descripcion, imagen, precio } = guitarra;
    return (
        <div className={styles.guitarra}>
            <Image src={imagen.data[0].attributes.formats.medium.url} width={600} height={400} alt="Imagen Guitarra" />
            <div className={styles.contenido}>
                <h3>{nombre}</h3>
                <p className={styles.descripcion}>{descripcion}</p>
                <p className={styles.precio}>{precio}€</p>
                <Link href={`/guitarras/${url}`} legacyBehavior>
                    <a className={styles.enlace}>
                        Ver Producto
                    </a>
                </Link>
            </div>
        </div>
    );
}

export default Guitarra;