import React, { useState, useEffect } from 'react';
import './Navbar.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  Input,
  Button,
} from 'reactstrap';

const Example = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [info, setInfo] = useState('');
  const toggle = () => setIsOpen(!isOpen);
  const [movies, setMovies] = useState([]);

  const searchMovies = () => {
    axios
      .get(
        `https://api.themoviedb.org/3/search/movie?api_key=2bcdb3df9702bc31542cffaec406fda7&query=${info}`
      )
      .then((response) => {
        const data = response.data;
        setMovies(data.results);
      });
  };

  useEffect(() => {
    if (info) {
      searchMovies();
    } else {
      setMovies([]);
    }
  }, [info]);

  return (
    <div
      style={{
        backgroundColor: 'skyblue',
        position: 'static',
        left: '0px',
        fontSize: '50px',
        width:"100%"
      }}
    >
    <div
      style={{
        backgroundColor: 'skyblue',
        position: 'static',
        left: '0px',
        fontSize: '50px'
      }}
     className="container">


      <Navbar light expand="md">
        <NavbarBrand href="/" style={{ fontSize: '30px' }}>
          Love Movie
        </NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse
          isOpen={isOpen}
          navbar
          style={{
            display: 'flex',
            rowDirection: 'row',
            justifyContent: 'space-around',
            alignItems: 'center',
          }}
        >
          <Nav
            className="ml-auto"
            navbar
            style={{
              position: 'relative',
              top: '3px',
              fontSize: '25px',
            }}
          >
            <NavItem>
              <NavLink href="" style={{ fontSize: '25px' }}>
                Components
              </NavLink>
            </NavItem>
            <NavItem
              style={{
                display: 'flex',
                rowDirection: 'row',
                justifyContent: 'space-around',
                alignItems: 'center',
              }}
            >
              <NavLink href="" style={{ fontSize: '25px' }}>
                Search
              </NavLink>
              <Input
                style={{
                  position: 'relative',
                  left: '00px',
                  width: '700px',
                  height: '50px',
                  fontSize: '25px',
                }}
                placeholder="What movie are you looking for?"
                value={info}
                onChange={(e) => {
                  setInfo(e.target.value);
                }}
              />
            </NavItem>
            <UncontrolledDropdown
              nav
              inNavbar
              style={{
                display: 'flex',
                rowDirection: 'row',
                justifyContent: 'space-around',
                alignItems: 'center',
              }}
            >
              <div style={{ position: 'relative', left: '70px' }}>
                <DropdownToggle nav caret style={{ fontSize: '25px' }}>
                  <b>類別</b>
</DropdownToggle>
<DropdownMenu
style={{ fontSize: '30px', backgroundColor: 'pink' }}
>
<DropdownItem className="item" onClick={() => {}}>
科幻
</DropdownItem>
<DropdownItem className="item" onClick={() => {}}>
愛情
</DropdownItem>
<DropdownItem className="item" onClick={() => {}}>
冒險
</DropdownItem>
<DropdownItem className="item" onClick={() => {}}>
宗教
</DropdownItem>
<DropdownItem className="item" onClick={() => {}}>
動作
</DropdownItem>
<DropdownItem divider />
<DropdownItem>Reset</DropdownItem>
</DropdownMenu>
</div>
</UncontrolledDropdown>
</Nav>
</Collapse>

</Navbar>


</div>

<div style={{display:"flex", flexFlow: "row wrap",justifyContent:"flex-start", alignItems:"center", height: "auto", width:"100%"}}>
        {movies.map((movie) => (

          
          <div style={{position:"relative", display:"flex", flexDirection:"column", justifyContent:"center", alignItems:"flex-start", fontSize:"25px",width:"400px", height: "300px", margin:"15px 0px"}}>
            <p style={{height: "30px"}}>{movie.title}</p>

            <p style={{height: "300px",width:"350px"}}>{movie.overview}</p>

          </div>

        ))}
      </div>
</div>
);
};

export default Example;