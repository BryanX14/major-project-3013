import { Link } from "react-router-dom";
import DOMAIN from "../../services/endpoint";
import axios from "axios";
import { Button, Container, Card, Image, Text, Group } from "@mantine/core";
import {  useLoaderData } from "react-router-dom";
import classes from './PostDetails.module.css';
import useBoundStore from "../../store/Store";


function PostDetailsPage() {
  const postDetails = useLoaderData();
  const { user } = useBoundStore((state) => state);
  
  
  return (
    <>
      <Container>
      <Card withBorder radius="md" p={0} className={classes.card}>
      <Group wrap="nowrap" gap={0}>
        <Image className={classes.image} src={postDetails.image} height={160} />
        <div className={classes.body}>
          <Text tt="uppercase" c="dimmed" fw={700} size="xs">
            {postDetails.userId}
          </Text>
          <Text tt="uppercase" c="dimmed" fw={700} size="xs">
            {postDetails.title}
          </Text>
          <Text tt="uppercase" c="dimmed" fw={700} size="xs">
            {postDetails.category}
          </Text>
          <Text tt="uppercase" c="dimmed" fw={700} size="xs">
            {postDetails.content}
          </Text>
        </div>
      </Group>
      {postDetails.id === user.id && (
          <Button>
            <Link to="/posts">Edit</Link>
          </Button>
        )}
      
    </Card>
    
        <Button>
          <Link to="/posts">Back to Posts</Link>
        </Button>
        
      </Container>
    </>
  );
}

export const postDetailsLoader = async ({ params }) => {
  const postId = params.id;
    const response = await axios.get(`${DOMAIN}/api/posts/${postId}`);
    return response.data;
};

export default PostDetailsPage;
