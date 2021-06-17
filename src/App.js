
import { useEffect, useState } from 'react';
import './App.css';
import NavInshorts from './components/NavInshorts';
import NewsContent from './components/NewsContent';
import Footer from './components/Footer';
import axios from "axios";

function App() {
  const [categories, setCategory]=useState("general")
  const[newsarray, setnewsarray]=useState([]);
  const [newsResult, setnewsresult]=useState();
  const [loadmore, setloadmore]=useState(20);
  const newsapi=async()=>{
    try{

      const news=await axios.get(`https://newsapi.org/v2/top-headlines?country=in&apiKey=65d17845e544420e987e2c90081bd2ad&category=${categories}&pageSize=${loadmore}`);
      console.log(news);
      setnewsarray(news.data.articles);
      setnewsresult(news.data.totalResults);

    }catch(error){
      console.log(error);
    }
  };

  useEffect(()=>{
      newsapi();
     // eslint-disable-next-line
  },[newsResult,categories, loadmore]);
  return (

    <div className="App">
     <NavInshorts setCategory={setCategory}/>
     {newsResult && (
     < NewsContent newsarray={newsarray}
      newsResult={newsResult} loadmore={loadmore}
       setloadmore={setloadmore}/>
     )}
     <Footer/>
    </div>
  );
}

export default App;
