import './Header.css';
import LongRow from '../LongRow/LongRow';
import ShortRow from '../ShortRow/ShortRow';

const Header = () => {
    
    return (
    <div className='header_row_container'>
       <LongRow firstRow={'Pair name/market'}/>
       <ShortRow value ={'First'}/>
       <ShortRow value ={'Second'}/>
       <ShortRow value ={'Third'}/>
    </div>
    )  
}

export default Header;
