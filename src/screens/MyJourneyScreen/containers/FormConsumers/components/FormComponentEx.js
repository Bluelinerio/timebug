import React from 'react'
import { View, Text } from 'react-native'

const FormComponentExample = ({ data, injected, ...rest }) => {
    return (
        <View>
            <Text style={{ fontWeight: '700', fontSize: 20 }}>
                { data.subtitle }
            </Text>
            <Text>
                { data.text }
            </Text>
            {
                injected &&
                    <Text>
                        This was injected { injected }
                    </Text>
            }
        </View>
    )
}

export default FormComponentExample