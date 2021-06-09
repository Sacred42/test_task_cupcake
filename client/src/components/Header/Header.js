import LongRow from '../LongRow/LongRow';
import ShortRow from '../ShortRow/ShortRow';

const Header = () => {
   
    return (
    <div>
       <LongRow firstRow={'Pair name/market'}/>
       <ShortRow secondRow={'First'}/>
       <ShortRow thirdRow={'Second'}/>
       <ShortRow fourthRow={'Third'}/>
    </div>
    )  
}

export default Header;
