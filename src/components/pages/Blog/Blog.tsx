import { Grid, Card, GridRow, GridColumn, CardGroup } from 'semantic-ui-react'
import "./Blog.scss";
import { useAppSelector } from "../../../hooks/redux";
import { Post } from '../../../@types/post';
import { selectAllPosts } from '../../../features/postSlice/postsSlice';

// const posts = [
//     {
//         header: 'Project Report - April',
//         description:
//           'Leverage agile frameworks to provide a robust synopsis for high level overviews.',
//         meta: 'ROI: 30%',
//         image: './Default_A_futuristic_electronic_board_illustration_in_SVG_form_0.jpg',
//         href:'https://lacavernedelucan.com/creer-propres-circuit-electronique-meme-on-amateur-partie-1/'
//       },
//       {
//         header: 'Project Report - April',
//         description:
//           'Leverage agile frameworks to provide a robust synopsis for high level overviews.',
//         meta: 'ROI: 30%',
//         image: 'https://lacavernedelucan.com/wp-content/uploads/2017/07/board-453758_640.jpg',
//         href:'https://lacavernedelucan.com/creer-propres-circuit-electronique-meme-on-amateur-partie-1/'
//       },
//       {
//         header: 'Project Report - April',
//         description:
//           'Leverage agile frameworks to provide a robust synopsis for high level overviews.',
//         meta: 'ROI: 30%',
//         image: 'https://lacavernedelucan.com/wp-content/uploads/2017/07/board-453758_640.jpg',
//         href:'https://lacavernedelucan.com/creer-propres-circuit-electronique-meme-on-amateur-partie-1/'
//       },
//       {
//         header: 'Project Report - April',
//         description:
//           'Leverage agile frameworks to provide a robust synopsis for high level overviews.',
//         meta: 'ROI: 30%',
//         image: 'https://lacavernedelucan.com/wp-content/uploads/2017/07/board-453758_640.jpg',
//         href:'https://lacavernedelucan.com/creer-propres-circuit-electronique-meme-on-amateur-partie-1/'
//       },
//       {
//         header: 'Project Report - April',
//         description:
//           'Leverage agile frameworks to provide a robust synopsis for high level overviews.',
//         meta: 'ROI: 30%',
//         image: 'https://lacavernedelucan.com/wp-content/uploads/2017/07/board-453758_640.jpg',
//         href:'https://lacavernedelucan.com/creer-propres-circuit-electronique-meme-on-amateur-partie-1/'
//       },
//       {
//         header: 'Project Report - April',
//         description:
//           'Leverage agile frameworks to provide a robust synopsis for high level overviews.',
//         meta: 'ROI: 30%',
//         image: 'https://lacavernedelucan.com/wp-content/uploads/2017/07/board-453758_640.jpg',
//         href:'https://lacavernedelucan.com/creer-propres-circuit-electronique-meme-on-amateur-partie-1/'
//       },
//       {
//         header: 'Project Report - April',
//         description:
//           'Leverage agile frameworks to provide a robust synopsis for high level overviews.',
//         meta: 'ROI: 30%',
//         image: 'https://lacavernedelucan.com/wp-content/uploads/2017/07/board-453758_640.jpg',
//         href:'https://lacavernedelucan.com/creer-propres-circuit-electronique-meme-on-amateur-partie-1/'
//       },
//       {
//         header: 'Project Report - April',
//         description:
//           'Leverage agile frameworks to provide a robust synopsis for high level overviews.',
//         meta: 'ROI: 30%',
//         image: 'https://lacavernedelucan.com/wp-content/uploads/2017/07/board-453758_640.jpg',
//         href:'https://lacavernedelucan.com/creer-propres-circuit-electronique-meme-on-amateur-partie-1/'
//       },
//       {
//         header: 'Project Report - April',
//         description:
//           'Leverage agile frameworks to provide a robust synopsis for high level overviews.',
//         meta: 'ROI: 30%',
//         image: 'https://lacavernedelucan.com/wp-content/uploads/2017/07/board-453758_640.jpg',
//         href:'https://lacavernedelucan.com/creer-propres-circuit-electronique-meme-on-amateur-partie-1/'
//       },
//       {
//         header: 'Project Report - April',
//         description:
//           'Leverage agile frameworks to provide a robust synopsis for high level overviews.',
//         meta: 'ROI: 30%',
//         image: 'https://lacavernedelucan.com/wp-content/uploads/2017/07/board-453758_640.jpg',
//         href:'https://lacavernedelucan.com/creer-propres-circuit-electronique-meme-on-amateur-partie-1/'
//       },
//       {
//         header: 'Project Report - April',
//         description:
//           'Leverage agile frameworks to provide a robust synopsis for high level overviews.',
//         meta: 'ROI: 30%',
//         image: 'https://lacavernedelucan.com/wp-content/uploads/2017/07/board-453758_640.jpg',
//         href:'https://lacavernedelucan.com/creer-propres-circuit-electronique-meme-on-amateur-partie-1/'
//       },
//       {
//         header: 'Project Report - April',
//         description:
//           'Leverage agile frameworks to provide a robust synopsis for high level overviews.',
//         meta: 'ROI: 30%',
//         image: 'https://lacavernedelucan.com/wp-content/uploads/2017/07/board-453758_640.jpg',
//         href:'https://lacavernedelucan.com/creer-propres-circuit-electronique-meme-on-amateur-partie-1/'
//       },
// ];

interface ContentProps {
    title: string;
    subtitle: string;
    author: string;
    publicationdate?: string | number;
    illustration: string;
    posts?: Post[]
}

function CardPost({ title, subtitle, author }: ContentProps) {
    return (
        <GridColumn padded>
            <CardGroup stackable>
                <Card className='card' padded fluid link
                    header={title}
                    description={subtitle}
                    meta={author}
                    image='src\assets\5_interconnect_1120x1120.jpg'
                    >
                    </Card>
            </CardGroup>
        </GridColumn>
    )
}

export default function Blog() {
    
    const posts = useAppSelector(selectAllPosts);
    return (
        <Grid stackable container verticalAlign='middle' centered stretched doubling columns={3}>
            <GridRow padded>
                {posts.map((post: Post) =>
                    CardPost({
                        title: post.title,
                        subtitle: post.sub_title,
                        author: post.author_name
                    })
                )}
            </GridRow>
        </Grid>
    );
}