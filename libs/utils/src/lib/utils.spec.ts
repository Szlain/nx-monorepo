import { cheese } from './utils';

describe('utils', () => {
  it('should work', () => {
    expect(cheese()).toEqual('-> this is a utils lib item! <-');
  });
});
