import { CONSTANTS } from "../actions";
import database from '../firebase/firebase'

export const addList = (list) => {
   return {
       type: CONSTANTS.ADD_LIST,
       list
   }; 
};

export const startAddList = (listData = {}) => {
   return (dispatch) => {
      const {
         title = '',
         cards = []
      } = listData;
      const list = { title, cards };
      database.ref('lists').push(list).then((ref) => {
         dispatch(addList({
            id: ref.key,
            ...list
         }));
      });
   };
};

export const sort = (
   droppableIdStart,
   droppableIdEnd, 
   droppableIndexStart,
   droppableIndexEnd,
   draggableId,
   type

) => {
   return {
       type: CONSTANTS.DRAG_HAPPENED,
       payload: {
        droppableIdStart,
        droppableIdEnd, 
        droppableIndexStart,
        droppableIndexEnd,
        draggableId,
        type
       } 
   }  
}