import Layout from "../../components/layout";
import Image from "next/future/image";
import styles from '../../styles/blog.module.css';
import { formatearFecha } from "../../utils/helpers";
function Post({ posts }) {
    const { Nombre, Contenido, Imagen, publishedAt } = posts[0].attributes;
    return (
        <Layout title={Nombre}>
            <article className={`${styles.post} ${styles['mt-3']}`}>
                <Image src={Imagen.data.attributes.url} width={1000} height={400} alt="Imagen Blog" />
                <div className={styles.contenido}>
                    <h3>{Nombre}</h3>
                    <p className={styles.fecha}>{formatearFecha(publishedAt)}</p>
                    <p className={styles.texto}>{Contenido}</p>
                </div>
            </article>
        </Layout>
    );
}

export default Post;

export async function getServerSideProps({ query: { url } }) {
    const respuesta = await fetch(`${process.env.API_URL}/posts?filters[url]=${url}&populate=Imagen`);
    const { data: posts } = await respuesta.json();
    return {
        props: {
            posts
        }
    }
}