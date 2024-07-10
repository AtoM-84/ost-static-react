import { Button, ButtonContent, Grid, Header, Segment, Icon, Image, GridRow, GridColumn } from 'semantic-ui-react';
import MediaQuery from 'react-responsive';

export default function Home() {

  return ( <Segment id='bookers__content' inverted>
    
    <MediaQuery minWidth={768}>
      <Grid centered columns={2} divided verticalAlign='middle'>
        <GridRow stretched>
          <GridColumn width={6}>
            <Header inverted size='huge' as='h2'>Titre
            </Header>
          </GridColumn>
          <GridColumn width={6}>
            <Image id='bookers__image' size='medium' />
          </GridColumn>
        </GridRow>
        <GridRow stretched>
          <GridColumn width={12}>
          </GridColumn>
        </GridRow>
      </Grid>
    </MediaQuery>

    <MediaQuery maxWidth={767}>
      <Grid centered columns={1} divided verticalAlign='middle'>
        <GridRow stretched>
          <GridColumn width={16}>
            <Header inverted size='tiny' as='h4'>En associant vos comptes Spotify et ObookGroove vous bénéficierez de suggestions de livres personnalisées et en accord avec vos goûts musicaux
            </Header>
          </GridColumn>
        </GridRow>
        <GridRow>
          <GridColumn width={16}>
            <Image id='bookers__image' size='medium' />
          </GridColumn>
        </GridRow>
        <GridRow stretched>
          <GridColumn width={16}>
            <Button animated inverted size='large' fluid>
              <ButtonContent id='bookers__button' visible>Associer mes comptes</ButtonContent>
              <ButtonContent hidden>
                <Icon name='sync' /> </ButtonContent>
            </Button>
          </GridColumn>
        </GridRow>
      </Grid>
    </MediaQuery>
  </Segment>
)
  
}