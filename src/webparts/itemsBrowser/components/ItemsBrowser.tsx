import * as React from 'react';
import {
  DetailsList,
  DetailsListLayoutMode,
  CheckboxVisibility,
  SelectionMode,
  TextField,
  CommandBar
} from 'office-ui-fabric-react';
import styles from './ItemsBrowser.module.scss';
import { IItemsBrowserProps } from './IItemsBrowserProps';
import { IItemsBrowserState } from './IItemsBrowserState';
import { IItem } from '../../../models/IItem';
import Commands from './commands/CommandsBlock';

export default class ItemsBrowser extends React.Component<IItemsBrowserProps, IItemsBrowserState> {
  private image: string = require('../../../assets/Octocat_GitHub_Mascot.png');

  private listColumns: any[] = [
    {
      key: 'id',
      name: 'Id',
      fieldName: 'id',
      width: 50,
      minWidth: 40,
      maxWidth: 50,
      isResizable: true
    },
    {
      key: 'title',
      name: 'Title',
      fieldName: 'title',
      width: 170,
      minWidth: 100,
      maxWidth: 120,
      isResizable: true
    }
  ];

  private defaultSelection: IItem = {
    id: -1,
    title: '(deselected)'
  };

  constructor(props: IItemsBrowserProps) {
    super(props);
    this.state = {
      selectedItem: {
        id: 0,
        title: '(none)'
      }
    };
  }

  public render(): React.ReactElement<IItemsBrowserProps> {
    return (
      <div className={`ibr-spfx-test-sp2019 ${styles.itemsBrowser}`}>
        <div className={styles.container}>
          <div className={styles.row}>
            <div className={styles.column}>
              <h2 className={styles.title}>Welcome!</h2>
              <p className={styles.subTitle}>
                The selected item appears below (
                <a
                  className="ibr-deselect"
                  href="#"
                  onClick={() => {
                    this.setState({ selectedItem: this.defaultSelection });
                  }}
                >
                  Deselect
                </a>
                )
              </p>
              <h3>Items</h3>
              <DetailsList
                skipViewportMeasures={this.props.performingTests}
                onShouldVirtualize={() => false}
                items={this.props.items}
                columns={this.listColumns}
                setKey="set"
                checkboxVisibility={CheckboxVisibility.onHover}
                selectionMode={SelectionMode.single}
                selectionPreservedOnEmptyClick={true}
                layoutMode={DetailsListLayoutMode.fixedColumns}
                compact={true}
                onActiveItemChanged={item => this.onSelectedItemChanged(item)}
              />
              <h3>Selected item</h3>
              <div>
                <span>id: </span>
                <TextField value={this.state.selectedItem.id.toString()} />
              </div>
              <div className="ibr-selected-title">
                <span>title: </span>
                <TextField value={this.state.selectedItem.title} />
              </div>
              <div>
                <Commands />
              </div>
              <div>
                <div>Image:</div>
                <img src={this.image} />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  public onSelectedItemChanged(item: any): void {
    this.setState({ selectedItem: item });
  }
}
