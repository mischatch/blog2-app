import React from 'react';
import { connect } from 'react-redux';



class LandingPage extends React.Component {
  constructor(props){
    super(props);

    this.newPost = this.newPost.bind(this);
  }

  newPost(){
    debugger
    let post = {
      title: 'title',
      body: 'body',
      location: 'location',
      price: 'price',
      time: 'time',
    }
    this.props.createPost({post: post});
  }

  create(){
    return(
      <div>
        <button onClick={this.newPost}>Create Post</button>
      </div>
    )
  }


  render(){
    return (
      <div>
      <h1>Landing Page</h1>
      {this.create()}
      </div>

      

    )
  }

}

const mapStateToProps = (state) => {
  debugger
  return {
    posts: state.posts,
  }
}

const mapDispatchToProps = (dispatch) => ({
  createPost: (post) => dispatch({ type: 'RECEIVE_POST', post }),
});

export default connect(mapStateToProps, mapDispatchToProps)(LandingPage);

// export default LandingPage;
