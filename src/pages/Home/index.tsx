import * as C from './styles';
import { useState, useEffect } from 'react';
import { Album } from '../../components/album';
import { AlbumType } from '../../types/AlbumType';
import { Loading } from '../../components/loading';
import { api } from '../../api';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import qs from 'query-string';

export const Home = () => {
    const [albums, setAlbums] = useState<AlbumType[]>([]);
    const [totalAlbumns, setTotalAlbums] = useState<number>();
    const [totalPages, setTotalPages] = useState<number>();
    const [loading, setLoading] = useState<boolean>(false);
    const location = useLocation();
    const navigate = useNavigate();
    const ItensForPage = 7;

    const getActualPage = () => {
        const queryParams = qs.parse(location.search);
        const page = queryParams.page;

        return page ? Number(page) : undefined;
    }

    const [actualPage, setActualPage] = useState(
        getActualPage() || 1
    );

    useEffect(() => {
        loadAlbums();
    }, []);

    useEffect(() => {
        getTotalAlbuns();
        getTotalPages();
    }, [totalAlbumns]);

    useEffect(() => {
        loadAlbums();

        const queryParams = qs.parse(location.search);
        navigate({
            search: qs.stringify({
                ...queryParams,
                page: actualPage
            })
        });
    }, [actualPage]);

    const loadAlbums = async () => {
        try {
            setLoading(true);
            let jsonPageAlbums = await api.getAlbumToPagination(actualPage, ItensForPage);

            setInterval(() => {
                setLoading(false);
            }, 1000);

            setAlbums(jsonPageAlbums);
        } catch (error) {
            console.log('Errono no loadAlbums: ', error);
        }
    }

    const getTotalAlbuns = async () => {
        try {
            let JsonAllalbums = await api.getAllAlbums();
            setTotalAlbums(JsonAllalbums.length);
        } catch (error) {
            console.log('Errono no getTotalAlbuns: ', error);
        }
    }

    const getTotalPages = () => {
        let totalPages = 0;
        if (typeof totalAlbumns == 'number') {
            totalPages = totalAlbumns / ItensForPage;
            setTotalPages(Math.ceil(totalPages));
        }
    }

    return (
        <C.Container>
            {loading &&
                <Loading />
            }

            {!loading &&
                <>
                    <C.TotalAlbums>
                        Total de Albuns: {totalAlbumns}
                    </C.TotalAlbums>
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

                    <C.PaginationArea>
                        {Array(totalPages).fill('').map((item, index) => (
                            <C.Button
                                key={index}
                                onClick={() => setActualPage(index + 1)}>
                                {index + 1}
                            </C.Button>
                        ))}
                    </C.PaginationArea>
                </>
            }
        </C.Container>
    );
}