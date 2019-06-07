import createReactContext, { Context } from 'create-react-15-context';

export class ContextsRepositiory {

  private static itemContext: Context<string>;

  public static create(): void {
    ContextsRepositiory.itemContext = createReactContext('-');
  }

  public static getItemContext(): Context<string> {
    if(! ContextsRepositiory.itemContext) {
      ContextsRepositiory.create();
    }
    return ContextsRepositiory.itemContext;
  }
}
