import Layout from '../components/layout';
import styles from '../styles/grid.module.css';
import Guitarra from '../components/guitarra';
import Post from '../components/post';
import Curso from '../components/curso';
export default function Home({ guitarras, posts, curso }) {
    return (
        <>
            <Layout title={'Inicio'}>
                <main className='contenedor'>
                    <h1 className='heading'>Nuestra Coleccion</h1>
                    <div className={styles.grid}>
                        {guitarras.map((guitarra) => (
                            <Guitarra
                                key={guitarra.id}
                                guitarra={guitarra.attributes}
                            />
                        ))}
                    </div>
                </main>
                <Curso curso={curso}/>
                <section className='contenedor'>
                    <h2 className='heading'>Blog</h2>
                    <div className={styles.grid}>
                        {posts.map((post) => (
                            <Post key={post.id} post={post.attributes} />
                        ))}
                    </div>
                </section>
            </Layout>
        </>

    );
}

export async function getStaticProps() {
    const urlGuitarras = `${process.env.API_URL}/guitarras?populate=imagen`;
    const urlPosts = `${process.env.API_URL}/posts?populate=Imagen`;
    const urlCurso = `${process.env.API_URL}/curso?populate=Imagen`;


    const [respuestaGuitarras, respuestaPosts, respuestaCurso] = await Promise.all([
        fetch(urlGuitarras),
        fetch(urlPosts),
        fetch(urlCurso)
    ]);

    const [{ data: guitarras }, { data: posts }, {data: curso}] = await Promise.all([
        respuestaGuitarras.json(),
        respuestaPosts.json(),
        respuestaCurso.json()
    ])
    return {
        props: {
            guitarras, posts, curso
        }
    }
}
