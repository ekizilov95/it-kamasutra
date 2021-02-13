const TOGGLE_FOLLOW = "TOGGLE-FOLLOW";

const initialState = {
  users: [
    {
      id: 1,
      userName: "Petr",
      photoUrl:
        "https://www.atlassian.com/ru/dam/jcr:ba03a215-2f45-40f5-8540-b2015223c918/Max-R_Headshot%20(1).jpg",
      status: "I am the goddess of disco",
      location: { country: "USA", city: "Chandler" },
      followed: false,
    },
    {
      id: 2,
      userName: "Sophie",
      photoUrl:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT5Ei5MpqMeBdzn6kCVjz2xJM8VtEaVw2FOqw&usqp=CAU",
      status: "I'm the user researcher on the Secure Communications service",
      location: { country: "Canada", city: "Oslo" },
      followed: true,
    },
    {
      id: 3,
      userName: "John",
      photoUrl:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTt0OxizlNrXi-NOTAl6cIifVt5scyqwhA04Q&usqp=CAU",
      status:
        "I am just as obsessed with delightful UX as unshakable rapport with my team.",
      location: { country: "Mixica", city: "Mehico" },
      followed: false,
    },
  ],
};

export const followActionCreator = (userId) => ({
  type: TOGGLE_FOLLOW,
  userId: userId,
});

const usersReducer = (state = initialState, action) => {
  switch (action.type) {
    case TOGGLE_FOLLOW:
      return {
        ...state,
        users: state.users.map((user) => {
          if (user.id === action.userId) {
            return { ...user, followed: !user.followed };
          }
          return user;
        }),
      };
    default:
      return state;
  }
};

export default usersReducer;
