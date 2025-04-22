import { Link } from "react-router-dom";
import './styles/mainFooter.css'

export default function MainFooter() {
    return (
        <footer className="MainFooter">
            <p className="MainFooter__description">
                Fan-page by: <span className="MainFooter__me">KDA/NOVA</span> <br />
                <span className="MainFooter__alert">Esta página fue hecha sin fines de lucros.</span> <br />
                Todos los derechos pertenecen a Nintendo y a Splatoon company.
                Imágenes, información, música entre otros archivos fueron
                obtenidos de sitios oficiales y de sitios hechos por la comunidad.
                Desde ya, muchas gracias. <br /> <br />

                <Link
                    className="MainFooter__goGallery"
                    to={'/galeria'}
                >
                    Acceder a la Galería
                </Link>
            </p>

            <table className="MainFooter__recognitions">
                <tr>
                    <th className="MainFooter__recognitions__title">Splatoon</th>
                    <th className="MainFooter__recognitions__title">Nintendo</th>
                </tr>
                <tr>
                    <td>
                        <a
                            rel="noreferrer"
                            className="MainFooter__recognitions__title__link"
                            target="_blank"
                            href="https://x.com/SplatoonJP"
                        >Twitter
                        </a>
                    </td>
                    <td>
                        <a
                            rel="noreferrer"
                            className="MainFooter__recognitions__title__link"
                            target="_blank"
                            href="https://x.com/Nintendo"
                        >Twitter
                        </a>
                    </td>
                </tr>
                <tr>
                    <td>
                        <a
                            rel="noreferrer"
                            className="MainFooter__recognitions__title__link"
                            target="_blank"
                            href="https://www.nintendo.com/jp/character/splatoon/en/index.html"
                        >Sitio Oficial
                        </a>
                    </td>
                    <td>
                        <a
                            rel="noreferrer"
                            className="MainFooter__recognitions__title__link"
                            target="_blank"
                            href="https://www.youtube.com/@NintendoAmerica/videos"
                        >Youtuber
                        </a>
                    </td>
                </tr>
                <tr>
                    <td>
                        <a
                            rel="noreferrer"
                            className="MainFooter__recognitions__title__link"
                            target="_blank"
                            href="https://www.nintendo.com/es-ar/store/products/splatoon-3-switch/"
                        >Comprar Juego
                        </a>
                    </td>
                    <td>
                        <a
                            rel="noreferrer"
                            className="MainFooter__recognitions__title__link"
                            target="_blank"
                            href="https://www.nintendo.com/jp/index.html"
                        >Oficial Site
                        </a>
                    </td>
                </tr>
                <tr>
                    <td></td>
                    <td>
                        <a
                            rel="noreferrer"
                            className="MainFooter__recognitions__title__link"
                            target="_blank"
                            href="https://www.nintendo.com/jp/about_hp.html"
                        >Website Policy
                        </a>
                    </td>
                </tr>
                <tr>
                    <td></td>
                    <td>
                        <a
                            rel="noreferrer"
                            className="MainFooter__recognitions__title__link"
                            target="_blank"
                            href="https://www.nintendo.com/es-ar/switch/"
                        >Nintendo Switch
                        </a>
                    </td>
                </tr>
            </ table>

        </footer>
    )
}