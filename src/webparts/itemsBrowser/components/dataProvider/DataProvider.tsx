import * as React from 'react';
import { IDataProviderProps } from './IDataProviderProps';
import { IDataProviderState } from './IDataProviderState';

export default class DataProvider extends React.Component<IDataProviderProps, IDataProviderState> {
  constructor(props: IDataProviderProps) {
    super(props);
    this.state = {
      data: []
    };
  }
  public render(): React.ReactElement<IDataProviderProps> {
    return this.props.render(this.state.data);
  }

  public componentDidMount(): void {
    this.setState({
      data: ['a', 'bb', 'ccc']
    });
  }
}
