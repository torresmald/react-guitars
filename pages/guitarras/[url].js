import Image from "next/future/image";
import styles from '../../styles/guitarras.module.css';
import Layout from "../../components/layout";
import { useState } from "react";
function Producto({ guitarra, agregarCarrito }) {
    const [cantidad, setCantidad] = useState(0);
    const handleSubmit = (event) => {
        event.preventDefault();
        if(cantidad < 1) {
            alert('Cantidad no valida');
            return;
        }
        const guitarraElegida = {
            id: guitarra[0].id,
            imagen: imagen.data[0].attributes.url,
            nombre, 
            precio,
            cantidad
        }
        agregarCarrito(guitarraElegida);

    }
    const { nombre, descripcion, imagen, precio } = guitarra[0].attributes;
    return (
        <Layout title={`Guitarra ${nombre}`}>
            <div className={styles.guitarra}>
                <Image src={imagen.data[0].attributes.url} width={600} height={400} alt="Imagen Guitarra" />
                <div className={styles.contenido}>
                    <h3>{nombre}</h3>
                    <p className={styles.descripcion}>{descripcion}</p>
                    <p className={styles.precio}>{precio}€</p>
                    <form className={styles.formulario} onSubmit={handleSubmit}>
                        <label htmlFor="cantidad">Cantidad:</label>
                        <select id="cantidad" onChange={(event) => setCantidad(Number(event.target.value)) }>
                            <option value="0">--Selecciona--</option>
                            <option value="1">1</option>
                            <option value="2">2</option>
                            <option value="3">3</option>
                            <option value="4">4</option>
                            <option value="5">5</option>
                        </select>
                        <input type="submit" value={'Agregar'} />
                    </form>
                </div>
            </div>
        </Layout>
    );
}


export default Producto;

export async function getServerSideProps({ query: { url } }) {
    const respuesta = await fetch(`${process.env.API_URL}/guitarras?filters[url]=${url}&populate=imagen`);
    const { data: guitarra } = await respuesta.json();
    return {
        props: {
            guitarra
        }
    }
}