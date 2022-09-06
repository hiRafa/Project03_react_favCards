import { Route, Switch } from "react-router-dom";
import AllCardsPage from "./pages/AllCards";
import FavoritesPage from "./pages/Favorites";
import NewCardPage from "./pages/NewCard";
import { useEffect, useState } from "react";
import Backdrop from "./components/Backdrop";
import Modal from "./components/Modal";
import ButtonClose from "./components/ui/ButtonClose";
import Layout from "./components/ui/Layout";

function App() {
  const [modalIsOpen, setmodalIsOpen] = useState(true);

  const closeModalHandler = () => {
    setmodalIsOpen(false);
  };

  const print = () => {
    console.log("hello when im clicked");
  };

  return (
    <Layout>
      {/* {modalIsOpen && (
        <Modal>
          <h1>Welcome to this simple web app to add stuff you like as cards</h1>
          <ButtonClose txt="Proceed" onClose={closeModalHandler}></ButtonClose>
          <ButtonClose txt="Cancel" onClose={closeModalHandler}></ButtonClose>
          <button onClick={print}></button>
        </Modal>
      )} */}
      {modalIsOpen && <Backdrop onCancel={closeModalHandler} />}

      <Switch>
        <Route path="/" exact>
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
