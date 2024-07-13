import { Button, ButtonContent, Grid, Header, Segment, Icon, Image, GridRow, GridColumn, Container, Placeholder } from 'semantic-ui-react';
import MediaQuery from 'react-responsive';

import './Home.scss'

export default function Home() {

  return ( <Segment id='bookers__content' inverted>
  
    <MediaQuery minWidth={768}>
      <Grid centered columns={2} divided verticalAlign='middle' relaxed='very'>
        <GridRow stretched padded>
             <GridColumn width={5} content='centered' padded='vertically'>
                <Header inverted size='tiny' as='h1'>Titre 1
                </Header>
                <p>
            Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa strong. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede link mollis pretium. Integer tincidunt. Cras dapibus. Vivamus elementum semper nisi. Aenean vulputate eleifend tellus. Aenean leo ligula, porttitor eu, consequat vitae, eleifend ac, enim. Aliquam lorem ante, dapibus in, viverra quis, feugiat a, tellus. Phasellus viverra nulla ut metus varius laoreet. Quisque rutrum. Aenean imperdiet. Etiam ultricies nisi vel augue. Curabitur ullamcorper ultricies nisi.
            </p>
             </GridColumn>
             <GridColumn width={2} content='centered' padded='vertically'>
                <Container>
                    <Image src='/images/wireframe/square-image.png' fluid rounded>
                    </Image>
                </Container>
             </GridColumn> 
        </GridRow>

        <GridRow stretched>
             <GridColumn width={2}>
                <Container>
                    <Image src='/images/wireframe/square-image.png' size='medium' rounded>
                    </Image>
                </Container>
             </GridColumn>
             <GridColumn width={5} content='centered'>
                <Header inverted size='tiny' as='h1'>Titre 2
                </Header>
                <p>
            Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa strong. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede link mollis pretium. Integer tincidunt. Cras dapibus. Vivamus elementum semper nisi. Aenean vulputate eleifend tellus. Aenean leo ligula, porttitor eu, consequat vitae, eleifend ac, enim. Aliquam lorem ante, dapibus in, viverra quis, feugiat a, tellus. Phasellus viverra nulla ut metus varius laoreet. Quisque rutrum. Aenean imperdiet. Etiam ultricies nisi vel augue. Curabitur ullamcorper ultricies nisi.
            </p>
             </GridColumn>
        </GridRow>
        <GridRow stretched>
             <GridColumn width={5} content='centered'>
                <Header inverted size='tiny' as='h1'>Titre 3
                </Header>
                <p>
            Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa strong. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede link mollis pretium. Integer tincidunt. Cras dapibus. Vivamus elementum semper nisi. Aenean vulputate eleifend tellus. Aenean leo ligula, porttitor eu, consequat vitae, eleifend ac, enim. Aliquam lorem ante, dapibus in, viverra quis, feugiat a, tellus. Phasellus viverra nulla ut metus varius laoreet. Quisque rutrum. Aenean imperdiet. Etiam ultricies nisi vel augue. Curabitur ullamcorper ultricies nisi.
            </p>
             </GridColumn>
             <GridColumn width={2}>
                <Container>
                    <Image src='/images/wireframe/square-image.png' size='medium' rounded>
                    </Image>
                </Container>
             </GridColumn> 
        </GridRow>
      </Grid>
    </MediaQuery>

    <MediaQuery maxWidth={767}>
      <Grid centered columns={1} divided verticalAlign='middle'>
        <GridColumn width={16} content='centered' padded='vertically'>
            <Header inverted size='tiny' as='h1'>Titre 1
            </Header>
                <p>
            Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa strong. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede link mollis pretium. Integer tincidunt. Cras dapibus. Vivamus elementum semper nisi. Aenean vulputate eleifend tellus. Aenean leo ligula, porttitor eu, consequat vitae, eleifend ac, enim. Aliquam lorem ante, dapibus in, viverra quis, feugiat a, tellus. Phasellus viverra nulla ut metus varius laoreet. Quisque rutrum. Aenean imperdiet. Etiam ultricies nisi vel augue. Curabitur ullamcorper ultricies nisi.
            </p>
        </GridColumn>
        <GridColumn width={16} content='centered' padded='vertically'>
                <Container>
                    <Image src='/images/wireframe/square-image.png' rounded fluid>
                    </Image>
                </Container>
        </GridColumn>
        <GridColumn width={16} content='centered' padded='vertically'>
            <Header inverted size='tiny' as='h1'>Titre 1
            </Header>
                <p>
            Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa strong. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede link mollis pretium. Integer tincidunt. Cras dapibus. Vivamus elementum semper nisi. Aenean vulputate eleifend tellus. Aenean leo ligula, porttitor eu, consequat vitae, eleifend ac, enim. Aliquam lorem ante, dapibus in, viverra quis, feugiat a, tellus. Phasellus viverra nulla ut metus varius laoreet. Quisque rutrum. Aenean imperdiet. Etiam ultricies nisi vel augue. Curabitur ullamcorper ultricies nisi.
            </p>
        </GridColumn>
        <GridColumn width={16} content='centered' padded='vertically'>
                <Container>
                    <Image src='/images/wireframe/square-image.png' rounded fluid>
                    </Image>
                </Container>
        </GridColumn>
        <GridColumn width={16} content='centered' padded='vertically'>
            <Header inverted size='tiny' as='h1'>Titre 1
            </Header>
                <p>
            Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa strong. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede link mollis pretium. Integer tincidunt. Cras dapibus. Vivamus elementum semper nisi. Aenean vulputate eleifend tellus. Aenean leo ligula, porttitor eu, consequat vitae, eleifend ac, enim. Aliquam lorem ante, dapibus in, viverra quis, feugiat a, tellus. Phasellus viverra nulla ut metus varius laoreet. Quisque rutrum. Aenean imperdiet. Etiam ultricies nisi vel augue. Curabitur ullamcorper ultricies nisi.
            </p>
        </GridColumn>
        <GridColumn width={16} content='centered' padded='vertically'>
                <Container>
                    <Image src='/images/wireframe/square-image.png' rounded fluid>
                    </Image>
                </Container>
        </GridColumn> 
       
      </Grid>
    </MediaQuery>
  </Segment>
)
  
}