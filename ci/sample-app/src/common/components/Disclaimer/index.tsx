import { FunctionComponent } from 'react';

import Link from '@/common/components/Link';

interface DisclaimerProps {
  message: string;
  extLink?: string;
  onClose: () => void;
}

const Disclaimer: FunctionComponent<DisclaimerProps> = ({
  message,
  extLink,
  onClose,
}) => {
  return (
    <div
      style={{
        padding: '1rem',
        height: 'auto',
        width: 'auto',
        border: '1px dashed black',
        borderRadius: '5px',
      }}
    >
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
    </div>
  );
};

export default Disclaimer;
