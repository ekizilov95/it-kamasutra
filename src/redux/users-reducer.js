const TOGGLE_FOLLOW = "TOGGLE-FOLLOW",
  SET_USERS = "SET-USERS",
  CURRENT_PAGE = "CURRENT-PAGE",
  TOTAL_USERS_COUNT = " TOTAL-USERS-COUNT",
  TOGGLE_IS_FETCHING = " TOGGLE-FETCHING";

export const followed = (userId) => ({
  type: TOGGLE_FOLLOW,
  userId: userId,
});

export const setUsers = (users) => ({ type: SET_USERS, users });

export const selectedPage = (currentPage) => ({
  type: CURRENT_PAGE,
  currentPage: currentPage,
});
export const setTotalUsers = (totalUsersCount) => ({
  type: TOTAL_USERS_COUNT,
  totalUsersCount,
});

export const toggleIsFething = (isFetching) => ({
  type: TOGGLE_IS_FETCHING,
  isFetching,
});
const initialState = {
  pageSize: 5,
  totalCountUsers: 21,
  currentPage: 1,
  isFetching: false,
};

const usersReducer = (state = initialState, action) => {
  switch (action.type) {
    case TOGGLE_FOLLOW:
      return {
        ...state,
        users: state.users.map((user) => {
          if (user.id === action.userId) {
            return {
              ...user,
              followed: !user.followed,
            };
          }
          return user;
        }),
      };
    case SET_USERS:
      return {
        ...state,
        users: [...action.users],
      };
    case CURRENT_PAGE:
      return {
        ...state,
        currentPage: action.currentPage,
      };

    case TOTAL_USERS_COUNT:
      return {
        ...state,
        totalCountUsers: action.totalUsersCount,
      };

    case TOGGLE_IS_FETCHING:
      return {
        ...state,
        isFetching: action.isFetching,
      };

    default:
      return state;
  }
};

export default usersReducer;
