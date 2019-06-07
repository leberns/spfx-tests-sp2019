import * as React from 'react';
import styles from './DataEntry.module.scss';
import { IDataEntryProps } from './IDataEntryProps';
import { escape } from '@microsoft/sp-lodash-subset';
import ItemDisplay from './itemDisplay/ItemDisplay';
import ItemForm from './itemForm/ItemForm';
import { ContextsRepositiory } from '../contexts/ContextsRepositiory';

export default class DataEntry extends React.Component < IDataEntryProps, {} > {
  public render(): React.ReactElement<IDataEntryProps> {
    return(
      <div className = { styles.dataEntry } >
        <div className={styles.container}>
          <div className={styles.row}>
            <div className={styles.column}>
              <span className={styles.title}>Tests with Context Polyfill</span>
              <ItemForm></ItemForm>
              <ItemDisplay></ItemDisplay>
            </div>
          </div>
        </div>
      </div >
    );
  }

  public componentDidMount() {
    ContextsRepositiory.create();
  }
}
