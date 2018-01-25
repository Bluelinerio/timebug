// @flow
import { NavigationActions } from "react-navigation"
import type { NavigationScreenProp } from "react-navigation/src/TypeDefinition";

export const resetAction = (routeName: string, key: string | null = null) => NavigationActions.reset({
    index: 0,
    key,
    actions: [
        NavigationActions.navigate({ routeName })
    ]
})