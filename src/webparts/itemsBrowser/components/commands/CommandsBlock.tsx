import * as React from 'react';
import { CommandBar, loadTheme, IButtonStyles, IContextualMenuItem, ColorClassNames } from 'office-ui-fabric-react';

import styles from './CommandsBlock.module.scss';
import { ICommandsBlockProps } from './ICommandsBlockProps';

// loadTheme({
//   palette: {
//     themePrimary: '#0078d4',
//     themeLighterAlt: '#eff6fc',
//     themeLighter: '#deecf9',
//     themeLight: '#c7e0f4',
//     themeTertiary: '#71afe5',
//     themeSecondary: '#2b88d8',
//     themeDarkAlt: '#106ebe',
//     themeDark: '#005a9e',
//     themeDarker: '#004578',
//     neutralLighterAlt: '#f8f8f8',
//     neutralLighter: '#f4f4f4',
//     neutralLight: '#eaeaea',
//     neutralQuaternaryAlt: '#dadada',
//     neutralQuaternary: '#d0d0d0',
//     neutralTertiaryAlt: '#c8c8c8',
//     neutralTertiary: '#c2c2c2',
//     neutralSecondary: '#858585',
//     neutralPrimaryAlt: '#4b4b4b',
//     neutralPrimary: '#333333',
//     neutralDark: '#272727',
//     black: '#1d1d1d',
//     white: '#ffffff'
//   }
// });

export default class CommandsBlock extends React.Component<ICommandsBlockProps, {}> {
  public render(): React.ReactElement<ICommandsBlockProps> {
    return (
      <div>
        <div>
          <CommandBar items={this.getItems()} />
        </div>
      </div>
    );
  }

  private getItems(): IContextualMenuItem[] {
    const items: IContextualMenuItem[] = [
      {
        key: 'buttonA',
        name: 'Button Ac',
        iconProps: {
          iconName: 'Add'
        }
      },
      {
        key: 'buttonB',
        name: 'Button B',
        disabled: true,
        className: styles.buttonDisabled,
        style: { color: 'red' },
        iconProps: {
          iconName: 'Delete'
        }
      }
    ];
    return items;
  }
}
