import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import AddToPhotos from '@mui/icons-material/AddToPhotos';

import Link from '@/common/components/Link';

import {
  StyledAppBar,
  StyledButton,
  StyledIconButton,
  StyledNavBtns,
  StyledRoot,
} from './PaletteFormNav.styles';

interface PaletteFormNavProps {
  open: boolean;
  handleDrawerOpen: () => void;
  metaFormShowing: boolean;
  showMetaForm: () => void;
  renderMetaForm: () => JSX.Element;
}

const PaletteFormNav: React.FC<PaletteFormNavProps> = props => {
  const {
    open,
    handleDrawerOpen,
    metaFormShowing,
    showMetaForm,
    renderMetaForm,
  } = props;

  return (
    <StyledRoot>
      <StyledAppBar position="fixed" color="default" sxProps={{ open }}>
        <Toolbar>
          <StyledIconButton
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            edge="start"
            sxProps={{ open }}
          >
            <AddToPhotos />
          </StyledIconButton>
          <Typography variant="h6" noWrap component="div">
            Create A Palette
          </Typography>
        </Toolbar>
        <StyledNavBtns>
          <Link href={'/'}>
            <StyledButton variant="contained" color="secondary">
              Go Back
            </StyledButton>
          </Link>
          <StyledButton variant="contained" onClick={showMetaForm}>
            Save
          </StyledButton>
        </StyledNavBtns>
      </StyledAppBar>
      {metaFormShowing && renderMetaForm()}
    </StyledRoot>
  );
};

export default PaletteFormNav;
