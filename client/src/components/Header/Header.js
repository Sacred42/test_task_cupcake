import './Header.css';
import LongRow from '../LongRow/LongRow';
import ShortRow from '../ShortRow/ShortRow';

const Header = () => {
   
    return (
    <div className='header_row_container'>
       <LongRow firstRow={'Pair name/market'}/>
       <ShortRow secondRow={'First'}/>
       <ShortRow thirdRow={'Second'}/>
       <ShortRow fourthRow={'Third'}/>
    </div>
    )  
}

export default Header;
