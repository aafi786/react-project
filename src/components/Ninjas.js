import React from 'react';
import { ListGroup, ListGroupItem, Button } from 'reactstrap';


const Ninjas = ({ project, delProj }) => {


    const projectlist = project.map(proj => {
        if (proj.id > 1) {
            return (
                <div key={proj.id}>
                    <ListGroup>
                        <ListGroupItem color="success"> <strong>{proj.title}</strong> - {proj.category}

                            <Button onClick={() => { delProj(proj.id) }} className="float-right" color="primary" size="sm" >Delete</Button>

                            <Button className="float-right mr-1" color="warning" size="sm" >Edit</Button>
                        </ListGroupItem>
                    </ListGroup>
                </div>
            )
        }
    });
    return (
        <div>
            <h1>Projects</h1>
            {projectlist}
        </div>

    )

}
export default Ninjas;