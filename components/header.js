import Image from 'next/future/image';
import Link from 'next/link';
import styles from '../styles/header.module.css';
import { useRouter } from 'next/router';
function Header() {
    const router = useRouter()
    return (
        <header className={styles.header}>
            <div className={`contenedor ${styles.barra}`}>
                <Link href={'/'}>
                    <a className='image'>
                        <Image src="/img/logo.svg" alt="Logo" width={300} height={40} />
                    </a>
                </Link>
                <nav className={styles.navegacion}>
                    <Link href={'/'}>
                        <a className={router.pathname === '/' ? styles.active : ''}>Inicio</a>
                    </Link>
                    <Link href={'/nosotros'}>
                        <a className={router.pathname === '/nosotros' ? styles.active : ''}>Nosotros</a>
                    </Link>
                    <Link href={'/blog'}>
                        <a className={router.pathname === '/blog' ? styles.active : ''}>Blog</a>
                    </Link>
                    <Link href={'/tienda'}>
                        <a className={router.pathname === '/tienda' ? styles.active : ''}>Tienda</a>
                    </Link>
                    <Link href={'/carrito'}>
                        <a>
                            <Image width={30} height={25} src={'/img/carrito.png'} alt='Carrito' />
                        </a>
                    </Link>
                </nav>
            </div>
        </header>
    );
}

export default Header;