import React from 'react';
import {Option as OptionMDL} from 'react-mdl-extra';
import styles from './Option.css';

const Option = (props) => {
  const {children, ...attrs} = props;
  return (
    <OptionMDL className={styles.Option} {...attrs}>
      {children}
    </OptionMDL>
  );
};

export default Option;
