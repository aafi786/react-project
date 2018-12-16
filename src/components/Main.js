import React, { Component } from "react";
import Ninjas from './Ninjas';
import AddNinja from './AddNinja';
import { Jumbotron } from 'reactstrap';
import Table from "./Table";


export default class Main extends Component {
    state = {
        project: [
            {
                id: 1,
                title: 'Business Website',
                category: 'Web Design'
            },
            {
                id: 2,
                title: 'Social App',
                category: 'Mobile Development'
            },
            {
                id: 3,
                title: 'Ecommerce Shopping Cart',
                category: 'Web Development'
            }
        ],
    }

    mergeProj = (proj) => {
        let projs = [...this.state.project, proj];
        this.setState({
            project: projs
        });
    }

    delProj = (id) => {
        let delprojs = this.state.project.filter(proj => {
            return proj.id !== id;
        })
        this.setState({
            project: delprojs
        })
    }


    render() {

        return (
            <div>
                <Jumbotron>
                    <h1 className="display-3">Project Manager - React </h1>
                    <p className="lead">This is a simple hero unit, a simple Jumbotron-style component for calling extra attention to featured content or information.</p>
                    <hr className="my-2" />
                    <AddNinja mergeProj={this.mergeProj} />
                </Jumbotron>
                <div className="container">
                    <Ninjas delProj={this.delProj} project={this.state.project} />
                    <Table />
                </div>

            </div>
        )
    }
}