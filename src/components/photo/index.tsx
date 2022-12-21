import * as C from './styles';

type Props = {
    url: string
}
export const Photo = ({url}:Props) => {
    return (
        <C.Container>
            <C.IMG src={url} />
        </C.Container>
    );
}