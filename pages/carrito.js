import { useState, useEffect } from "react";
import Layout from "../components/layout";
import styles from "../styles/carrito.module.css";
import Image from "next/future/image";
function Carrito({ carrito, actualizarCantidad, eliminarProducto }) {
  const [total, setTotal] = useState(0);
    useEffect(() => {
        const sumaTotal = carrito.reduce((acc, current) => {
            return acc + (current.cantidad * current.precio)   
        }, 0)
        setTotal(sumaTotal);
    }, [carrito])
  return (
    <Layout title="Carrito de Compra">
      <main className="contenedor">
        <h1 className="heading">Carrito de Compra</h1>
        <div className={styles.contenido}>
          <div className={styles.carrito}>
            <h2>Articulos</h2>
            {carrito.length === 0
              ? "No hay articulos"
              : carrito.map((producto) => (
                  <div key={producto.div} className={styles.producto}>
                    <div>
                      <Image
                        width={250}
                        height={400}
                        src={producto.imagen}
                        alt="Producto"
                      />
                    </div>
                    <div>
                      <p className={styles.nombre}>{producto.nombre}</p>
                      <div className={styles.cantidad}>
                        <p>Cantidad: </p>
                        <select
                          className={styles.select}
                          onChange={(event) =>
                            actualizarCantidad({
                              id: producto.id,
                              cantidad: event.target.value,
                            })
                          }
                          value={producto.cantidad}
                        >
                          <option value="1">1</option>
                          <option value="2">2</option>
                          <option value="3">3</option>
                          <option value="4">4</option>
                          <option value="5">5</option>
                        </select>
                      </div>
                      <p className={styles.precio}>
                        <span>{producto.precio}€</span>
                      </p>
                      <p className={styles.subtotal}>
                        Subtotal:{" "}
                        <span>{producto.cantidad * producto.precio}€</span>
                      </p>
                    </div>
                    <button className={styles.eliminar} type="button" onClick={() => eliminarProducto(producto.id)}>X</button>
                  </div>
                ))}
          </div>
          <aside className={styles.resumen}>
            <h3>Resumen del Pedido</h3>
            <p>Total a Pagar:{total}€</p>
          </aside>
        </div>
      </main>
    </Layout>
  );
}

export default Carrito;
