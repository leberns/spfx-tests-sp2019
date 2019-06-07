import * as React from 'react';
import { TextField, autobind } from 'office-ui-fabric-react';
import { Context } from 'create-react-15-context';

import styles from './ItemForm.module.scss';
import { IItem } from '../../../../models/IItem';
import { ContextsRepositiory } from '../../contexts/ContextsRepositiory';

export interface IItemFormProps {}

export interface IItemFormState {
  item: IItem;
}

export default class ItemForm extends React.Component<
  IItemFormProps,
  IItemFormState
> {
  constructor(props: IItemFormProps) {
    super(props);
    this.state = {
      item: {
        id: 0,
        title: 'xxx'
      }
    };
  }

  public render(): React.ReactElement<IItemFormProps> {
    const itemContext: Context<string> = ContextsRepositiory.getItemContext();

    return (
      <itemContext.Provider value={this.state.item.title}>
        <div className={`ibr-spfx-test-sp2019 ${styles.itemForm}`}>
          <div className={styles.container}>
            <div className={styles.row}>
              <div className={styles.column}>
                <h2 className={styles.subTitle}>Item Form</h2>
                <div>
                  <span>id:</span>
                  {this.state.item.id.toString()}
                </div>
                <div className="ibr-selected-title">
                  <span>title:</span>
                  <TextField
                    onChange={this.handleChangeTitle}
                    value={this.state.item.title}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </itemContext.Provider>
    );
  }

  @autobind
  private handleChangeTitle(
    ev: React.FormEvent<HTMLInputElement>,
    newValue?: string
  ): void {
    this.setState({
      item: {
        id: this.state.item.id,
        title: newValue || ''
      }
    });
  }
}
