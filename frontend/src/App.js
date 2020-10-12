import React from 'react';
import { Container } from 'react-bootstrap';
import Header from './components/Header';
import Footer from './components/Footer';
import HomeSreeen from './screens/HomeScreen';
function App() {
    return (
        <>
            <Header />
            <main className="py-3">
                <Container>
                    <h1>Welcome to Proshop</h1>
                    <HomeSreeen />
                </Container>
            </main>
            <Footer />
        </>
    );
}

export default App;
