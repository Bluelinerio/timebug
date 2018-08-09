import React from 'react'
import { Text } from 'react-native';

const Insight = ({ insightText, style, extraLines = 0 }) => (
        <Text>
            <Text style={style.title}>{`Did You Know?\n`}</Text>
            <Text style={style.text}>{`${insightText}${Array(extraLines).fill().reduce((lines, line) => `${lines}\n`,'')}`}</Text>
        </Text>
)

export default Insight