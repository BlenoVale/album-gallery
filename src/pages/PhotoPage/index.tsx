import * as C from './styles';
import { useState, useEffect } from 'react';
import { Button } from '../../components/button';
import { useParams, useNavigate } from 'react-router-dom';
import { PhotoType } from '../../types/PhotoType';
import { api } from '../../api';
import { Loading } from '../../components/loading';
import { Photo } from '../../components/photo';

export const PhotoPage = () => {
    const [photo, setPhoto] = useState<PhotoType>();
    const [loading, setLoading] = useState(false);
    const params = useParams();
    const navigate = useNavigate();

    useEffect(() => {
        let id = params.slug;
        if (id) {
            loadPhotoContent(parseInt(id));
        }
    }, []);

    const loadPhotoContent = async (id: number) => {
        try {
            setLoading(true);
            let json = await api.getPhoto(id);

            setInterval(() => {
                setLoading(false);
            }, 1000);

            console.log(json);
            setPhoto(json);
        } catch (error) {
            console.log('Erro no loadPhotoContent')
        }
    }

    const handleBackButton = () => {
        navigate(-1);
    }

    return (
        <C.Container>
            <Button title='voltar' onClick={handleBackButton} />

            {loading && <Loading />}

            {!loading &&
                <>
                    <C.Title>{photo?.title}</C.Title>
                    <Photo url={photo?.url} isbig={true}/>
                </>
            }
        </C.Container>
    );
}