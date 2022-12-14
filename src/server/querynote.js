import HttpError from '@wasp/core/HttpError.js'

export const getNote = async (args, context) => {
    console.log("context", context)
    if(!context.user) {
        throw new HttpError(401)
    }
    return context.entities.Note.findMany({
        where: {user: {id: context.user.id}}
    })
}

// export const getSingleNote = async (args, context) =>{
//     if(!context.user) {
//         throw new HttpError(401)
//     }
//     return context.entities.Note.findUnique({
//        where: {id: context.id} 
//     })
// }