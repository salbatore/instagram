import { Text, View } from 'react-native';

import { HelpStyles } from './help.styles';

export function HelpComponent() {
    return <View style={HelpStyles.container}>
        <Text style={HelpStyles.text}>?</Text>
    </View>;
}
