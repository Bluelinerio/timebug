//@flow
import React from 'react';
import { View } from 'react-native';
import ListElement from '../../../../components/ListElement';
import { LockedEntryWithCheck } from '../../../../components/LockedEntry';
import GenericHeader, {
  HeaderProps,
} from '../../../../components/GenericHeader';
import styles from '../../../../styles';
import { mediumGray, gray400 } from '../../../../../../constants/colors';

type FormComponentProps = {
  elements: [any],
  header: HeaderProps,
};

const styleForEvenElements = {
  row: {
    backgroundColor: mediumGray,
  },
};

const styleForUnevenElements = {
  row: {
    backgroundColor: gray400,
  },
};

const isEven = (num: number): boolean => num % 2 === 0;

const FormComponent = (props: FormComponentProps) => {
  const { elements, header } = props;
  return (
    <View style={[styles.container, styles.tableContainer]}>
      <LockedEntryWithCheck check={() => elements && elements.length > 0}>
        <GenericHeader {...header} />
        {elements &&
          elements.map((element, index) => (
            <ListElement
              key={index}
              {...props}
              {...element}
              style={
                !isEven(index) ? styleForUnevenElements : styleForEvenElements
              }
            />
          ))}
      </LockedEntryWithCheck>
    </View>
  );
};

export default FormComponent;
