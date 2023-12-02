import { TouchableOpacity, View } from 'react-native';

import { BurgerStyles } from './burger.styles';

export function BurgerComponent(properties: {
    onClick: () => void
}) {
    return <TouchableOpacity style={BurgerStyles.container} onPress={properties.onClick}>
        <View style={BurgerStyles.line} />
        <View style={BurgerStyles.line} />
        <View style={BurgerStyles.line} />
    </TouchableOpacity>;
}
