import * as C from './styles';
import loadingGif from '../../images/loading.gif';

export const Loading = () => {
    return (
        <C.Container>
            <C.LoadingIMG src={loadingGif} />
        </C.Container>
    );
}