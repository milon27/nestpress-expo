import { AxiosError } from "axios"
import { StatusCode } from "../constants/code.constant"
import { MessageConstant } from "../constants/message.constant"
import { IErrorResponse } from "../services/_common/common.dto"

export const ErrorUtil = {
    getErrorMessage: (error: AxiosError | Error): { message: string } => {
        if (error instanceof AxiosError) {
            // ! if 500 then show something went wrong, show a button to share error with MM team, open error screen
            if (error.response?.status === StatusCode.SERVER_ERROR) {
                return { message: MessageConstant.SOMETHING_WENT_WRONG }
            }
            if (error.code === AxiosError.ERR_NETWORK) {
                return { message: MessageConstant.NO_INTERNET }
            }
            if (error.code === AxiosError.ETIMEDOUT) {
                return { message: MessageConstant.SLOW_INTERNET }
            }
            if (error.code === AxiosError.ECONNABORTED) {
                return { message: MessageConstant.SLOW_INTERNET }
            }
            // ! when not server error, don't show error screen
            const serverError = (error.response?.data as IErrorResponse)?.message
            let errorMessage
            if (typeof serverError === "string") {
                errorMessage = serverError || error?.message
            } else {
                errorMessage = "Zod Error!"
            }

            return { message: errorMessage }
        }
        // todo: learn about better auth error handling
        //  else if (error instanceof BetterFetchError) {
        //     const message = (error.error as { message: string; code: string }).message
        //     return { message }
        // }
        else {
            return { message: error?.message }
        }
    },
}
