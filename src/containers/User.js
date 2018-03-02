// @flow
import * as React from "react";
import { View } from "react-native";
import { connect } from "react-redux";
import { getUserState } from "../redux/rootReducer";
import {
  UNDETERMINED,
  ANONYMOUS,
  AUTHENTICATING
} from "../services/apollo/models";
import selectors from "../redux/selectors";
import { selectLimit } from "async";

type Props = {
  renderWithState: (
    state: UNDETERMINED | ANONYMOUS | AUTHENTICATING
  ) => React.Node,
  renderWithAnonymous: () => React.Node,
  renderWithUser: (props: {}) => React.Node,
  renderWithAuthenticating: () => React.Node,
  renderWithUndetermined: () => React.Node
};

const mapStateToProps = state => ({
  userState: getUserState(state)
});

export default connect(mapStateToProps)(
  ({
    renderWithState,
    renderWithAnonymous,
    renderWithUser,
    renderWithAuthenticating,
    renderWithUndetermined,
    userState,
    ...rest
  }) => {
    if (typeof userState === "string") {
      if (renderWithState) return renderWithState(userState);
      if (userState === UNDETERMINED && renderWithUndetermined)
        return renderWithUndetermined();
      if (userState === ANONYMOUS && renderWithAnonymous)
        return renderWithAnonymous();
      if (userState === AUTHENTICATING && renderWithAuthenticating)
        return renderWithAuthenticating();
    }
    if (userState && typeof userState === "object" && renderWithUser)
      return renderWithUser(userState);
    return null;
  }
);
