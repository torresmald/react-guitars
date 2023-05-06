import Layout from "../components/layout";
import Image from "next/future/image";
import styles from '../styles/nosostros.module.css';
function Nosotros() {
  return (
    <>
      <Layout title={"Nosotros"}>
        <main className="contendor">
          <h1 className="heading">Nosotros</h1>
          <div className={styles.contenido}>
          <Image alt="Imagen sobre Nosotros" src='/img/nosotros.jpg' width={1000} height={800}/> 
            <div>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla
                lacinia, massa vel convallis eleifend, diam lacus consectetur
                ex, in luctus velit velit vitae neque. Lorem ipsum dolor sit
                amet, consectetur adipiscing elit. Maecenas ex velit, commodo eu
                dolor eget, accumsan commodo arcu. Suspendisse potenti. Aliquam
                id justo et magna egestas feugiat et lobortis orci. Proin
                sodales ante eget posuere egestas. Proin lacus libero,
                ullamcorper nec ligula at, facilisis suscipit arcu. 
              </p>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla
                lacinia, massa vel convallis eleifend, diam lacus consectetur
                ex, in luctus velit velit vitae neque. Lorem ipsum dolor sit
                amet, consectetur adipiscing elit. Maecenas ex velit, commodo eu
                dolor eget, accumsan commodo arcu. Suspendisse potenti. Aliquam
                id justo et magna egestas feugiat et lobortis orci.
              </p>
            </div>
          </div>
        </main>
      </Layout>
    </>
  );
}

export default Nosotros;
