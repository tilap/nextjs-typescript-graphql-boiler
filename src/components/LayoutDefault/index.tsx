import AppBar from '@material-ui/core/AppBar';
import { makeStyles } from '@material-ui/core/styles';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { AppProps } from 'next/app';
import Link from 'next/link';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
}));

const LayoutDefault = ({ Component, pageProps }: AppProps): JSX.Element => {
  const classes = useStyles();
  return (
    <>
      <AppBar position="static">
        <Toolbar>
          <Typography className={classes.title} variant="h6">
            Next/TS/Graphql/Mui
          </Typography>
        </Toolbar>
      </AppBar>
      <div style={{ background: '#eaebea', padding: 10 }}>
        <Link href="/">home</Link>&nbsp;|&nbsp;<Link href="/about/">about</Link>&nbsp;|&nbsp;
        <Link href="/links/">links</Link>
      </div>
      <div style={{ padding: 10 }}>
        <Component {...pageProps} />
      </div>
      <div style={{ background: '#ccc', padding: 10 }}>Footer</div>
    </>
  );
};

export default LayoutDefault;
