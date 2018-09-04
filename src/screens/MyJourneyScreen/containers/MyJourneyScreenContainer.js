// @flow
import React                    from 'react';
import InteractionManager       from '../../../utils/InteractionManager';
import DefaultIndicator         from '../../../components/DefaultIndicator'
import MyJourneyScreenComponent from '../components/MyJourneyScreenComponent'

type State = {
    didFinishInitialAnimation: boolean
};


class MyJourneyScreenContainer extends React.PureComponent<any, State> {
    constructor(props) {
        super(props);
        this.state = {
            didFinishInitialAnimation: false,
        }
    }

    componentDidMount() {
        InteractionManager.runAfterInteractions(() => {
            this.setState({
                didFinishInitialAnimation: true,
            });
        });
    }

    render() {
        const { didFinishInitialAnimation } = this.state
        return (
            didFinishInitialAnimation 
                ? <MyJourneyScreenComponent />
                : <DefaultIndicator size="large"/>
        )
    }
}

export default MyJourneyScreenContainer;