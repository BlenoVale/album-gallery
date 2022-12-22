import { useEffect, useState } from 'react';
import * as C from './styles';
import { api } from '../../api';
import { PhotoType } from '../../types/PhotoType';
import { Loading } from '../../components/loading';
import { useParams, useNavigate, Link } from 'react-router-dom';
import { Photo } from '../../components/photo';
import { AlbumType } from '../../types/AlbumType';
import { Button } from '../../components/button';


export const AlbumPage = () => {
    const [photos, setPhotos] = useState<PhotoType[]>([]);
    const [album, setAlbum] = useState<AlbumType>();
    const [loading, setLoading] = useState(false);
    const params = useParams();
    const navigate = useNavigate();

    useEffect(() => {
        let albumId = params.slug;
        if (albumId) {
            loadPhotos(parseInt(albumId));
        }

    }, []);

    const loadPhotos = async (albumId: number) => {
        try {
            setLoading(true);
            let JsonAlbum = await api.getAlbum(albumId);
            let jsonPhotos = await api.getallPhotos(albumId);

            setInterval(() => {
                setLoading(false);
            }, 1000);

            setAlbum(JsonAlbum);
            setPhotos(jsonPhotos);
        } catch (error) {
            console.log('Erro no loadPhotos')
        }
    }

    const handleBackButton = () => {
        navigate(-1);
    }

    return (
        <C.Container>

            <Button title='voltar' onClick={handleBackButton} />

            {loading &&
                <Loading />
            }

            {!loading &&
                <>
                    <C.ContentArea>
                        <C.AlbumTitle>{album?.title}</C.AlbumTitle>
                        <C.PhotosArea>
                            {photos.map((item, index) => (
                                <Link
                                    key={index}
                                    to={`/foto/${item.id}`}
                                    style={{ textDecoration: 'none' }}>
                                    <Photo url={item.thumbnailUrl} isbig={false}/>
                                </Link>
                            ))}
                        </C.PhotosArea>
                    </C.ContentArea>
                </>
            }
        </C.Container>
    );
}