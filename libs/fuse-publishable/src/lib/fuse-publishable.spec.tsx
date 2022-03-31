import { render } from '@testing-library/react';

import FusePublishable from './fuse-publishable';

describe('FusePublishable', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<FusePublishable />);
    expect(baseElement).toBeTruthy();
  });
});
