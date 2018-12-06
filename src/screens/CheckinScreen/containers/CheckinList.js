//@flow
import { connect } from 'react-redux';
import { linkNavigation } from '../../../redux/actions/nav.actions';
import {
  changeCheckin,
  toggleCheckin,
} from '../../../redux/actions/checkin.actions';
import type {
  CheckinChangePayload,
  ToggleCheckinPayload,
} from '../../../redux/actions/checkin.actions';
import { cancelNotifications } from '../../../redux/actions/notifications.actions';
import selectors from '../../../redux/selectors';
import CheckinListComponent, {
  CheckinListComponentProps,
} from '../components/CheckinListComponent';

type CheckinListDispatchProps = {
  updateCheckin: CheckinChangePayload => any,
  linkNavigation: ({ link: string }) => any,
  cancelAllNotifications: () => any,
  toggleNotification: ToggleCheckinPayload => any,
};

type CheckingListStateProps = {
  checkins: any,
};

const mapStateToProps = (state: any): CheckingListStateProps => {
  const checkins = selectors.getCheckins(state);
  return {
    checkins,
  };
};

const mapDispatchToProps = (dispatch: () => any): CheckinListDispatchProps => ({
  updateCheckin: params => dispatch(changeCheckin(params)),
  linkNavigation: params => dispatch(linkNavigation(params)),
  cancelAllNotifications: () => dispatch(cancelNotifications()),
  toggleNotification: params => dispatch(toggleCheckin(params)),
});

const mergeProps = (
  stateProps: CheckingListStateProps,
  dispatchProps: CheckinListDispatchProps
): CheckinListComponentProps => {
  const { checkins } = stateProps;
  const {
    updateCheckin,
    cancelAllNotifications,
    linkNavigation,
    toggleNotification,
  } = dispatchProps;

  const handleLink = (payload: any) => {
    const { link } = payload;
    linkNavigation({ link });
  };

  const handleCheckinAction = (checkin: any) => {
    const { action: { type, payload } } = checkin;
    switch (type) {
    case 'link':
      return () => handleLink(payload);
    default:
      return () => null;
    }
  };

  const actualCheckins = Object.keys(checkins).reduce(
    (unlockedCheckins, key) => {
      const checkin = checkins[key];
      return [
        ...unlockedCheckins,
        {
          ...checkin,
          onLink: handleCheckinAction(checkin),
          onToggle: toggleNotification,
          onPress: updateCheckin,
          step: key,
        },
      ];
    },
    []
  );

  return {
    checkins: actualCheckins,
    cancelAllNotifications: __DEV__ ? cancelAllNotifications : null,
  };
};

export default connect(mapStateToProps, mapDispatchToProps, mergeProps)(
  CheckinListComponent
);
