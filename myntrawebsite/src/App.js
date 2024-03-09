import logo from './logo.svg';
import './App.css';
import { useSelector } from 'react-redux';
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import './App.css';
import Login from './components/Login/Login';
import ImageGallaryComponent from "./components/ImageSlider";
import { Link } from 'react-router-dom';

function App() {
  let currentcount=useSelector(state=>state.count);
  const [categories, setCategories] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get("http://localhost:3500/categories");
                setCategories(response.data);
            } catch (error) {
                console.error('Error fetching categories:', error);
                // Handle error
            }
        };

        fetchData();
    }, []);
  return (
    <div className="App">
      <h2>No.of Items in Cart {currentcount}</h2>
     <hr/>
      <div className="center-aligned" style={{  marginTop:'30px',width:'100%',marginLeft:'15px' }}>
        <table>
          <tbody>
            {/*<tr>
              <td>
                <img src="/Images/mensClothing.jpg" alt="Boys Clothing" width='200px' height='200px' style={{ marginRight: '5px' }}/>
              </td>
              <td  style={{ marginRight: '10px' }}>
                <img src="/Images/WomensClothing.jpg" alt="Boys Clothing" width='200px' height='200px' style={{ marginRight: '5px' }}/>
              </td>
              <td  >
                <img src="/Images/boysclothing.jpg" alt="Boys Clothing" width='200px' height='200px'style={{ marginRight: '5px' }} />
              </td>
              <td>
                <img src="/Images/girlsclothing.jpg" alt="Boys Clothing" width='200px' height='200px' style={{ marginRight: '5px' }} />
              </td>
              <td>
                <img src="/Images/footwear.jpg" alt="Boys Clothing" width='200px' height='200px' style={{ marginRight: '5px' }}/>
              </td>
              <td>
                <img src="/Images/handbags.jpg" alt="Boys Clothing" width='200px' height='200px' style={{ marginRight: '5px' }}/>
              </td>
  </tr>*/}
            <tr>
              {categories.map(category => (
                <td key={category.id}>
                    <Link to={`/Category/${category.id}`}>
                    <img src={`/Images/${category.catname}.jpg`} alt="Boys Clothing" width='200px' height='200px' style={{ marginRight: '5px' }}/>
                    </Link>
                    {category.catname}
                </td>
            ))}
            </tr>
          </tbody>
        </table>
      </div>
      <hr/>
      <ImageGallaryComponent />

      <hr/>
      <div>
        <img style={{width:'100%'}} src="./Images/offer.jpg"/>
        <hr/>
        <img style={{width:'100%'}} src="./Images/womensday.jpg"/>
        
      </div>
                    
                    
                       
   </div>

  );
}

export default App;
