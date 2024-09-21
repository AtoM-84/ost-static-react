import {
    Container,
    Grid,
    Header,
    HeaderSubheader,
    Icon,
    Image,
    Segment,
    Breadcrumb,
    BreadcrumbSection,
    BreadcrumbDivider,
    Dimmer,
    Divider,
    Loader,
    Placeholder,
    PlaceholderImage,
    PlaceholderHeader,
    PlaceholderLine,
    PlaceholderParagraph,
    GridColumn,
    GridRow,
} from "semantic-ui-react";
import { useParams } from "react-router-dom";
import { useEffect } from "react";
import moment from "moment";
import ReactMarkdown from "react-markdown";
import MediaQuery from "react-responsive";
import { NavLink } from "react-router-dom";
import "./Post.scss";
import { PostType } from "../../../@types/post";
import { useAppSelector, useAppDispatch } from "../../../hooks/redux";
import { selectOnePost, selectPostStatus, fetchOnePost, resetOnePost } from "../../../features/postSlice/postSlice";

function Spinner() {
    return (
        <>
            <Dimmer className="post__dimmer" active>
                <Loader>Loading</Loader>
            </Dimmer>

            <Placeholder className="post_placeholder" inverted fluid>
                <PlaceholderLine length="long" />
                <PlaceholderLine length="short" />

                <PlaceholderHeader>
                    <PlaceholderLine />
                    <PlaceholderLine length="full" />
                    <PlaceholderLine length="very short" />
                </PlaceholderHeader>

                <PlaceholderParagraph>
                    <PlaceholderLine />
                    <PlaceholderLine />
                    <PlaceholderLine />
                    <PlaceholderLine />
                    <PlaceholderLine />
                </PlaceholderParagraph>
            </Placeholder>

            <Placeholder inverted fluid>
                <PlaceholderImage square />
            </Placeholder>

            <Placeholder inverted fluid>
                <PlaceholderParagraph>
                    <PlaceholderLine />
                    <PlaceholderLine />
                    <PlaceholderLine />
                    <PlaceholderLine />
                </PlaceholderParagraph>
                <PlaceholderParagraph>
                    <PlaceholderLine />
                    <PlaceholderLine />
                </PlaceholderParagraph>
                <PlaceholderParagraph>
                    <PlaceholderLine />
                    <PlaceholderLine />
                    <PlaceholderLine />
                    <PlaceholderLine />
                </PlaceholderParagraph>
                <PlaceholderParagraph>
                    <PlaceholderLine />
                    <PlaceholderLine />
                    <PlaceholderLine />
                    <PlaceholderLine />
                    <PlaceholderLine />
                    <PlaceholderLine />
                    <PlaceholderLine />
                    <PlaceholderLine />
                </PlaceholderParagraph>
            </Placeholder>
        </>
    );
}

function PostContent({ title, updated_at, author_name, sub_title, content }: PostType) {
    return (
        <>
            <Breadcrumb>
                <BreadcrumbSection link name="blog" as={NavLink} to="/blog">All posts</BreadcrumbSection>
                <BreadcrumbDivider className="bcdivider" icon="right chevron" />
                <BreadcrumbSection active>{title}</BreadcrumbSection>
            </Breadcrumb>

            <Header as="h1" size="huge" textAlign="left" inverted>
                {title}
            </Header>
            <HeaderSubheader as="h2" textAlign="left" inverted>
                {sub_title}
            </HeaderSubheader>
            <Divider inverted />

            <Grid>
                <GridRow>
                    <GridColumn width={4}>
                        <Header sub textAlign="left" inverted>
                            {moment(updated_at).format("LLL")}
                        </Header>
                    </GridColumn>
                    <GridColumn width={8}>
                        <Header as="h5" textAlign="left" inverted>
                            <Icon name="user circle" />
                            by {author_name.map((e: string) =>{ return (e +", ")})}
                        </Header>
                    </GridColumn>
                </GridRow>
            </Grid>

            <Image src="/5_interconnect_1120x1120.jpg" size="huge" centered />
            <ReactMarkdown>{content}</ReactMarkdown>
        </>
    );
}

export default function Post() {
    const { id } = useParams();
    const dispatch = useAppDispatch();
    const post = useAppSelector(selectOnePost);
    const postStatus = useAppSelector(selectPostStatus);

    useEffect(() => {
        if (postStatus === "idle") {
            dispatch(fetchOnePost(Number(id)));
        }
        if (postStatus === "fulfilled" && post.id !== Number(id)) {
            dispatch(resetOnePost());
        }
        if (postStatus === "fulfilled") {
            console.log(post);
        }
    }, [id, post, postStatus, dispatch]);

    return (
        <Segment inverted style={{ marginTop: "7em" }}>
            <MediaQuery minWidth={1025}>
                <Container text fluid textAlign="justified">
                    {postStatus === "pending" && <Spinner />}
                    {postStatus === "fulfilled" && (
                        <PostContent
                            title={post.title}
                            updated_at={post.updated_at}
                            author_name={post.author_name}
                            sub_title={post.sub_title}
                            content={post.content}
                        />
                    )}
                    
                </Container>
            </MediaQuery>

            <MediaQuery maxWidth={1024}>
                <Grid centered columns={1} divided verticalAlign="middle"></Grid>
            </MediaQuery>
        </Segment>
    );
}


