import * as React from 'react'
import { connect } from 'react-redux'
import Svg,{
  Circle,
  G,
} from 'react-native-svg';

import PhaseProgress            from '../components/PhaseProgress';
import selectors                from '../redux/selectors';
import { phaseForStepAtIndex }  from '../services/cms'
import { renderContainer }      from '../components/PhaseProgress/defaults'
import Grid                     from '../components/Grid';
import type { GridProps }       from '../components/Grid';

const circle = 0.3
const circleRatio = 0.4
const spaceXRatio = 0.2
const spaceYRatio = 0.1
const cornerRadiusRatio = 0.5

const mapStateToProps = (state) => ({
  completedStepIndices: selectors.completedStepIds(state).map(i => i-1),
  dummyCompletedStepIndices: [0,1,2,3,4,9, 10, 23, 23],
  phaseColors: selectors.phaseColors(state)
})

const merge = (stateProps, dispatchProps, ownProps): GridProps => ({
  ...stateProps,
  ...dispatchProps,
  ...ownProps,
  columns:10,
  rows: 3,
  aspectRatio: 1,
  options: {
    spaceX: ({ tileWidth }) => Math.floor(tileWidth * spaceXRatio),
    spaceY: ({ height }) => Math.floor(height * spaceYRatio),
    renderItem: ({width, height}) => ({
      rx: Math.floor(Math.min(width, height) * cornerRadiusRatio)
    })
  },
  renderContainer: renderContainer,
  renderContainer: (props: GridContainerProps) => (
    <Svg width={props.width} height={props.height} style={props.style || {}}>
      <G id="GridContainerDefault" stroke="none" stroke-widith="1" fill="none" fill-rule="evenodd">
        {props.children}
      </G>
    </Svg>
  ),
  renderItem: (props: GridItemProps) => (
    <Circle 
      key={props.index.toString()} 
      id={props.index.toString()} 
      cx={(props.x + (props.width * circle)).toString()}
      cy={(props.y + (props.height * circle)).toString()}
      r={ (Math.min(props.width, props.height) 
        * circle 
        * (
            (ownProps.useDummyData 
              ? stateProps.dummyCompletedStepIndices 
              : stateProps.completedStepIndices
            ).includes(props.index) 
          ? 1 
          : circleRatio
        )
        ).toString() 
      }
      fill={(
        (
          ownProps.useDummyData 
          ? stateProps.dummyCompletedStepIndices 
          : stateProps.completedStepIndices
        ).includes(props.index) 
          ? stateProps.phaseColors[phaseForStepAtIndex(props.index)] 
          : '#E9E9E9' 
      )
    }
    />
  )
})

export default connect(mapStateToProps, null, merge)(Grid)


