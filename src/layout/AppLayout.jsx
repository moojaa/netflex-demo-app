import React, { useState } from 'react'
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Outlet,useNavigate } from 'react-router-dom'

const AppLayout = () => {
    const [keyword,setKeyword] =useState('')
    const navigate=useNavigate()

    const searchByKeyword=(event)=>{
        event.preventDefault()
        navigate(`movies?q=${keyword}`)
        setKeyword('')
    }

    return (
        <div>
            <Navbar expand="lg" className="bg-black" data-bs-theme="dark">
                <Container fluid>
                    <Navbar.Brand href="/">
                        <img
                            src="/img/SUNFLEX.png"
                            height="30"
                            className="d-inline-block align-top"
                            alt="SUNFLEX logo"
                        />
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="navbarScroll" />
                    <Navbar.Collapse id="navbarScroll">
                        <Nav
                            className="me-auto my-2 my-lg-0 text-white"
                            style={{ maxHeight: '100px' }}
                            navbarScroll
                        >
                            <Nav.Link href="/">Home</Nav.Link>
                            <Nav.Link href="/movies">movies</Nav.Link>
                        </Nav>
                        <Form className="d-flex" onSubmit={searchByKeyword}>
                            <Form.Control
                                type="search"
                                placeholder="Search"
                                className="me-2"
                                aria-label="Search"
                                value={keyword}
                                onChange={(event)=>setKeyword(event.target.value)}
                            />
                            <Button variant="outline-danger" type='submit'>Search</Button>
                        </Form>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
            <Outlet />
        </div>
    )
}

export default AppLayout