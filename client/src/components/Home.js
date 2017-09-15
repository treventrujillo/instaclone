import React from 'react';
import PostForm from './PostForm';
import Post from './Post';

class Home extends React.Component {
  state = { posts: [] }

  addPost = (post) => {
    let { posts } = this.state;
    this.setState({ posts: [post, ...posts] })
  }

  render() {
    let { posts } = this.state;
    let instaPosts = posts.map(p => <Post key={p.id} {...p} />);
    return (
      <div>
        <PostForm addPost={this.addPost} />
        { instaPosts }
      </div>
    )
  }
}

export default Home;