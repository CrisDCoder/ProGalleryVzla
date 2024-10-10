import {useState, useEffect} from 'react';
import axios from 'axios';
import { APP_NAME, BASE_URL } from '../config/globals';
import Header from '../components/core/Header';
import Footer from '../components/core/Footer';
import Gallery from '../components/app/Gallery';
import Loader from '../components/app/Loader';

function App() {

  const [loading, setloading] = useState(true);

  const [searchphotos, setsearchphotos] = useState(true);
  const [photos, setphotos]         = useState([]);

  const [query, setquery]           = useState('');

  const perPageCount                = 40;
  const [page, setpage]             = useState(1);
  const [totalpages, settotalpages] = useState(1);
  const [total, settotal]           =  useState(0);

  const searchByQuery = (text) => {
    getPhotos(1, text);
  }

  const getPhotos = async (page = 1, query = '', more = false) => {
    try {
      console.log('buscando..');
      let url = `${BASE_URL}/search/photos`;
      url     += `?page=${page}`;
      url     += `&per_page=${perPageCount}`;
      url     += `&query=${query != '' ? query : 'gallery'}`;
      url     += `&client_id=${process.env.REACT_APP_API_KEY}`;

      if(!more){setsearchphotos(true);}
      
      const res = await axios.get(url);
      console.log(res.data);

      if(!more){
        setphotos(res.data.results);
      }else{
        setphotos((prevState) => (prevState.concat(res.data.results)));
      }

      setquery(query);

      setpage(page);
      settotalpages(res.data.totalpages);
      settotal(res.data.total);

      if(!more){setsearchphotos(false);}

      if(loading){
        setloading(false);
      }
    } catch (error) {
      console.error(error);
      console.log(`Ha ocurrido un error al intentar obtener las fotos`);
    }
  }

  useEffect(() => {
    if(loading){
      getPhotos();
    }
  }, [photos, loading, searchphotos]);
  
  return (
    !loading ?
    <main className="app-wrapper">
      <Header onSearch={searchByQuery} />
      <div className="page-wrapper">

        <div className="banner-top bg-light py-5">
          <div className="container">
            <h2 className='fw-bold h1 mb-0'>Mi galería, tu galería</h2>
            <p className='mb-0'>
              En <strong>{APP_NAME}</strong> encontrás las mejores 
              imagenes de uso gratuito de parte de fotografos profesionales.
            </p> 
          </div>
        </div>

        {searchphotos ? 
          <Loader />
        :
          <Gallery 
            photos={photos} 
            total={total} 
            totalpages={totalpages}
            page={page} 
            query={query}
            fetchdata={getPhotos}
          />
        }
      </div>
      <Footer />
    </main>
    :
    <>
      <Loader isfull />
    </>
  );
}

export default App;
