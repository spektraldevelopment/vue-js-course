import axios from 'axios';
import qs from 'qs';

const CLIENT_ID = '8565239546e0563';
const ROOT_URL = 'https://api.imgur.com';

export default {
    login() {
        const querystring = {
            client_id: CLIENT_ID,
            response_type: 'token'
        };

        window.location = `${ROOT_URL}/oauth2/authorize?${qs.stringify(querystring)}`;
    },
    fetchImages(token) {
        return axios.get(`${ROOT_URL}/3/account/me/images`, {
            headers: {
                Authorization: `Bearer ${token}`
            }
        });
    },
    uploadImages(images, token) {
        //turn FileList into true array
        const promises = Array.from(images).map(image => {
            
            const formData = new FormData();
            //takes file reference and retrieves the actual file
            formData.append('image', image);

            return axios.post(`${ROOT_URL}/3/image`, formData, {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            });
        });

        //Make sure all promises have been resolved
        return Promise.all(promises);
    }
}