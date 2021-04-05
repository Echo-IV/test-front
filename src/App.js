import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { useEffect, useState } from "react";
import DisplayLimit from "./components/DisplayLimit";
import PhotoItem from "./domains/photos/PhotoItem";
import PhotosByAlbum from "./domains/photos/PhotoByAlbum";
import { getPhotos } from "./services/photos";
import Users from "./domains/users/Users";
import { Main, Header, Flex, Content } from "./App.styled";

function App() {
  const [photos, setPhotos] = useState([]);
  const [limit, setLimit] = useState(25);
  useEffect(() => {
    const fetchData = async () => {
      const data = await getPhotos();
      setPhotos(data);
    };

    fetchData();
  }, []);

  return (
    <div className="App">
      <Main>
        <Router>
          <Header>
            <Flex>
              <Link to="/photos-by-album">Photos by Album</Link>
              <Link to="/users">Users</Link>
            </Flex>
            <Flex>
              <PhotoItem />
              <div>{photos.length}</div>
              <DisplayLimit setLimit={setLimit} limit={limit} />
            </Flex>
          </Header>

          <Content>
            <Switch>
              <Route path="/photos-by-album">
                <PhotosByAlbum limit={limit} />
              </Route>

              <Route path="/users">
                <Users />
              </Route>
            </Switch>
          </Content>

          <footer>Ceci est le footer</footer>
        </Router>
      </Main>
    </div>
  );
}

export default App;
