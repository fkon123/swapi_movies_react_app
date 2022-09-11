//TODO χρησιμοποιώ το import react from react σε κάθε .jsx???
//TODO Τα ονόματα των μεταβλητών (change navbar me mikro)
import styled from "styled-components";
import SearchBar from "../SearchBar/SearchBar";
import SortButton from "../SortButton/SortButton";

const Navbar = styled.div`
    background-color: #F7F8FA;
    display: flex;
    padding-top: 10px;
    padding-bottom: 10px;
    padding-left: 10px;
    padding-right: 10px;
    border-bottom: 2px solid ;
    border-bottom-color: gray;
    
    @media (min-width: 767px) {
    padding-right: 30px;
  }
`;

export default function NavBar () {
    return <Navbar>
        <SortButton/>
        <SearchBar/>
    </Navbar>
}