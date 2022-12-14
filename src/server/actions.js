import HttpError from '@wasp/core/HttpError.js'

export const createNote = async (args, context) => {
   
    if (!context.user) {
        throw new HttpError(401)
    }
    return context.entities.Note.create({
        data: {
            body: args.body, 
            title: args.title,
            user: {connect: {id: context.user.id}}
        },
    })
}

export const updateNote = async (args, context) => {
    
    if(!context.user){
        throw new HttpsError(401)
    }
    return context.entities.Note.updateMany({
        where: {id: args.noteId, user: {id: args.userId}},
        data: {title: args.data.title, body: args.data.body}
    })
}