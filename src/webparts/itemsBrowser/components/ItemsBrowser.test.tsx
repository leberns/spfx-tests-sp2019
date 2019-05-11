/// <reference types="jest" />
import * as React from 'react';
import { configure, mount, ReactWrapper } from 'enzyme';

import * as Adapter from 'enzyme-adapter-react-15';

import { IItemsBrowserProps } from './IItemsBrowserProps';
import ItemsBrowser from './ItemsBrowser';
import { MockItems } from '../../../services/MockItems';

configure({ adapter: new Adapter() });

describe('ItemsBrowser component', () => {

  let reactComponent: ReactWrapper<IItemsBrowserProps, {}>;

  beforeEach(() => {
    reactComponent = mount(React.createElement(
      ItemsBrowser,
      {
        items: MockItems.items,
        performingTests: true
      }
    ));
  });

  afterEach(() => {
    reactComponent.unmount();
  });

  it('should render the title', () => {
    const title: string = reactComponent.find('h2').text();

    expect(title).toBe('Welcome!');
  });

  it('should set textbox to the deselected value after clicking on deselect', () => {
    const deselectedComponent: any = reactComponent.find('.ibr-spfx-test-sp2019 .ibr-deselect');
    deselectedComponent.simulate('click');

    //console.log(deselectedComponent.debug());

    const textField: any = reactComponent.find('.ibr-selected-title .ms-TextField-wrapper');
    const inputDOM: HTMLInputElement = textField.getDOMNode().querySelector('.ibr-selected-title input');
    const title: string = inputDOM.value;

    expect(title).toBe("(deselected)");
  });

  // it('should display the title of the selected item after clicking on the first item of the list', () => {
  //   //reactComponent.update(); // it seems not needed
  //   const firstItemRow: any = reactComponent.find('.ibr-spfx-test-sp2019 .ms-DetailsList .ms-DetailsRow').first();
  //   firstItemRow.simulate('click');
  //   reactComponent.update();

  //   //console.log(firstItemRow.debug());

  //   const textField: any = reactComponent.find('.ibr-selected-title .ms-TextField-wrapper');
  //   const inputDOM: HTMLInputElement = textField.getDOMNode().querySelector('.ibr-selected-title input');
  //   const title: string = inputDOM.value;

  //   // console.log(textField.debug())
  //   // console.log(inputDOM);
  //   // console.log(title);

  //   expect(title).toBe(MockItems.firstItemTitle);
  // });
});
