// client/src/reducers/posts.js
import { FETCH_ALL,CREATE,UPDATE,DELETE } from '../constans/actionTypes';
export default function postsReducer(posts = [], action) {
  switch (action.type) {
    
    case DELETE:
      return posts.filter((post)=>post._id !== action.payload)
    case UPDATE:
      return posts.map((post) => post._id === action.payload._id ? action.payload : post )
    case FETCH_ALL:
      return action.payload;                 // ✅ кладём пришедшие посты
    case CREATE:
      return [...posts, action.payload];     // ✅ добавляем созданный пост
    default:
      return posts;
  }
}
