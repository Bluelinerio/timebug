// @flow
import React from 'react'
import Text from '2020_components/Text'

type InsightProps = {
  insightText: string,
  style: any,
  extraLines: number,
}

const Insight = ({ insightText, style = {}, extraLines = 0 }: InsightProps) => (
  <Text>
    <Text style={style.title}>{`Did You Know?\n`}</Text>
    <Text style={style.text}>{`${insightText}${Array(extraLines)
      .fill()
      .reduce(lines => `${lines}\n`, '')}`}</Text>
  </Text>
)

export default Insight
