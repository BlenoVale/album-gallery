import * as C from './styles';
import { useState, useEffect } from 'react';
import { Album } from '../../components/album';
import { AlbumType } from '../../types/AlbumType';
import { Loading } from '../../components/loading';
import { api } from '../../api';
import { Link } from 'react-router-dom';

export const Home = () => {
    const [albums, setAlbums] = useState<AlbumType[]>([]);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        loadAlbums();
    }, []);

    const loadAlbums = async () => {
        try {
            setLoading(true);
            let json = await api.getAllAlbums();

            setInterval(() => {
                setLoading(false);
            }, 1000);

            setAlbums(json);
        } catch (e) {
            alert('tratar o erro depois!!')
        }
    }

    return (
        <C.Container>
            {loading &&
                <Loading />
            }

            {!loading &&
                <>
                    Total de Albuns: {albums.length}
                    {albums.map((item, index) => (
                        <Link
                            key={index}
                            to={`/album/${item.id}`}
                            style={{ textDecoration: 'none' }}>
                            <Album>
                                {item}
                            </Album>
                        </Link>

                    ))}
                </>
            }
        </C.Container>
    );
}