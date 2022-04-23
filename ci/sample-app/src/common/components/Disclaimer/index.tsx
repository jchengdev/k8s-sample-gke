import { StyledButton, StyledRoot } from './Disclaimer.styles';

interface DisclaimerProps {
  message: string | JSX.Element;
  onClose: () => void;
}

const Disclaimer: React.FC<DisclaimerProps> = ({ message, onClose }) => {
  return (
    <StyledRoot>
      {message}
      <StyledButton onClick={() => onClose()}>X</StyledButton>
    </StyledRoot>
  );
};

export default Disclaimer;
