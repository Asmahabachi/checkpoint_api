import React from 'react';


const Post = () =>{
    return (
        <div className="col-md-8 offset-2 my-4">
            <div className="card"style={{ width: "50rem" }}>
            <img
          src="https://images.ctfassets.net/hrltx12pl8hq/7yQR5uJhwEkRfjwMFJ7bUK/dc52a0913e8ff8b5c276177890eb0129/offset_comp_772626-opt.jpg?fit=fill&w=800&h=300"
          alt="fixed"
          className="card-img-top"
        />
        <div className="card-body">
            <h5 className="card-title">{Post.title}</h5>
            <p className="card-text">{Post.body}</p>
        </div>
       </div>
    </div>





    );
};
export default Post;