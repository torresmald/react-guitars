import Layout from '../components/layout';
import styles from '../styles/carrito.module.css';
function Carrito() {
    return (
        <Layout title='Carrito de Compra'>
            <main className='contenedor'>
                <h1 className='heading'>
                    Carrito de Compra
                </h1>
                <div>
                    <div>
                        <h2>Articulos</h2>
                    </div>
                    <aside>
                        <h3>Resumen del Pedido</h3>
                        <p>Total a Pagar: </p>
                    </aside>
                </div>
            </main>
        </Layout>
    );
}

export default Carrito;