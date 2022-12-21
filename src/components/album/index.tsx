import { AlbumType } from '../../types/AlbumType';
import * as C from './styles';

type Props = {
    children: AlbumType
}
export const Album = ({ children }: Props) => {

    return (
        <C.Container>
            {children.title}
        </C.Container>
    );
}