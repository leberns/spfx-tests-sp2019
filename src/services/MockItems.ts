import { IItem } from '../models/IItem';

export class MockItems {

  public static firstItemTitle: string = 'A1';

  public static items: IItem[] = [
    {id: 1, title: MockItems.firstItemTitle },
    {id: 2, title: 'A2' },
    {id: 3, title: 'A3' }
  ];
}
