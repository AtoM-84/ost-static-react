import { Grid, Card, GridRow, GridColumn } from 'semantic-ui-react'
import MediaQuery from "react-responsive";
import "./Blog.scss";

const posts = [
    {
        header: 'Project Report - April',
        description:
          'Leverage agile frameworks to provide a robust synopsis for high level overviews.',
        meta: 'ROI: 30%',
        image: 'https://lacavernedelucan.com/wp-content/uploads/2017/07/board-453758_640.jpg',
        href:'https://lacavernedelucan.com/creer-propres-circuit-electronique-meme-on-amateur-partie-1/'
      },
      {
        header: 'Project Report - April',
        description:
          'Leverage agile frameworks to provide a robust synopsis for high level overviews.Leverage agile frameworks to provide a robust synopsis for high level overviews.',
        meta: 'ROI: 30%',
        image: 'https://lacavernedelucan.com/wp-content/uploads/2017/07/board-453758_640.jpg',
        href:'https://lacavernedelucan.com/creer-propres-circuit-electronique-meme-on-amateur-partie-1/'
      },
      {
        header: 'Project Report - April',
        description:
          'Leverage agile frameworks to provide a robust synopsis for high level overviews.',
        meta: 'ROI: 30%',
        image: 'https://lacavernedelucan.com/wp-content/uploads/2017/07/board-453758_640.jpg',
        href:'https://lacavernedelucan.com/creer-propres-circuit-electronique-meme-on-amateur-partie-1/'
      },
      {
        header: 'Project Report - April',
        description:
          'Leverage agile frameworks to provide a robust synopsis for high level overviews.',
        meta: 'ROI: 30%',
        image: 'https://lacavernedelucan.com/wp-content/uploads/2017/07/board-453758_640.jpg',
        href:'https://lacavernedelucan.com/creer-propres-circuit-electronique-meme-on-amateur-partie-1/'
      },
      {
        header: 'Project Report - April',
        description:
          'Leverage agile frameworks to provide a robust synopsis for high level overviews.',
        meta: 'ROI: 30%',
        image: 'https://lacavernedelucan.com/wp-content/uploads/2017/07/board-453758_640.jpg',
        href:'https://lacavernedelucan.com/creer-propres-circuit-electronique-meme-on-amateur-partie-1/'
      },
      {
        header: 'Project Report - April',
        description:
          'Leverage agile frameworks to provide a robust synopsis for high level overviews.',
        meta: 'ROI: 30%',
        image: 'https://lacavernedelucan.com/wp-content/uploads/2017/07/board-453758_640.jpg',
        href:'https://lacavernedelucan.com/creer-propres-circuit-electronique-meme-on-amateur-partie-1/'
      },
      {
        header: 'Project Report - April',
        description:
          'Leverage agile frameworks to provide a robust synopsis for high level overviews.',
        meta: 'ROI: 30%',
        image: 'https://lacavernedelucan.com/wp-content/uploads/2017/07/board-453758_640.jpg',
        href:'https://lacavernedelucan.com/creer-propres-circuit-electronique-meme-on-amateur-partie-1/'
      },
      {
        header: 'Project Report - April',
        description:
          'Leverage agile frameworks to provide a robust synopsis for high level overviews.',
        meta: 'ROI: 30%',
        image: 'https://lacavernedelucan.com/wp-content/uploads/2017/07/board-453758_640.jpg',
        href:'https://lacavernedelucan.com/creer-propres-circuit-electronique-meme-on-amateur-partie-1/'
      },
];

function CardPost(contentPost: { header: string; description: string; meta: string; image: string; href: string }) {
    return (
        <GridColumn centered>
            <Card header={contentPost.header}
            description={contentPost.description}
            meta={contentPost.meta}
            image={contentPost.image}
            href={contentPost.href}/>
        </GridColumn>
    )
}
    

export default function Blog() {
    return (
        <MediaQuery minWidth={1025}>
            <Grid columns={4}>
                <GridRow stretched>
                      {posts.map((element) => CardPost(element))}
                </GridRow>   
            </Grid>
        </MediaQuery>
        
    );
}