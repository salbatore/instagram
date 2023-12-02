import Axios from 'axios';
import { Alert } from 'react-native';

import { type ImageModel } from '~/src/models/image/image.model';

import { type ImageImagesType } from './images.types';

export function ImagesSource(): Promise<ImageModel[]> {
    const path = 'https://picsum.photos/v2/list';
    // get with axios
    return Axios.get(path).then((response) => {
        const images: ImageImagesType[] = response.data;
        return images.map((image) => ({
            id: image.id,
            name: image.author,
            path: image.download_url
        }));
    });
}

