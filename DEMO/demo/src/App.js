import './App.css';
import UserCard from './components/UserCard';
import { users } from './data';
import { Container, Row, Col } from 'react-bootstrap';

function App() {
  return (
    <div className="App">
      <header className="App-header" style={{ padding: '2rem' }}>
        <Container>
          <Row className="justify-content-center">
            {users.map((user) => (
              <Col key={user.id} md={3} className="mb-4 d-flex align-items-stretch">
                <UserCard user={user} />
              </Col>
            ))}
          </Row>
        </Container>
      </header>
    </div>
  );
}

export default App;
