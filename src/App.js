import React from 'react';
import styles from './App.css';
import {Cards,Charts,Country} from './components'
import {fetchData} from './apis'
import CoronaImage from './images/image.png'
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
      <Cards data={data}/>
      <Country handleCountryChange={this.handleCountryChange}/>
      <Charts data={data} country={country}/>
    </div>
  );
}
}

export default App;
