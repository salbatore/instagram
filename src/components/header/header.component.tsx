import { Image, View } from 'react-native';

import { BurgerComponent } from './components/burger/burger.component';
import { HelpComponent } from './components/help/help.component';
import { HeaderStyles } from './header.styles';

export function HeaderComponent(properties: {
    toggleMenu: () => void
}) {
    return <View style={HeaderStyles.container}>
        <BurgerComponent onClick={properties.toggleMenu} />
        <Image
            style={HeaderStyles.logotype}
            source={require('../../../assets/logotype.png')}
            resizeMode="contain"
        />
        <HelpComponent />
    </View>;
}
