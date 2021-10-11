const ADD_GURU = "ADD_GURU";
const REMOVE_GURU = "REMOVE_GURU";
const CHANGE_GURU = "CHANGE_GURU";

const defaultState = {
  gurus: [
    {
      alias: "metz",
      name: "Sandi Metz",
    },
    {
      alias: "ada",
      name: "Ada Lovelace",
    },
    {
      alias: "hopper",
      name: "Grace Hopper",
    },
  ],
};

const gurusReducer = (state = defaultState, action) => {
  const { type } = action;

  if (type === ADD_GURU) {
    return {
      gurus: [...state.gurus, action.payload],
    };
  }

  if (type === REMOVE_GURU) {
    return {
      gurus: state.gurus.filter((user) => user.alias !== action.payload),
    };
  }

  if (type === CHANGE_GURU) {
    return {
      gurus: state.gurus.map((guru) => {
        if (guru.alias !== action.payload.alias) return guru;

        return {
          ...guru,
          ...action.payload,
        };
      }),
    };
  }

  return state;
};

describe("Guru reducer should", () => {
  test("add new guru to state", () => {
    const action = {
      type: ADD_GURU,
      payload: {
        alias: "supercrafter",
        name: "JavaScript Ninja Rockstar",
      },
    };

    const newState = gurusReducer(defaultState, action);

    expect(newState.gurus).toEqual([
      {
        alias: "metz",
        name: "Sandi Metz",
      },
      {
        alias: "ada",
        name: "Ada Lovelace",
      },
      {
        alias: "hopper",
        name: "Grace Hopper",
      },
      {
        alias: "supercrafter",
        name: "JavaScript Ninja Rockstar",
      },
    ]);
  });

  test("remove guru from state", () => {
    const action = {
      type: REMOVE_GURU,
      payload: "metz",
    };

    const newState = gurusReducer(defaultState, action);

    expect(newState.gurus).toHaveLength(2);
    expect(newState.gurus).toEqual([
      {
        alias: "ada",
        name: "Ada Lovelace",
      },
      {
        alias: "hopper",
        name: "Grace Hopper",
      },
    ]);
  });

  test("change guru name within state", () => {
    const action = {
      type: CHANGE_GURU,
      payload: {
        alias: "metz",
        name: "The Greate Sandi",
      },
    };

    const newState = gurusReducer(defaultState, action);
    const metz = newState.gurus.find((guru) => guru.alias === "metz");

    expect(metz).toEqual({
      alias: "metz",
      name: "The Greate Sandi",
    });
  });

})