import { Image, ScrollView, View, useWindowDimensions } from 'react-native';

import { GalleryConstants } from './gallery.constants';
import { type GalleryProperties } from './gallery.properties';
import { GalleryStyles } from './gallery.styles';

export function GalleryComponent(properties: GalleryProperties) {
    const { width } = useWindowDimensions();

    const imageWidth = Math.floor((width - (GalleryConstants.gap * (1 + GalleryConstants.itemsPerLine))) / GalleryConstants.itemsPerLine);

    return <ScrollView style={GalleryStyles.component} contentContainerStyle={GalleryStyles.container}>
        {
            properties.images.map((image,) => <Image
                style={[GalleryStyles.image, { width: imageWidth, height: imageWidth }]}
                source={{
                    uri: image.path
                }}
                key={image.id}
            />)
        }
    </ScrollView>;
}
