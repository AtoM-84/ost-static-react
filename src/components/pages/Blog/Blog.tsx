import { useEffect } from "react";
import { Grid, Card, GridRow, GridColumn, CardGroup } from "semantic-ui-react";
import "./Blog.scss";
import { useAppSelector, useAppDispatch } from "../../../hooks/redux";
import { PostType } from "../../../@types/post";
import { selectAllPosts, selectPostsStatus, fetchPosts } from "../../../features/postsSlice/postsSlice";
import { useNavigate } from "react-router-dom";

// interface ContentProps {
//     title: string;
//     subtitle: string;
//     author: string;
//     publicationdate?: string | number;
//     illustration?: string;
// }

// function CardPost({ title, subtitle, author }: ContentProps) {
//     return (
//         <GridColumn padded>
//             <CardGroup stackable>
//                 <Card
//                     id="card"
//                     className="card"
//                     padded
//                     fluid
//                     link
//                     header={title}
//                     description={subtitle}
//                     meta={author}
//                     onClick={() => {}}
//                     image="src\assets\5_interconnect_1120x1120.jpg"
//                 ></Card>
//             </CardGroup>
//         </GridColumn>
//     );
// }

export default function Blog() {
    const dispatch = useAppDispatch();
    const posts = useAppSelector(selectAllPosts);
    const postsStatus = useAppSelector(selectPostsStatus);
    const navigate = useNavigate();

    const navigateToPostWithId = (id: number) => {
        navigate(`/blog/post/${id}`);
    };

    useEffect(() => {
        if (postsStatus === "idle") {
            dispatch(fetchPosts());
            console.log("posts loaded");
        }
    }, [postsStatus, dispatch]);

    return (
        <Grid stackable container verticalAlign="middle" centered stretched doubling columns={3}>
            <GridRow padded>
                {posts.map((post: PostType) => (
                    <GridColumn padded>
                        <CardGroup stackable>
                            <Card
                                id="card"
                                className="card"
                                padded
                                fluid
                                link
                                header={post.title}
                                description={post.sub_title}
                                meta={post.author_name}
                                onClick={() => navigateToPostWithId(post.id)}
                                image="src\assets\5_interconnect_1120x1120.jpg"
                            ></Card>
                        </CardGroup>
                    </GridColumn>
                ))}
            </GridRow>
        </Grid>
    );
}
