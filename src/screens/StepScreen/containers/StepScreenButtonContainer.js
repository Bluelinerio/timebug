import * as React from "react";
import Button from "../../../components/Button";
import User from "../../../containers/User";
import LoginWithFbButtonContainer from "../../../containers/LoginWithFbButtonContainer";
import BeginExerciseButtonContainer from "./BeginExerciseButtonContainer";

export default () => (
  <User
    renderWithUser={() => <BeginExerciseButtonContainer />}
    renderWithAuthenticating={() => (
      <Button backgroundColor="white" text="Loading..." disabled={true} />
    )}
    renderWithUndetermined={() => null}
    renderWithAnonymous={() => <LoginWithFbButtonContainer />}
  />
);
