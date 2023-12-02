import { useEffect, useState } from 'react';
import { Text, TouchableOpacity, View } from 'react-native';

import { GalleryComponent } from '~/src/components/gallery/gallery.component';
import { type ImageModel } from '~/src/models/image/image.model';
import { ImagesSource } from '~/src/sources/images/images.source';

import { HeaderComponent } from '../../components/header/header.component';


export function HomeScene() {
    const [images, setImages] = useState<ImageModel[]>([]);
    const [menu, setMenu] = useState<boolean>(false);


    const loadImages = async () => {
        const loadImages = await ImagesSource();
        setImages(loadImages);
    };

    useEffect(() => {
        loadImages();
    }, []);

    return <>
        <HeaderComponent toggleMenu={() => {
            setMenu(!menu);
        }}
        />
        <GalleryComponent images={images} />
        {
            menu && <>
                <TouchableOpacity
                    onPress={() => {
                        setMenu(false);
                    }}
                    style={{ position: 'absolute', top: 0, left: 0, right: 0, zIndex: 100, bottom: 0, backgroundColor: 'rgba(0,0,0,0.5)' }}
                />
                <View style={{ position: 'absolute', top: 0, left: 0, width: '70%', zIndex: 1000, bottom: 0, backgroundColor: '#fff' }}>
                    <TouchableOpacity
                        style={{
                            height: 40,
                            width: 40,
                            borderRadius: 100,
                            backgroundColor: '#000',
                            margin: 50
                        }}
                        onPress={() => {
                            setMenu(false);
                        }}
                    >
                        <Text style={{
                            color: '#fff',
                            fontSize: 30,
                            textAlign: 'center',
                            lineHeight: 40

                        }}
                        >X</Text>
                    </TouchableOpacity>
                </View>

            </>
        }
    </>;
}
