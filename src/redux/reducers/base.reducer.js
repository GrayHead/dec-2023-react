export const baseReducer = (state = 0, action) => {
    switch (action.type) {
        case "INC":
            return state += action.payload;
        case "DEC":
            return state -= action.payload;
        case "RESET":
            return 0;
        default:
            return state;


    }

}
