import Card from './Card'
import {card_Data} from "../data"
export default function Cardgrid(){
    return (
         <div class="cardGrid">
            {card_Data.map((data) => <Card {...data} />)}
            
         </div>
     );
} 