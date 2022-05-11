import styled from 'styled-components';
import NxWelcome from './nx-welcome';

const StyledApp = styled.div`
  // Your style here
`;

export function App() {
  return (
    <StyledApp>
      App
      <NxWelcome title="storybook" />
    </StyledApp>
  );
}

export default App;
