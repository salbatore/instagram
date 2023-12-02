import { StyleSheet } from 'react-native';

import { GalleryConstants } from './gallery.constants';

export const GalleryStyles = StyleSheet.create({
    component: {
        flex: 1,
        backgroundColor: '#eee'
    },
    container: {
        flex: 1,
        flexDirection: 'row',
        flexWrap: 'wrap',
        gap: GalleryConstants.gap,
        padding: GalleryConstants.gap
    },
    image: {
        borderRadius: 4
    }
});
