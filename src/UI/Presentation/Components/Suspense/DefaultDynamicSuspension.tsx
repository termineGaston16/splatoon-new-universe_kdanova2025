interface Props {
    countBlocks: number
}

const DefaultDynamicSuspension = (
    {
        countBlocks
    }: Props
) => {
    return (
        <ul role="status" aria-label='Contenido cargándose'>
            {
                Array.from({
                    length: countBlocks
                }).map((_, index) => (
                    <li
                        key={index}
                    >
                        <div data-testid='block-loading'></div>
                    </li>
                ))
            }
        </ul>
    )
}

export default DefaultDynamicSuspension;