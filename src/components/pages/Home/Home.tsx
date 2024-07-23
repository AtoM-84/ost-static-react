import { Grid, Header, Segment, Image, GridRow, GridColumn, Container } from "semantic-ui-react";
import MediaQuery from "react-responsive";

import "./Home.scss";

const contentHomepage = [
    {
        title: "Titre 1",
        textContent:
            "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa strong. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede link mollis pretium. Integer tincidunt. Cras dapibus. Vivamus elementum semper nisi. Aenean vulputate eleifend tellus. Aenean leo ligula, porttitor eu, consequat vitae, eleifend ac, enim. Aliquam lorem ante, dapibus in, viverra quis, feugiat a, tellus. Phasellus viverra nulla ut metus varius laoreet. Quisque rutrum. Aenean imperdiet. Etiam ultricies nisi vel augue. Curabitur ullamcorper ultricies nisi.",
        imageUrl: "/images/wireframe/square-image.png",
    },
    {
        title: "Titre 2",
        textContent:
            "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa strong. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede link mollis pretium. Integer tincidunt. Cras dapibus. Vivamus elementum semper nisi. Aenean vulputate eleifend tellus. Aenean leo ligula, porttitor eu, consequat vitae, eleifend ac, enim. Aliquam lorem ante, dapibus in, viverra quis, feugiat a, tellus. Phasellus viverra nulla ut metus varius laoreet. Quisque rutrum. Aenean imperdiet. Etiam ultricies nisi vel augue. Curabitur ullamcorper ultricies nisi.",
        imageUrl: "/images/wireframe/square-image.png",
    },
    {
        title: "Titre 3",
        textContent:
            "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa strong. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede link mollis pretium. Integer tincidunt. Cras dapibus. Vivamus elementum semper nisi. Aenean vulputate eleifend tellus. Aenean leo ligula, porttitor eu, consequat vitae, eleifend ac, enim. Aliquam lorem ante, dapibus in, viverra quis, feugiat a, tellus. Phasellus viverra nulla ut metus varius laoreet. Quisque rutrum. Aenean imperdiet. Etiam ultricies nisi vel augue. Curabitur ullamcorper ultricies nisi.",
        imageUrl: "/images/wireframe/square-image.png",
    },
    {
        title: "Titre 4",
        textContent:
            "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa strong. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede link mollis pretium. Integer tincidunt. Cras dapibus. Vivamus elementum semper nisi. Aenean vulputate eleifend tellus. Aenean leo ligula, porttitor eu, consequat vitae, eleifend ac, enim. Aliquam lorem ante, dapibus in, viverra quis, feugiat a, tellus. Phasellus viverra nulla ut metus varius laoreet. Quisque rutrum. Aenean imperdiet. Etiam ultricies nisi vel augue. Curabitur ullamcorper ultricies nisi.",
        imageUrl: "/images/wireframe/square-image.png",
    },
];

function RowHompage(contentElement: { title: string; textContent: string; imageUrl: string }, index: number) {
    if (index % 2 === 0) {
        return (
            <GridRow stretched padded>
                <GridColumn width={5} content="centered" padded="vertically">
                    <Header inverted size="tiny" as="h1">
                        {contentElement.title}
                    </Header>
                    <p>{contentElement.textContent}</p>
                </GridColumn>
                <GridColumn width={3} content="centered" padded="vertically">
                    <Container>
                        <Image src={contentElement.imageUrl} fluid rounded></Image>
                    </Container>
                </GridColumn>
            </GridRow>
        );
    } else {
        return (
            <GridRow stretched padded>
                <GridColumn width={3} content="centered" padded="vertically">
                    <Container>
                        <Image src={contentElement.imageUrl} fluid rounded></Image>
                    </Container>
                </GridColumn>
                <GridColumn width={5} content="centered" padded="vertically">
                    <Header inverted size="tiny" as="h1">
                        {contentElement.title}
                    </Header>
                    <p>{contentElement.textContent}</p>
                </GridColumn>
            </GridRow>
        );
    }
}

export default function Home() {
    return (
        <Segment inverted>
            <MediaQuery minWidth={1025}>
                <Grid centered columns={2} divided verticalAlign="middle" relaxed="very">
                    {contentHomepage.map((element, index) => RowHompage(element, index))}
                </Grid>
            </MediaQuery>

            <MediaQuery maxWidth={1024}>
                <Grid centered columns={1} divided verticalAlign="middle">
                    {contentHomepage.map((element) => (
                        <>
                            <GridColumn width={16} content="centered" padded="vertically">
                                <Header inverted size="tiny" as="h1">
                                    {element.title}
                                </Header>
                                <p>{element.textContent}</p>
                            </GridColumn>
                            <GridColumn width={16} content="centered" padded="vertically">
                                <Container>
                                    <Image src={element.imageUrl} rounded fluid></Image>
                                </Container>
                            </GridColumn>
                        </>
                    ))}
                </Grid>
            </MediaQuery>
        </Segment>
    );
}
