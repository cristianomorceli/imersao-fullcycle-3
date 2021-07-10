import {
  Card,
  CardContent,
  Typography,
  Grid,
  CardHeader,
  Container,
  List,
  ListItem,
  ListItemText,
  ListItemIcon,
} from "@material-ui/core";
import LocationOnTwoToneIcon from '@material-ui/icons/LocationOnTwoTone';
import { makeStyles } from '@material-ui/core/styles';
import { GetServerSideProps, NextPage } from 'next'
import Head from 'next/head'
import http from '../http'
import { Route } from "../model";

const useStyles = makeStyles((theme) => ({
  cardHeader: {
    backgroundColor: theme.palette.grey[300],
  },
}));

interface RoutesListPageProps {
  routes: Route[]
}


const RoutesListPage: NextPage<RoutesListPageProps> = ({routes}) => {
  const classes = useStyles();
  const dense = true;

  return (
    <div>
      <Head>
        <title>Imersão FullCycle 3.0 - Desafio 2 | Lista de Rotas</title>
      </Head>
      <Container maxWidth="lg">
        <Typography style={{ padding: 20 }} component="h1" variant="h3" color="textPrimary" align="center" gutterBottom>
        Imersão FullCycle 3.0 - Desafio 2 | Lista de Rotas
        </Typography>
        <Grid container direction="row" justifyContent="center" alignItems="center" spacing={3}>
          {routes.map((route, key) => (
            <Grid key={key} item xs={12} sm={6} md={4}>
              <Card>
                <CardHeader
                  title={route.title}
                  titleTypographyProps={{ align: 'center' }}
                  subheaderTypographyProps={{ align: 'center' }}
                  className={classes.cardHeader}
                />
                <CardContent>
                <List dense={dense} style={{ padding: 20 }} >
                  {[route.startPosition, route.endPosition].map((location, key) => (
                  <ListItem key={key} >
                    <ListItemIcon>
                      <LocationOnTwoToneIcon 
                            color={key==0 ? 'primary' : 'secondary'} 
                            fontSize="medium"
                          />
                    </ListItemIcon>
                    <ListItemText
                      primary={key==0 ? 'Origem' : 'Destino'} 
                      secondary={location}
                      secondaryTypographyProps={{ align: 'center' }}
                    />
                  </ListItem>
                  ))}
                </List>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
    </div>
  )
}

export default RoutesListPage;

export const getServerSideProps: GetServerSideProps<RoutesListPageProps> = async () => {
  const {data: routes} = await http.get('routes');

  return {
    props: {
      routes
    }
  }
}