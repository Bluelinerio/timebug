import R from 'ramda';

const tcombPropLens = R.lensPath(['type', 'meta', 'props']);
const getTCombProps = model => {
  const props = R.view(tcombPropLens, model);
  if (!props) {
    throw new Error(`could not get props of model ${model}`);
  }
  return props;
};

if (__DEV__) {
  const test = {
    type: {
      meta: {
        props: {
          first: 1,
          id: 2,
        },
      },
    },
  };

  if (
    !R.equals(getTCombProps(test), {
      first: 1,
      id: 2,
    })
  ) {
    throw new Error('getTCombProps does not work properly');
  }
}

export const validKeysForModel = R.compose(
  R.filter(key => key !== 'id'),
  R.keys,
  getTCombProps
);

if (__DEV__) {
  const test = {
    type: {
      meta: {
        props: {
          first: 1,
          id: 2,
        },
      },
    },
  };
  if (!R.equals(validKeysForModel(test), ['first'])) {
    throw new Error('validKeysForModel does not work properly');
  }
}

const isValueAValidTCombType = (value, key, type) => {
  const res = value.type[key] === type[key].displayName;
  if (!res) {
    console.warn(
      `expected value of ${key} to be of type ${
        type.displayName
      } got ${JSON.stringify(value[key])}`
    );
  }
  return res;
};

// This depends on the fact that the only additional keys to the structure are timeStamp and type
const mapValueTypeKeysToActualValues = (value = {}) => {
  const filterMetaKeys = key => !['timeStamp', 'type'].find(k => k === key);

  const typeSpec = value && value.type && Object.keys(value.type);

  if (!typeSpec) return {};

  const typeValues = Object.keys(value)
    .filter(filterMetaKeys)
    .reduce((newValue, key, index) => {
      return {
        ...newValue,
        [typeSpec[index]]: value[key],
      };
    }, {});

  return {
    ...value,
    ...typeValues,
  };
};

export const isTCombValueValid = (value: any, model: any) => (key: string) => {
  const props = getTCombProps(model);
  return props[key] && value[key] && isValueAValidTCombType(value, key, props);
};

export const removeIvalidValuesInsteadOfDoingAnyMigrationForNow = (
  model,
  value = {}
) => {
  const validKeys = validKeysForModel(model);
  const valueWithActualKeyNames = mapValueTypeKeysToActualValues(value);
  const mapKeysWithValidTCombValues = isTCombValueValid(
    valueWithActualKeyNames,
    model
  );
  const keysWithValidValues = validKeys.filter(mapKeysWithValidTCombValues);

  return keysWithValidValues.reduce((sum, key) => {
    return {
      ...sum,
      [key]: valueWithActualKeyNames[key],
    };
  }, {});
};
