import { Link } from "react-router-dom";

export default function MainFooter() {
    return (
        <footer>
            <p>
                Fan-page by: <span>KDA/NOVA</span>
                <span>Esta página fue hecha sin fines de lucros.</span>
                Todos los derechos pertenecen a Nintendo y a Splatoon company.
                Imágenes, información, música entre otros archivos fueron
                obtenidos de sitios oficiales y de sitios hechos por la comunidad.
                Desde ya, muchas gracias.
            </p>

            <Link
                to={'/galeria'}
            >
                Acceder a la Galería
            </Link>

            <table>
                <tr>
                    <th>Descubre Splatoon</th>
                    <th>Descubre Nintendo</th>
                </tr>
                <tr>
                    <td>
                        <a
                            target="_blank"
                            href="https://x.com/SplatoonJP"
                        >Twitter
                        </a>
                    </td>
                    <td>
                        <a
                            target="_blank"
                            href="https://x.com/Nintendo"
                        >Twitter
                        </a>
                    </td>
                </tr>
                <tr>
                    <td>
                        <a
                            target="_blank"
                            href="https://www.nintendo.com/jp/character/splatoon/en/index.html"
                        >Sitio Oficial
                        </a>
                    </td>
                    <td>
                        <a
                            target="_blank"
                            href="https://www.youtube.com/@NintendoAmerica/videos"
                        >Youtuber
                        </a>
                    </td>
                </tr>
                <tr>
                    <td>
                        <a
                            target="_blank"
                            href="https://www.nintendo.com/es-ar/store/products/splatoon-3-switch/"
                        >Comprar Juego
                        </a>
                    </td>
                    <td>
                        <a
                            target="_blank"
                            href="https://www.nintendo.com/jp/index.html"
                        >Nintendo Oficial Site
                        </a>
                    </td>
                </tr>
                <tr>
                    <td></td>
                    <td>
                        <a
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