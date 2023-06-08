import React, {useState} from "react"

const style = {
    container: `bg-opacity-75 bg-slate-100 w-10/12 m-auto rounded-md shadow-xl p-4 mb-4`,
};
      
const PostTemplate = () => {

    const [showPost, setShowPost] = useState(false);

    return (
        <div className={style.container}>
            {showPost ? (
                <div>
                    <p>Placeholder text</p>
                    <p>Placeholder text</p>
                    <p>Placeholder text</p>
                    <button onClick={() => setShowPost(false)}>See less</button>
                </div>
            ) : (
                <div>
                    <h1>Default Blog Post</h1>
                    <button onClick={() => setShowPost(true)}>Keep reading</button>
                </div>
            )}
        </div>
    )
}

export default PostTemplate;