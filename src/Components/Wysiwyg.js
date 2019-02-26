import React from 'react';
import { Editor } from '@tinymce/tinymce-react';
import { Form } from 'semantic-ui-react';

class Wysiwyg extends React.Component {
    constructor(props){
        super(props);
        
        
        // this.handleSubmit = this.handleSubmit.bind(this);
        this.handleEditorChange = this.handleEditorChange.bind(this);
        // this.handleEditChange = this.handleEditChange.bind(this);
    }

    // handleEditChange(e) {
    //     this.setState({content: e.target.getContent() });
    //     console.log(e.target.getContent());
    // }

    handleEditorChange(content) {
        // this.setState({ content });
        
        this.props.onEditorChange(content)
        // console.log(this.props.content);.
      }
    


    // handleSubmit(e){ 
    //     console.log(this.state.content);
    //     e.preventDefault();
    // }

    render() {
        return (
            <Form className='WysiwygStyle'  onSubmit={this.props.handleSubmit}>
                <Editor
                    apiKey='2v70mtgk4kz045dkbblsshf5xoky86546vqb4bvj4h3oaqds' 
                    cloudChannel='stable'
                    value={this.props.content} 
                    onEditorChange={this.handleEditorChange} 
                    initialValue="<p>Testing editor, initial value</p>"
                    init={{
                        height: '500',
                        plugins: 'link image code',
                        toolbar: 'undo redo | bold italic | alignleft aligncenter alignright | code'
                    }}
                //    onChange={this.handleEditChange}
                /> 
                <Form.Button content='submit'/>
            </Form>
        );
    }
}



export default Wysiwyg;