import React, {useState, useEffect} from 'react';
import './App.css';
import { Header } from "./components/Header";
import { CharacterGrid } from "./components/CharacterGrid";
import { Search } from "./components/Search";
import axios from 'axios'


const App = () => {

  const [items, setItems] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [query, setQuery] = useState('');

  useEffect(() => {
    const fetchItems = async () => {
      const res = await axios(`https://www.breakingbadapi.com/api/characters?name=${query}`)

      setItems(res.data)
      setIsLoading(false)
    }

    fetchItems()
  }, [query])


  return (
    <div className="container">
      <Header />
      <Search  getQuery={(q) => setQuery(q)} />
      <CharacterGrid isLoading={isLoading}  items={items} />
    </div>
  );
}

export default App;
