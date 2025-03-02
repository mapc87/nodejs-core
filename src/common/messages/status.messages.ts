import {ok, fail }  from  '@common/messages/es.messages'

export const OkMessage = async (message:string)=>{
    return { status: ok, message: message}
}

export const  failMessage = async (message:string) => {
    return { status: fail, message: message}
}

