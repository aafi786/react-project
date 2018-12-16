import React, { Component } from 'react';
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';


class AddNinja extends Component {
    state = {
        title: '',
        category: '',
        id: 4
    }

    addproject = (e) => {
        this.setState({
            [e.target.id]: e.target.value

        })
    };

    addsubmit = (e) => {
        e.preventDefault();
        this.props.mergeProj(this.state);
        let id = this.state.id;
        id++;
        this.setState({
            id: id,
            title: '',
            category: ''
        })

    }
    render() {

        return (
            <div className="App">
                <h1>Add Project</h1>

                <Form inline onSubmit={this.addsubmit}>
                    <FormGroup className="mb-2 mr-sm-2 mb-sm-0">
                        <Label for="exampleEmail" className="mr-sm-2">Title</Label>
                        <Input type="text" name="email" id="title" placeholder="Add Title" onChange={this.addproject} value={this.state.title} />
                    </FormGroup>
                    <FormGroup className="mb-2 mr-sm-2 mb-sm-0">
                        <Label for="examplePassword" className="mr-sm-2">Category</Label>
                        <Input type="text" name="password" id="category" placeholder="Add Category" onChange={this.addproject} value={this.state.category} />
                    </FormGroup>
                    <Button>Submit</Button>
                </Form>

            </div>
        );
    }
}

export default AddNinja;
