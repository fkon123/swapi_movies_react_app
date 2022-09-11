import useFetch from "./Hooks/useFetch";
import {useEffect, useState} from "react";
import NavBar from "./Components/NavBar/NavBar";
import ListItem from "./Components/ListItem/ListItem";
import ItemDescription from "./Components/ItemDescription/ItemDescription";
import {
  MainContentWrapper,
  ListItemsWrapper,
  DescriptionWrapper,
    NoMovieWrapper
} from "./styled";


function App() {
    const {data, isLoading, isError} = useFetch();
    const [selectedMovie, setSelectedMovie] = useState(0);
    const [userInput, setUserInput] = useState('');

    function filterMovies (movie) {
        return movie.title.toUpperCase().includes(userInput.toUpperCase());
    }
    // useEffect(() => {console.log(movieId)},[movieId]);

  return (
    <div>
      <NavBar userInput={userInput} setUserInput={setUserInput} />
      <MainContentWrapper>
        <ListItemsWrapper>
            {data?.results?.filter(filterMovies).map((movie) => {
                return (<ListItem key={movie.episode_id} movie={movie} setSelectedMovie={setSelectedMovie} />)
            })}
        </ListItemsWrapper>
        <DescriptionWrapper>
            {selectedMovie ? <ItemDescription selectedMovie={selectedMovie}/> : <NoMovieWrapper><p>No movie selected</p></NoMovieWrapper>}
        </DescriptionWrapper>
      </MainContentWrapper>
    </div>
  );
}

export default App;
