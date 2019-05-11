import * as React from 'react';
import * as ReactDom from 'react-dom';
import { Version } from '@microsoft/sp-core-library';
import {
  BaseClientSideWebPart,
  IPropertyPaneConfiguration,
  PropertyPaneTextField
} from '@microsoft/sp-webpart-base';

import * as strings from 'ItemsBrowserWebPartStrings';
import ItemsBrowser from './components/ItemsBrowser';
import { IItemsBrowserProps } from './components/IItemsBrowserProps';
import { MockItems } from '../../services/MockItems';

export interface IItemsBrowserWebPartProps {
  description: string;
}

export default class ItemsBrowserWebPart extends BaseClientSideWebPart<IItemsBrowserWebPartProps> {

  public render(): void {
    const element: React.ReactElement<IItemsBrowserProps > = React.createElement(
      ItemsBrowser,
      {
        items: MockItems.items,
        performingTests: false
      }
    );

    ReactDom.render(element, this.domElement);
  }

  protected onDispose(): void {
    ReactDom.unmountComponentAtNode(this.domElement);
  }

  protected get dataVersion(): Version {
    return Version.parse('1.0');
  }

  protected getPropertyPaneConfiguration(): IPropertyPaneConfiguration {
    return {
      pages: [
        {
          header: {
            description: strings.PropertyPaneDescription
          },
          groups: [
            {
              groupName: strings.BasicGroupName,
              groupFields: [
                PropertyPaneTextField('description', {
                  label: strings.DescriptionFieldLabel
                })
              ]
            }
          ]
        }
      ]
    };
  }
}
