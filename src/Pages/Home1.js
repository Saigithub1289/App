import React, {useEffect, useState} from 'react';
import { Container, Row, Col, InputGroup, FormControl } from 'react-bootstrap';
import { useThemeHook } from '../GlobalComponents/ThemeProvider';
import { BiSearch } from 'react-icons/bi';
import SearchFilter from 'react-filter-search';
import ProductCard from '../components/ProductCard';
import './Home1.css'

const Home = () => {
    const [theme] = useThemeHook();
    const [searchInput, setSearchInput] = useState('');
    const [productData, setProductData] = useState([]);

    async function getResponse(){
        const res = await fetch('https://api.escuelajs.co/api/v1/products')
                          .then(res=> res.json());
                          setProductData(await res);
    }

     useEffect(()=>{
        getResponse();
     },[]);

    return (
        <Container>
        <Container className="py-4"><br/><br/> 
            <div className="card text-bg-dark">
        <img src="https://img.freepik.com/free-photo/shopping-cart-miniatures-with-paper-bags_23-2148081029.jpg?size=664&ext=jpg" className="card-img" alt="..." height={"550px"} width={"3000%"}></img>
        <div className="card-img-overlay d-flex flex-column justify-content-center">
          <div className='container'>
            <h5 className="card-title display-3"> NEW SEASON ARRIVELS</h5>
          </div>
        </div>
      </div>      
            <Row className="justify-content-center">
                <Col xs={10} md={7} lg={6} xl={4} className="mb-3 mx-auto text-center">
                    <h1 className={theme? 'text-light my-5': 'text-black my-5'}>Latest products</h1>
                    <InputGroup className="mb-3">
                        <InputGroup.Text className={theme? 'bg-black text-dark-primary': 'bg-light text-light-primary'}>
                            <BiSearch size="2rem" />
                        </InputGroup.Text>
                        <FormControl 
                            placeholder="Search"
                            value={searchInput}
                            onChange={(e)=> setSearchInput(e.target.value)}
                            className={theme? 'bg-light-black text-light': 'bg-light text-black'}
                        />
                    </InputGroup>
                </Col>
                <SearchFilter 
                    value={searchInput}
                    data={productData}
                    renderResults={results =>(
                        <Row className="justify-content-center">
                            {results.map((item, i)=>(
                                <ProductCard data={item} key={i} />
                            ))}
                        </Row>
                    )}
                />
                
            </Row>
        </Container><br/><br/>
        <Container className='Contain'>
        <div className='Container'>
        <h5>Help</h5>
        <h6>FAQ's</h6>
        <h6>Returns and cancellations</h6>
        <h6>support@ecart.com</h6>
        </div>
        <div className='Container'>
        <h5>Terms</h5>
        <h6>Privacy Policy</h6>
        <h6>Terms & Conditions</h6>
        <h6>Promotion</h6>
        <h6>Promoton Share and Win</h6>
        </div>
        <div className='Container'>
        <h5>MyAccount</h5>
        <h6>Login</h6>
        <h6>Register</h6>
        <h6>hello@ecart.com</h6>
        </div>
        <div className='Container'>
        <h5>Secure payment methods</h5> 
        <h6>VISA</h6>
        <h6>PayPal</h6>
        <h6>stripe</h6> 
        <h6>UPI</h6> 
        </div> 
        <div className='Container'>
        {/* <div className='Container'> */}
        <h5>Social media</h5> 
        <h6><i className="fa-brands fa-whatsapp"></i>whatsapp</h6>
        <h6><i className="fa-brands fa-skype"></i>skype</h6>
        <h6><i className="fa fa-paper-plane" aria-hidden="true"></i>Telegram</h6> 
        <h6><i className="fa fa-instagram" aria-hidden="true"></i>instagram</h6>        
        </div>
        <div className='Container'>
        <h5>Address</h5> 
        <h6>Shopping Cart, Kundanahalligate,</h6>
        <h6>Marthahalli,Banglore</h6> 
        {/* </div>  */}
        </div> 
               
      </Container>
        </Container>
    );
};

export default Home;