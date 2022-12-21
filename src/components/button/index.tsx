import * as C from './styles';

type Props = {
    title: string;
    onClick: () => void
}
export const Button = ({ title, onClick }: Props) => {
    return (
        <C.Container>
            <C.Button onClick={onClick}>{title.toUpperCase()}</C.Button>
        </C.Container>
    );
}