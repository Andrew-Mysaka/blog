import classes from "./post-content.module.css";
import PostHeader from "./post-header";

const DUMMY_POST = {
    title: "Getting Started with Nextjs",
    image: "getting-started-nextjs.png",
    date: "2022-02-10",
    slug: "getting-started-with-nextjs4",
    content: "# This is a first post"
}

function PostContent() {
    const imagePath = `/images/posts/${DUMMY_POST.slug}/${DUMMY_POST.image}`;

    return (
        <article className={classes.content}>
            <PostHeader title={DUMMY_POST.title} image={imagePath}/>
            Content
        </article>
    );
}

export default PostContent;