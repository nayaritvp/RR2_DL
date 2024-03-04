import React from 'react';
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';

const Tarjeta = ({ infoDetail, loading }) => {
    return (
        <div className="d-flex justify-content-center align-items-center" style={{ height: '100vh', backgroundColor: '#f8f9fa' }}>
            {loading ? (
                <Card style={{ width: '18rem' }} className="text-danger">
                    <Card.Img variant="top" src={infoDetail.sprites.other.dream_world.front_default} alt={infoDetail.name} />
                    <Card.Body>
                        <Card.Title>{infoDetail.name}</Card.Title>
                    </Card.Body>
                    <ListGroup className="list-group-flush">
                        <ListGroup.Item>hp: {infoDetail.stats[0].base_stat}</ListGroup.Item>
                        <ListGroup.Item>attack: {infoDetail.stats[1].base_stat}</ListGroup.Item>
                        <ListGroup.Item>defense: {infoDetail.stats[2].base_stat}</ListGroup.Item>
                        <ListGroup.Item>special-attack: {infoDetail.stats[3].base_stat}</ListGroup.Item>
                        <ListGroup.Item>special-defense: {infoDetail.stats[4].base_stat}</ListGroup.Item>
                        <ListGroup.Item>speed: {infoDetail.stats[5].base_stat}</ListGroup.Item>
                    </ListGroup>
                </Card>
            ) : (
                <h1>loading...</h1>
            )}
        </div>
    );
};

export default Tarjeta;