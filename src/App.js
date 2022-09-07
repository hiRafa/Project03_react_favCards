import { Route, Switch } from "react-router-dom";
import AllCardsPage from "./pages/AllCards";
import FavoritesPage from "./pages/Favorites";
import NewCardPage from "./pages/NewCard";
import { useState } from "react";
import Backdrop from "./components/Backdrop";
import Modal from "./components/Modal";
import ButtonClose from "./components/ui/ButtonClose";
import Layout from "./components/ui/Layout";

function App() {
  const [modalIsOpen, setmodalIsOpen] = useState(true);

  const closeModalHandler = () => {
    setmodalIsOpen(false);
    console.log("hello when im clicked");
  };

  return (
    <Layout>
      {modalIsOpen && (
        <Modal>
          <h3>
            Welcome to this GALLERY webapp. Add your favorite stuff with images,
            rank, title and short descriptions.
          </h3>
          <ButtonClose txt="Proceed" onClose={closeModalHandler}></ButtonClose>
          <ButtonClose txt="Cancel" onClose={closeModalHandler}></ButtonClose>
        </Modal>
      )}
      {modalIsOpen && <Backdrop onCancel={closeModalHandler} />}

      <Switch>
        <Route path="/" exact>
          <AllCardsPage />
        </Route>

        <Route path="/home">
          <AllCardsPage />
        </Route>
        <Route path="/new-card">
          <NewCardPage />
        </Route>
        <Route path="/favorites">
          <FavoritesPage />
        </Route>
      </Switch>
    </Layout>
  );
}

export default App;
