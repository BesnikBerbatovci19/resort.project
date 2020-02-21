import React from 'react';
import RoomsFilter from './RoomsFiter';
import RoomsList from './RoomsList';
import { withRoomsConsumer} from '../context';
import Loading from './Loading';


function RoomsContainer({context}){
const {loading,sortedRooms,rooms} =context;
        if(loading){
            return <Loading />;
          }
          return(
              <>
               <RoomsFilter rooms={rooms}/>
               <RoomsList rooms={sortedRooms}/>
              </>
          )
}
export default withRoomsConsumer(RoomsContainer)






















//import React from 'react';
//import RoomsFilter from './RoomsFiter';
//import RoomsList from './RoomsList';
//import {RoomsConsumer} from '../context';
//import Loading from './Loading';
//export default function RoomsContainer(){
  //  return(
    //    <RoomsConsumer>
      //      {
        //        (value) =>{
          //          const{loading,sortedRooms,rooms} = value;
            //        if(loading){
              //          return <loading />;
                //    }
                  //  return(
                    //    <div>
                      //   <RoomsFilter rooms={rooms}/>
                        // <RoomsList rooms={sortedRooms}/>
                       //  </div>
                    //)
               // }
            //}
        //</RoomsConsumer>
        
   // )
//}