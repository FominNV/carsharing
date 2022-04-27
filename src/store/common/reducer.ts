import { CommonAction, CommonActionTypes, ICommonState } from "./types"

const initialState: ICommonState = {
  menuPopup: false,
  rusLang: false,
  loading: false,
  city: "Екатеринбург"
}

export function commonReducer(
  state: ICommonState = initialState,
  action: CommonAction
): ICommonState {
  switch (action.type) {
    case CommonActionTypes.SET_LANGUAGE:
      return {
        ...state,
        rusLang: action.payload.rusLang
      }

    case CommonActionTypes.SHOW_MENU_POPUP:
      return {
        ...state,
        menuPopup: action.payload.menuPopup
      }

    case CommonActionTypes.SET_LOADING:
      return {
        ...state,
        loading: action.payload.loading
      }

    default:
      return state
  }
}
