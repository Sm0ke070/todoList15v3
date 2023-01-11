import {AppActionsType, setErrorAC, setStatusAC} from "../app/app-reducer";
import {Dispatch} from "redux";
import {ResponseType} from "../api/todolists-api";

export const handleServerNetworkError = (dispatch: Dispatch<AppActionsType>, err: string) => {
    dispatch(setErrorAC(err))
    dispatch(setStatusAC('failed'))
};

export const handleServerAppError = <T>(dispatch: Dispatch<AppActionsType>, data: ResponseType<T>) => {
    if (data.messages.length) {
        dispatch(setErrorAC(data.messages[0]))
    } else {
        dispatch(setErrorAC('Some ERROR'))
    }
}