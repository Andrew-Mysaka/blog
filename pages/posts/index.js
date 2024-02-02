import AllPosts from "../../components/posts/all-posts";
import {getFeaturedPosts} from "../../lib/posts-util";

function AllPostsPage(props) {
    return (
        <AllPosts posts={props.posts}/>
    );
}

export function getStaticProps() {
    const featuredPosts = getFeaturedPosts();

    return {
        props: {
            posts: featuredPosts
        }
    }
}

export default AllPostsPage;