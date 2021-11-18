import React, { useEffect, useState } from "react";
import { Route } from "react-router-dom";
import axios from "axios";
import Contacts from "./components/Contacts/Contacts";
import Footer from "./components/Footer/Footer";
import NewsList from "./components/NewsList/NewsList";
import MainPage from "./components/MainPage/MainPage";
import NewsDetail from "./components/NewsDetail/NewsDetail";
import Header from "./components/Header/Header";
import "./stylesheet.css";
import "./App.css";


const App = () => {

  const useFetch = () => {
    const [data, updateData] = useState(null);
    const requestUrl = "https://newsapi.org/v2/top-headlines?country=us&apiKey=2328f725cd234f74b6d863d76974d4ea";
    useEffect(() => {
      const fetchData = async () => {
        const response = await axios.get(requestUrl);
        updateData(response.data.articles);
      }
      fetchData();
    }, [])
    return data;
  }
  const result = useFetch();

  return (

    <div className="App">
      <Header />
      <Route
        path="/"
        exact
        render={() => <MainPage
          news={result}
        />}
      />
      <Route
        path="/News"
        exact
        render={() => <NewsList
          news={result}
        />}
      />
      <Route
        path="/Keep abreast of events"
        exact
        render={() => <NewsList
          news={result}
        />}
      />
      <Route
        path="/Contacts"
        exact
        component={Contacts}
      />
      <Route
        path="/News/:name"
        exact
        component={NewsDetail}
      />
      <Footer />
    </div>
  );
}

export default App;
