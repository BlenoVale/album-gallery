import axios from 'axios';

const http = axios.create({
    baseURL: 'https://jsonplaceholder.typicode.com'
});

export const api = {
    getAllAlbums: async () => {
        let response = await http.get('/albums');
        return response.data;

        /*
        let response = await fetch(`${BASE}/albums`);
        let json = await response.json();
        return json;
        */
    },

    getAlbum: async (id: number) => {
        let response = await http.get('/albums', { params: { id } });
        return response.data[0];
    },

    getallPhotos: async (albumId: number) => {
        let response = await http.get('/photos', { params: { albumId } });
        return response.data;
    },

    getPhoto: async (id: number) => {
        let response = await http.get('/photos', { params: { id } });
        return response.data[0];
    }

}