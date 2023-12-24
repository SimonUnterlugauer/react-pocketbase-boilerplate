import PageHeading from "../../subcomponents/headings/PageHeading";
import Table from "../../subcomponents/lists/Table";
import { getPosts } from "../../../services/PocketBaseService"
import { useEffect, useState } from "react";

export default function Posts() {

    async function getAllPosts() {
        const posts = await getPosts();
        console.log(posts);
        
        try {
            const transformedPosts = posts.map(post => ({
                colOne: post.img,                   // assuming img contains the image file name or URL
                colTwo: post.author,
                colThree: post.title,
                colFour: post.text.substring(0, 50), // limiting to first 50 characters
                colFive: post.collectionName,
                colSix: post.id,
            }));
            return transformedPosts;
        } catch {
            return [];
        }
        
    }

    const [listItems, setListItems] = useState([]);

     // We define the useEffect hook to call getAllPosts when the component mounts
    useEffect(() => {
        getAllPosts().then(setListItems);
    }, []);

    return (
        <div>
            <PageHeading heading="Deine Posts"/>

            <Table 
                listButtonLink="/posts/add" 
                listButton="Add User" 
                listItems={listItems}
                listHeader="Posts" 
                listDescription="Füge hier in die Komponente neue Posts hinzu."
            />
        </div>
    )
}