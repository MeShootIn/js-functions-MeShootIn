import { customBind } from '../homework/customBind';

describe('Lesson 2', () => {
  // eslint-disable-next-line max-statements
  it('customBind', () => {
    const context = { test: 'test' };

    let lastParams = null;

    let lastContext = null;

    function call(...params) {
      lastContext = this;
      lastParams = params;
    }

    const bindedFunc = customBind(call, context, 1, 3);

    bindedFunc(4);

    expect(lastContext).toBe(context);
    expect(lastParams).toEqual([1, 3, 4]);

    lastParams = null;
    lastContext = null;

    bindedFunc(5, 6);
    expect(lastContext).toBe(context);
    expect(lastParams).toEqual([1, 3, 5, 6]);

    const otherCtx = { test2: 'otherCtx' };
    const otherBindedFunc = customBind(call, otherCtx, 'hi', 'there');

    otherBindedFunc('Mandy');

    expect(lastContext).toBe(otherCtx);
    expect(lastParams).toEqual(['hi', 'there', 'Mandy']);
  });
});
