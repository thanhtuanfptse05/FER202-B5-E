import React, { useState } from 'react';
import { Card, Button } from 'react-bootstrap';

function UserCard({ user }) {
  const [isLiked, setLiked] = useState(false);

  return (
    <Card className="shadow-sm w-100 h-100" style={{ color: 'black' }}>
      <Card.Img variant="top" src={user.avatar} alt={user.name} />
      <Card.Body className="d-flex flex-column">
        <Card.Title>{user.name}</Card.Title>
        <Card.Text>
          <strong>Email:</strong> {user.email}<br />
          <strong>Age:</strong> {user.age}
        </Card.Text>
        <Button
          className="mt-auto"
          onClick={() => setLiked(!isLiked)}
          style={{
            backgroundColor: isLiked ? "#ff4757" : "blue",
            borderColor: isLiked ? "#ff4757" : "blue",
            color: "white",
          }}
        >
          {isLiked ? "Unlike" : "Like"}
        </Button>
      </Card.Body>
    </Card>
  );
}

export default UserCard;
