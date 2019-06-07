import * as React from 'react';
import {
  DetailsList,
  DetailsListLayoutMode,
  CheckboxVisibility,
  SelectionMode,
  TextField
 } from 'office-ui-fabric-react';
import styles from './ItemsBrowser.module.scss';
import { IItemsBrowserProps } from './IItemsBrowserProps';
import { IItemsBrowserState } from './IItemsBrowserState';
import { IItem } from '../../../models/IItem';
import DataProvider from './dataProvider/DataProvider';

export default class ItemsBrowser extends React.Component < IItemsBrowserProps, IItemsBrowserState > {

  private listColumns: any[] = [
    {
      key: 'title',
      name: 'Title',
      fieldName: 'title',
      width: 170,
      minWidth: 100,
      maxWidth: 170,
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
    return(
      <div className = {`ibr-spfx-test-sp2019 ${styles.itemsBrowser}`} >
        <div className={styles.container}>
          <div className={styles.row}>
            <div className={styles.column}>
              <h2 className={styles.title}>Welcome!</h2>
              <p className={styles.subTitle}>The selected item appears below (
                 <a className='ibr-deselect' href="#" onClick={
                  () => { this.setState({ selectedItem: this.defaultSelection }); }
                }>Deselect</a>)</p>
              <h3>Items</h3>
                <DetailsList
                  skipViewportMeasures={ this.props.performingTests }
                  onShouldVirtualize={() => false}
                  items={ this.props.items }
                  columns={ this.listColumns }
                  setKey="set"
                  checkboxVisibility={ CheckboxVisibility.onHover }
                  selectionMode={ SelectionMode.single }
                  selectionPreservedOnEmptyClick={ true }
                  layoutMode={ DetailsListLayoutMode.fixedColumns }
                  compact={ true }
                  onActiveItemChanged={ item => this.onSelectedItemChanged(item) }
                />
                <h3>Selected item</h3>
                <div>
                  <span>id: </span>
                  <TextField value={this.state.selectedItem.id.toString()} />
                </div>
                <div className='ibr-selected-title'>
                  <span>title: </span>
                  <TextField value={this.state.selectedItem.title} />
              </div>
              <div>
                <DataProvider render={data => <div>{data}</div>}></DataProvider>
              </div>
            </div>
          </div>
        </div>
      </div >
    );
  }

  public onSelectedItemChanged(item: any): void {
    this.setState({selectedItem: item});
  }
}
