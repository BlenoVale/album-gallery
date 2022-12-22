import * as C from './styles';

type Props = {
    url: string,
    isbig: boolean
}
export const Photo = ({ url, isbig }: Props) => {
    return (
        <C.Container wtHover={isbig}>
            <C.IMG src={url} />
        </C.Container>
    );
}