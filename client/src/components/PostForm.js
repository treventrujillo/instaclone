import React from 'react';
import { Form, Header } from 'semantic-ui-react';
import Dropzone from 'react-dropzone';
import axios from 'axios';

class PostForm extends React.Component {
  state = { title: '', file: '' }

  handleSubmit = (e) => {
    e.preventDefault();
    let data = new FormData();
    let { title, file } = this.state;
    data.append('title', title);
    data.append('img', file);
    axios.post('/api/posts', data)
      .then(res => {
        this.props.addPost(res.data)
        this.setState({ title: '', file: '' })
      })
  }

  handleChange = (e) => {
    this.setState({ title: e.target.value })
  }

  onDrop = (files) => {
    this.setState({ file: files[0] })
  }

  render() {
    return (
      <div>
        <Header as="h3">What are you thinking?</Header>
        <Form onSubmit={this.handleSubmit}>
          <Form.Input
            required
            type="text"
            label="Say something"
            value={this.state.title}
            onChange={this.handleChange}
          />
          <Dropzone
            style={{ border: 'dashed 1px black', width: '100%', height: '50px', marginBottom: '10px', textAlign: 'center' }}
            onDrop={this.onDrop}
          >
            Want to add an image?
          </Dropzone>
          <Form.Button>Submit</Form.Button>
        </Form>
      </div>
    )
  }
}

export default PostForm;
