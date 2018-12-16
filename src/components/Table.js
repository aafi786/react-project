import React, { Component } from 'react';
import { Table } from 'reactstrap';
import axios from 'axios';

export default class Example extends Component {
    state = {
        newpro: []
    }
    componentDidMount() {
        axios.get('https://jsonplaceholder.typicode.com/posts')
            .then(res => {
                console.log(res);
                this.setState({
                    newpro: res.data.slice(0, 10)
                })
            });
    }
    render() {
        const { newpro } = this.state;
        const newp = newpro.map(newpp => {
            return (
                <tr key={newpp.id}>
                    <th scope="row">{newpp.id}</th>
                    <td>{newpp.title}</td>
                    <td>{newpp.body}</td>
                    <td>@mdo</td>
                </tr>
            )
        })
        return (
            <Table className="mx-auto">
                <thead>
                    <tr>
                        <th>#</th>
                        <th>First Name</th>
                        <th>Last Name</th>
                        <th>Username</th>
                    </tr>
                </thead>
                <tbody>
                    {newp}
                </tbody>
            </Table>
        );
    }
}