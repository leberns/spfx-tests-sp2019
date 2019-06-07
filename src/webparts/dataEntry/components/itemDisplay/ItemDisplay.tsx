import * as React from 'react';

import styles from './ItemDisplay.module.scss';
import { ContextsRepositiory } from '../../contexts/ContextsRepositiory';

export interface IItemDisplayProps {
}

export interface IItemDisplayState {
}

export default class ItemDisplay extends React.Component < IItemDisplayProps, IItemDisplayState > {

  constructor(props: IItemDisplayProps) {
    super(props);
  }

  public render(): React.ReactElement<IItemDisplayProps> {

    const itemContext = ContextsRepositiory.getItemContext();

    return(
      <itemContext.Consumer>
        {itemFromContext => (
            <div className = {`ibr-spfx-test-sp2019 ${styles.itemDisplay}`} >
            <div className={styles.container}>
              <div className={styles.row}>
                <div className={styles.column}>
                  <h2>Item Display</h2>
                  <div>
                      <span>id: </span><span>{0}</span>
                    </div>
                    <div className="ibr-selected-title">
                      <span>title: </span><span>{itemFromContext}</span>
                    </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </itemContext.Consumer>
    );
  }
}
