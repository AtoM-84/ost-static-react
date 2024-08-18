import { Container, Grid, Header, PlaceholderImage, Placeholder, Segment, Breadcrumb, BreadcrumbSection, BreadcrumbDivider } from "semantic-ui-react";
import MediaQuery from "react-responsive";
import "./Post.scss";


export default function Post() {
    return (
        <Segment inverted>
            <MediaQuery minWidth={1025}> 
                    <Container text fluid>
                    <Breadcrumb>
                        <BreadcrumbSection link>All posts</BreadcrumbSection>
                        <BreadcrumbDivider />
                        <BreadcrumbSection active>Active post</BreadcrumbSection>
                    </Breadcrumb>
                        <Header as='h1' size='huge' textAlign='left' inverted>Advances in Topology research with AI training</Header>
                        <Header as='h2' textAlign='left' inverted>Post subtitle</Header>
                        <Header as='h3' textAlign='right' inverted>Author</Header>
                        <Header as='h4'textAlign='right' inverted>Publication date</Header>
                        <Placeholder inverted fluid>
                            <PlaceholderImage square/>
                        </Placeholder>
                        <p>
                        Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo
                        ligula eget dolor. Aenean massa strong. Cum sociis natoque penatibus et
                        magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis,
                        ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa
                        quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget,
                        arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo.
                        Nullam dictum felis eu pede link mollis pretium. Integer tincidunt. Cras
                        dapibus. Vivamus elementum semper nisi. Aenean vulputate eleifend tellus.
                        Aenean leo ligula, porttitor eu, consequat vitae, eleifend ac, enim.
                        Aliquam lorem ante, dapibus in, viverra quis, feugiat a, tellus. Phasellus
                        viverra nulla ut metus varius laoreet. Quisque rutrum. Aenean imperdiet.
                        Etiam ultricies nisi vel augue. Curabitur ullamcorper ultricies nisi.
                        </p>
                        <p>
                        Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo
                        ligula eget dolor. Aenean massa strong. Cum sociis natoque penatibus et
                        magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis,
                        ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa
                        quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget,
                        arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo.
                        Nullam dictum felis eu pede link mollis pretium. Integer tincidunt. Cras
                        dapibus. Vivamus elementum semper nisi. Aenean vulputate eleifend tellus.
                        Aenean leo ligula, porttitor eu, consequat vitae, eleifend ac, enim.
                        Aliquam lorem ante, dapibus in, viverra quis, feugiat a, tellus. Phasellus
                        viverra nulla ut metus varius laoreet. Quisque rutrum. Aenean imperdiet.
                        Etiam ultricies nisi vel augue. Curabitur ullamcorper ultricies nisi.
                        </p>
                        <p>
                        Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo
                        ligula eget dolor. Aenean massa strong. Cum sociis natoque penatibus et
                        magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis,
                        ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa
                        quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget,
                        arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo.
                        Nullam dictum felis eu pede link mollis pretium. Integer tincidunt. Cras
                        dapibus. Vivamus elementum semper nisi. Aenean vulputate eleifend tellus.
                        Aenean leo ligula, porttitor eu, consequat vitae, eleifend ac, enim.
                        Aliquam lorem ante, dapibus in, viverra quis, feugiat a, tellus. Phasellus
                        viverra nulla ut metus varius laoreet. Quisque rutrum. Aenean imperdiet.
                        Etiam ultricies nisi vel augue. Curabitur ullamcorper ultricies nisi.
                        </p>
                    </Container>
            </MediaQuery>

            <MediaQuery maxWidth={1024}>
                <Grid centered columns={1} divided verticalAlign="middle">
                    
                </Grid>
            </MediaQuery>
        </Segment>
    );
}
