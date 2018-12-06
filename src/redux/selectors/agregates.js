import R from 'ramda';
import { NavigationReducerKeys } from '../reducers/agregates.navigation.reducer';
import { AgregateReducerKeys } from '../reducers/agregates.reducer';

export const stepGuideLens = R.lensPath([
  AgregateReducerKeys.agregate,
  NavigationReducerKeys.pageVisits,
  NavigationReducerKeys.pages.stepGuide,
]);
export const stepWorkbookLens = R.lensPath([
  AgregateReducerKeys.agregate,
  NavigationReducerKeys.pageVisits,
  NavigationReducerKeys.pages.stepWorkbook,
]);

export const sortPageViewByKey = prop =>
  R.sort((a, b) => b[1][prop] - a[1][prop]);
export const sortPageViewByStepID = R.sort((a, b) => a[0] - b[0]);
export const sortPageViewTime = sortPageViewByKey('last');
export const sortPageViewCounts = sortPageViewByKey('count');

export const packPairs = key => array => ({
  [key]: array[0],
  ...array[1],
});

export const stepGuideSortedByTime = R.compose(
  R.map(packPairs('stepId')),
  sortPageViewTime,
  R.toPairs,
  R.view(stepGuideLens)
);

export const stepGuideSortedByCounts = R.compose(
  R.map(packPairs('stepId')),
  sortPageViewCounts,
  R.toPairs,
  R.view(stepGuideLens)
);

export const lastStepGuideVisited = R.compose(R.nth(0), stepGuideSortedByTime);
export const mostFrequentStepGuideVisited = R.compose(
  R.nth(0),
  stepGuideSortedByCounts
);

export const stepWorkbookSortedByTime = R.compose(
  R.map(packPairs('stepId')),
  sortPageViewTime,
  R.toPairs,
  R.view(stepWorkbookLens)
);

export const stepWorkbookSortedByCounts = R.compose(
  R.map(packPairs('stepId')),
  sortPageViewCounts,
  R.toPairs,
  R.view(stepWorkbookLens)
);

export const lastStepWorkbookVisited = R.compose(
  R.nth(0),
  stepWorkbookSortedByTime
);
export const mostFrequentStepWorkbookVisited = R.compose(
  R.nth(0),
  stepWorkbookSortedByCounts
);
