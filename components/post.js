import Image from "next/future/image";
import Link from "next/link";
import styles from '../styles/blog.module.css';
import { formatearFecha } from "../utils/helpers";
function Post({ post }) {
    const { Nombre, Contenido, Url, Imagen, publishedAt } = post;
    return (
        <article>
            <Image src={Imagen.data.attributes.formats.medium.url} width={600} height={400} alt="Imagen de Blog" />
            <div className={styles.contenido}>
                <h3>{Nombre}</h3>
                <p className={styles.fecha}>{formatearFecha(publishedAt)}</p>
                <p className={styles.resumen}>{Contenido}</p>
                <Link href={`/blog/${Url}`}>
                    <a className={styles.enlace}>Leer Post</a>
                </Link>
            </div>
        </article>
    );
}

export default Post;