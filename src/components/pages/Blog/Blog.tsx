import { Grid, Card, GridRow, GridColumn, CardGroup } from 'semantic-ui-react'
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
        <GridColumn stretched computer={4} tablet={8} mobile={16} padded>
            <CardGroup streched>
                <Card fluid header={contentPost.header}
                description={contentPost.description}
                meta={contentPost.meta}
                image={contentPost.image}
                href={contentPost.href}/>
            </CardGroup>
        </GridColumn>
    )
}
    

export default function Blog() {
    return (
        
            <Grid stackable container verticalAlign='middle' centered>
                <GridRow padded>
                      {posts.map((element) => CardPost(element))}
                </GridRow>   
            </Grid>
       
        
    );
}