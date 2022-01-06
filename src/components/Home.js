import React, {  Component }  from 'react'
import CardsList from './CardsList'
import Banner from './Banner'
import '../Sass/home.scss'
import { connect } from 'react-redux';
import { fetchItems } from '../actions/itemActions';


class Home extends Component {
    componentWillMount() {
      this.props.fetchItems();
    }
  
    render(){

        const cardsData = this.props.cardsData;

        return (
        <>
          <Banner></Banner>
          <CardsList cardsData={cardsData}/>        
        </>
        );
    }
}

const mapStateToProps = state => ({
  cardsData: state.items.items
});

export default connect(mapStateToProps, { fetchItems })(Home);
