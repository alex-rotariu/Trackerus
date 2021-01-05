import {
  FETCH_FEED_FAIL,
  FETCH_FEED_SUCCESS,
  USER_SIGNOUT,
  TRACK_LIKE_SUCCESS,
  TRACK_LIKE_FAIL
} from "../types";

export default (state = {}, action) => {
  switch (action.type) {
    case FETCH_FEED_SUCCESS:
      return { ...state, posts: action.payload };
    case FETCH_FEED_FAIL:
      return state;
    case USER_SIGNOUT:
      return [];
    case TRACK_LIKE_SUCCESS: {
      updatedPosts = state.posts.map((post) => {
        if (post._id === action.payload.track._id)
          return {
            _id: post._id,
            post: post.post,
            track: { ...post.track, likes: action.payload.track.likes }
          };
        else return post;
      });
      return { ...state, posts: updatedPosts };
    }
    case TRACK_LIKE_FAIL: {
      return state;
    }
    default:
      return state;
  }
};
