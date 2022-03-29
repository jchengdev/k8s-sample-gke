import { Component } from 'react';
import { withStyles } from '@mui/styles';
import type { WithStyles } from '@mui/styles';
import { TransitionGroup, CSSTransition } from 'react-transition-group';

import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import Avatar from '@mui/material/Avatar';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import ListItemText from '@mui/material/ListItemText';
import CheckIcon from '@mui/icons-material/Check';
import CloseIcon from '@mui/icons-material/Close';
import { blue, red } from '@mui/material/colors';

import Link from '@/common/components/Link';
import MiniPalette from '@/common/components/MiniPalette';
import styles from './PaletteList.styles';

interface PaletteListProps {
  palettes: Array<PaletteI>;
  deletePalette: (id: string) => void;
}
interface ComposedProps extends PaletteListProps, WithStyles<typeof styles> /*,
    RouteComponentProps*/ {}

interface PaletteListState {
  openDeleteDialog: boolean;
  deletingId: string;
}

class PaletteList extends Component<ComposedProps, PaletteListState> {
  constructor(props: ComposedProps) {
    super(props);
    this.state = {
      openDeleteDialog: false as boolean,
      deletingId: '' as string,
    };
    this._goToPalette = this._goToPalette.bind(this);
    this._openDialog = this._openDialog.bind(this);
    this._closeDialog = this._closeDialog.bind(this);
    this._handleDelete = this._handleDelete.bind(this);
  }

  _goToPalette(id: string) {
    // this.props.history.push(`/palette/${id}`);
    // !
    // TODO FIX
  }
  _openDialog(id: string) {
    this.setState({ openDeleteDialog: true, deletingId: id });
  }
  _closeDialog() {
    this.setState({ openDeleteDialog: false, deletingId: '' });
  }
  _handleDelete() {
    this.props.deletePalette(this.state.deletingId);
    this._closeDialog();
  }

  override render() {
    const { classes: styleClasses, palettes } = this.props;
    const { openDeleteDialog } = this.state;
    return (
      <div className={styleClasses.root}>
        <div className={styleClasses.container}>
          <nav className={styleClasses.nav}>
            <h1 className={styleClasses.heading}>React Colors</h1>
            <Link href="/palette/new">Create Palette</Link>
          </nav>
          <TransitionGroup className={styleClasses.palettes}>
            {palettes.map(p => (
              <CSSTransition key={p.id} classNames="fade" timeout={500}>
                <MiniPalette
                  {...p}
                  goToPalette={this._goToPalette}
                  openDialog={this._openDialog}
                />
                <p>A MINIPALETTE</p>
              </CSSTransition>
            ))}
          </TransitionGroup>
        </div>
        <Dialog
          open={openDeleteDialog}
          aria-labelledby="delete-dialog-title"
          onClose={this._closeDialog}
        >
          <DialogTitle id="delete-dialog-title">
            Delete This Palette?
          </DialogTitle>
          <List>
            <ListItem button onClick={this._handleDelete}>
              <ListItemAvatar>
                <Avatar sx={{ backgroundColor: blue[100], color: blue[600] }}>
                  <CheckIcon />
                </Avatar>
              </ListItemAvatar>
              <ListItemText primary="Delete" />
            </ListItem>
            <ListItem button onClick={this._closeDialog}>
              <ListItemAvatar>
                <Avatar sx={{ backgroundColor: red[100], color: red[600] }}>
                  <CloseIcon />
                </Avatar>
              </ListItemAvatar>
              <ListItemText primary="Cancel" />
            </ListItem>
          </List>
        </Dialog>
      </div>
    );
  }
}

export default withStyles(styles)(PaletteList);
