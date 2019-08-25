// @flow
import React from 'react'
import { ScrollView } from 'react-native'
import ToolContent from '../containers/ToolContentContainer'
import { ScreenProvider } from '../../context/ScreenContext'
import { CategoryProvider, CategoryLock } from '../../context/CategoryContext'
import { ToolDataProvider } from '../../context/ToolDataProvider'
import { GoalProvider } from '../../context/GoalContext'
import { FormProvider } from '../../context/FormContext'
import {
  RecommendationsProvider,
  Recommendation,
} from '../../context/RecommendationsContext'
import Navigator from '../containers/NavigatorContainer'
import styles from '../styles'
import { StyleProvider } from '../../context/StyleContext'

type Props = {
  recommendations: Array<Recommendation>,
  categories: Array<CategoryLock>,
  FORM_KEYS: any,
  CHILDREN_KEYS: any,
  model: any,
  phase: string,
}

class RootToolComponent extends React.PureComponent<Props> {
  render() {
    const {
      recommendations,
      categories,
      FORM_KEYS,
      CHILDREN_KEYS,
      model,
      phase,
      ...rest
    } = this.props

    return (
      <ScrollView style={styles.scroll} contentContainerStyle={styles.scroll}>
        <ScreenProvider>
          <CategoryProvider categories={categories}>
            <RecommendationsProvider recommendations={recommendations}>
              <FormProvider
                FORM_KEYS={FORM_KEYS}
                CHILDREN_KEYS={CHILDREN_KEYS}
                model={model}
              >
                <GoalProvider>
                  <ToolDataProvider {...rest}>
                    <StyleProvider phase={phase}>
                      <Navigator />
                      <ToolContent />
                    </StyleProvider>
                  </ToolDataProvider>
                </GoalProvider>
              </FormProvider>
            </RecommendationsProvider>
          </CategoryProvider>
        </ScreenProvider>
      </ScrollView>
    )
  }
}

export default RootToolComponent
