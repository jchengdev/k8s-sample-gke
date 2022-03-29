import { FunctionComponent as ReactFC } from 'react';

import { StyledRoot } from './Disclaimer.styles';

interface DisclaimerProps {
  message: string;
  extLink?: string;
  onClose: () => void;
}

const Disclaimer: ReactFC<DisclaimerProps> = ({
  message,
  extLink,
  onClose,
}) => {
  return (
    <StyledRoot>
      <h1 style={{ color: 'red' }}> THIS IS CURRENTLY BEING EDITED </h1>
      {message}
      <br />{' '}
      {extLink && (
        <a target={'_blank'} href={extLink} rel="noreferrer">
          {extLink}
        </a>
      )}
      {
        // TODO: handle popup onClose, change AppContext (memory)
      }
      <br />
      <button onClick={() => onClose()}>X</button>
    </StyledRoot>
  );
};

export default Disclaimer;
