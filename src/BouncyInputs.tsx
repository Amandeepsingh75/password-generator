import { View, Text } from 'react-native'
import React from 'react'
import BouncyCheckbox from "react-native-bouncy-checkbox";


const BouncyInputs = ({ title, stateVal, setStateVal }: { title: string, stateVal: boolean, setStateVal: (val: boolean) => void }) => {
    return (
        <View style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between', margin: 10 }}>
            <Text>Include {title}</Text>
            <BouncyCheckbox
                fillColor="#9342f5"
                isChecked={stateVal}
                onPress={() => setStateVal(!stateVal)}
            />
        </View>
    )
}

export default BouncyInputs