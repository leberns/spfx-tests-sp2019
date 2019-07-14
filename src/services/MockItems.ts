import { IItem } from '../models/IItem';

export class MockItems {
  public static firstItemTitle: string = 'A1 Lorem ipsum 123';

  public static items: IItem[] = [
    { id: 1, title: MockItems.firstItemTitle },
    { id: 2, title: 'A2 Lorem ipsum 123, lorem ipsum 123' },
    { id: 3, title: 'A3 Lorem ipsum 123, lorem 123' }
  ];
}
