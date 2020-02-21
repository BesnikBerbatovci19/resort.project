import React,{ Component } from 'react';
import items from './data'

const RoomContext = React.createContext();
// <RoomContext.Provaider value={'hello'}


 class RoomsProvaider extends Component{
        state={
              rooms:[],
              sortedRooms:[],
              featuredRooms:[],
              loading: true,  
              type:'all',
              capacity:1,
              price:0,
              minPrice:0,
              maxPrice:0,
              minSize:0,
              maxSize:0,
              breakfast:false,
              pets:false
        };
        //getdData


        componentDidMount(){
            let rooms = this.fromatData(items)
            let featuredRooms = rooms.filter(room => room.featured === true);
            let maxPrice = Math.max(...rooms.map(item => item.price));
            let maxSize = Math.max(...rooms.map(item => item.size));
            this.setState({
                rooms,
                featuredRooms,
                sortedRooms:rooms,
                loading:false,
                price: maxPrice,
                maxPrice,
                maxSize,
            })
           
        }
        fromatData(items){
            let tempItems = items.map(items=>{
                let id = items.sys.id
                let images = items.fields.images.map(
                    image => image.fields.file.url
                );

                let room = {...items.fields,images,id};
                return room;
            });
            return tempItems;
        }
        getRoom = (slug) =>{
            let tempRooms =[...this.state.rooms];
            const room = tempRooms.find(room => room.slug === slug);
            return room
        }
        handleChange = event =>{
                const target = event.target                
                const value = event.type === 'checkbox' ? target.checked:target.value
                const name = event.target.name
                this.setState({
                 [name]:value   
                },
                this.filterRoom
                )
        }

        filterRooms =()=>{
            let{
                rooms,type,capacity,price,minSize,maxSize,breakfast,pets
            } = this.setState;
            let tempRooms =[...rooms];
            capacity  = parseInt(capacity)
            price = parseInt(price)



            // filter by type
            if(type !== 'all'){
                tempRooms = tempRooms.filter(room =>room.type === type)
            }
            //filter by capacity
            if(capacity !== 1){
                tempRooms = tempRooms.filter(room =>room.capacity>= capacity);
            }
            //filter by price 
            tempRooms = tempRooms.filter(room => room.price <= price);


            //change state
            this.setState({
                    sortedRooms:tempRooms
            })
        }
    render(){
            return <RoomContext.Provider value={{...this.state,getRoom:this.getRoom, handleChange:this.handleChange}}>
                {this.props.children}
            </RoomContext.Provider>;
        
             }
}
const RoomsConsumer = RoomContext.Consumer;

export function withRoomsConsumer(Component){
    return function ConsumerWrapper(props){
        return <RoomsConsumer>
            {value => <Component {...props} context ={value} />}
        </RoomsConsumer>
    }
}
export{ RoomsProvaider, RoomsConsumer, RoomContext}