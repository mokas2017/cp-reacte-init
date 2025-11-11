// Importation des styles CSS et du thème Bootstrap
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

// Importation des composants React-Bootstrap
import {
  Navbar,
  Nav,
  Container,
  Row,
  Col,
  Card,
  Form,
  Button,
} from 'react-bootstrap';

function App() {
  return (
    <div className="App">
      {/* Barre de navigation sticky en haut */}
      <Navbar bg="primary" variant="dark" expand="lg" sticky="top" className="shadow-sm">
        <Container>
          <Navbar.Brand href="#home">🌐 MonSite</Navbar.Brand>
          <Navbar.Toggle aria-controls="navbar-nav" />
          <Navbar.Collapse id="navbar-nav">
            <Nav className="ms-auto">
              <Nav.Link href="#accueil">Accueil</Nav.Link>
              <Nav.Link href="#services">Services</Nav.Link>
              <Nav.Link href="#contact">Contact</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      {/* En-tête de la page */}
      <header className="bg-light py-5 text-center">
        <Container>
          <h1 className="display-4 fw-bold text-primary">Bienvenue sur MonSite</h1>
          <p className="lead text-muted">
            Découvrez nos services et contactez-nous pour en savoir plus.
          </p>
        </Container>
      </header>

      {/* Section des cartes */}
      <Container className="mt-4">
        <Row>
          {/* Carte 1 */}
          <Col xs={12} sm={6} md={4}>
            <Card className="mb-4 shadow-sm border-0 rounded-4">
              <Card.Img
                variant="top"
                src="https://images.unsplash.com/photo-1503023345310-bd7c1de61c7d"
                className="rounded-top-4"
              />
              <Card.Body>
                <Card.Title className="fw-bold">Carte 1</Card.Title>
                <Card.Text className="text-muted">
                  Paysage urbain moderne avec une ambiance dynamique.
                </Card.Text>
                <Button variant="outline-light" className="bg-primary">Voir Plus</Button>
              </Card.Body>
            </Card>
          </Col>

          {/* Carte 2 */}
          <Col xs={12} sm={6} md={4}>
            <Card className="mb-4 shadow-sm border-0 rounded-4">
              <Card.Img
                variant="top"
                src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f"
                className="rounded-top-4"
              />
              <Card.Body>
                <Card.Title className="fw-bold">Carte 2</Card.Title>
                <Card.Text className="text-muted">
                  Ambiance de travail dans un bureau collaboratif.
                </Card.Text>
                <Button variant="outline-light" className="bg-success">Voir Plus</Button>
              </Card.Body>
            </Card>
          </Col>

          {/* Carte 3 */}
          <Col xs={12} sm={6} md={4}>
            <Card className="mb-4 shadow-sm border-0 rounded-4">
              <Card.Img
                variant="top"
                src="https://images.unsplash.com/photo-1493612276216-ee3925520721"
                className="rounded-top-4"
              />
              <Card.Body>
                <Card.Title className="fw-bold">Carte 3</Card.Title>
                <Card.Text className="text-muted">
                  Vue aérienne d’une ville au coucher du soleil.
                </Card.Text>
                <Button variant="outline-light" className="bg-warning text-dark">Voir Plus</Button>
              </Card.Body>
            </Card>
          </Col>
        </Row>

        {/* Formulaire de contact */}
        <Row className="mt-5 justify-content-center">
          <Col xs={12} md={6}>
            <h3 className="mb-4 text-center text-primary">Formulaire de Contact</h3>
            <Form className="p-4 bg-light rounded-4 shadow-sm">
              <Form.Group className="mb-3" controlId="formName">
                <Form.Label className="fw-semibold">Nom</Form.Label>
                <Form.Control type="text" placeholder="Entrez votre nom" />
              </Form.Group>

              <Form.Group className="mb-3" controlId="formEmail">
                <Form.Label className="fw-semibold">Email</Form.Label>
                <Form.Control type="email" placeholder="Entrez votre email" />
              </Form.Group>

              <Form.Group className="mb-3" controlId="formMessage">
                <Form.Label className="fw-semibold">Message</Form.Label>
                <Form.Control as="textarea" rows={3} placeholder="Votre message..." />
              </Form.Group>

              <Button variant="primary" type="submit" className="w-100">
                Envoyer
              </Button>
            </Form>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default App;