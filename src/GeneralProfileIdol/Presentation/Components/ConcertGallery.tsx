interface ConcertGallery {
    description: string,
    concerts: {
        link: string,
        coverUrl: string,
        coverAlt: string,
        nameConcert: string,
        dateConcert: string
    }[]
}

const ConcertGallery = ({
    description,
    concerts
}: ConcertGallery) => {
    return (
        <section>
            <h3>¡Conciertos!</h3>
            <p>{description}</p>

            <ul>
                {
                    concerts.map((concert, index) => {
                        const {
                            coverAlt,
                            coverUrl,
                            dateConcert,
                            link,
                            nameConcert
                        } = concert;

                        return (
                            <li
                                key={index}
                            >
                                <a
                                    href={link}
                                    target="_blank"
                                    rel="noopener noreferrer">
                                    <img
                                        src={coverUrl}
                                        alt={coverAlt}
                                        loading="lazy"
                                    />
                                </a>
                                <h4>{nameConcert}</h4>
                                <p>{dateConcert}</p>
                            </li>
                        )
                    })
                }
            </ul>
        </section>
    )
}

export default ConcertGallery;