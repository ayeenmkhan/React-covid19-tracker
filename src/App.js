import React from 'react';
import styles from './App.css';
import {Cards,Charts,Country,Pakistan} from './components'
import {fetchData} from './apis'
import CoronaImage from './images/image.png'
// import HeaderImage from './images/coronaviruses-banner.jpg'
import HeaderImage from './images/banner-covid-19.jpg'
class App extends React.Component {
  state={
    data:{},
    country:''
  }
  async componentDidMount(){
    const fetchedData= await fetchData();
    // console.log(fetchedData);
    this.setState({data:fetchedData})
  }
  handleCountryChange=async(country)=>{
    const fetchedData= await fetchData(country);
    this.setState({data:fetchedData,country:country})
  }
 render(){
   const { data, country }=this.state
  return (
    <div className='container'>
      <img src={CoronaImage} className={styles.image} alt='Header Image' />
      <header>
      <img src={HeaderImage} className="header_image" alt='Header Image' width="100%"/>
      </header>
      <Cards data={data}/>
      <Country handleCountryChange={this.handleCountryChange}/>
      <Charts data={data} country={country}/>
      <h1>Pakistan Data</h1>
      <Pakistan />
    </div>
  );
}
}

export default App;
