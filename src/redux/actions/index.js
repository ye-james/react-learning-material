import jsonPlaceHolder from "../../apis/jsonPlaceHolder";
import _ from "lodash";

export const fetchPosts = () => async (dispatch) => {
  const response = await jsonPlaceHolder.get(
    "https://jsonplaceholder.typicode.com/posts"
  );
  dispatch({ type: "FETCH_POSTS", payload: response.data });
};

export const fetchUser = (id) => async (dispatch) => {
  const response = await jsonPlaceHolder.get(
    `https://jsonplaceholder.typicode.com/users/${id}`
  );
  dispatch({ type: "FETCH_USER", payload: response.data });
};

export const fetchPostsAndUsers = () => async (dispatch, getState) => {
  await dispatch(fetchPosts());

  // const uniqueIds = _.uniq(_.map(getState().posts, "userId"));
  // uniqueIds.forEach((id) => {
  //   dispatch(fetchUser(id));
  // });

  _.chain(getState().posts)
    .map("userId")
    .uniq()
    .forEach((id) => dispatch(fetchUser(id)))
    .value();
};
/* Memoized solution

export const fetchUser = (id) => async (dispatch) => {
  _fetchUser(id, dispatch)
};

const _fetchUser = _.memoize( async(id, dispatch) => {
  const response = await jsonPlaceHolder.get(
    `https://jsonplaceholder.typicode.com/users/${id}`
  );
  console.log(response.data);
  dispatch({ type: "FETCH_USER", payload: response.data });
});

*/
