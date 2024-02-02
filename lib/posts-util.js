import fs from "fs";
import path from "path";
import matter from "gray-matter";

const postsDirectory = path.join(process.cwd(), "posts")

function getPostData(fileName) {
    const filePath = path.join(postsDirectory, fileName);
    const fileContent = fs.readFileSync(filePath, "utf-8");
    const {data,content} = matter(fileContent);

    const postSlug = fileName.replace(/\.md$/,''); // removes the file extension

    return {
        slug: postSlug,
        ...data,
        content
    };
}

function getAllPosts() {
    const postFiles = fs.readdirSync(postsDirectory);

    const allPosts = postFiles.map(postFile => {
        return getPostData(postFile);
    });

    return allPosts.sort((postA, postB) => postA.date > postB.date ? -1 : 1);
}

function getFeaturedPosts() {
    const allPosts = getAllPosts();

    return allPosts.filter(post => post.isFeatured)
}