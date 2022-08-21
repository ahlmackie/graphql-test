const { AuthenticationError } = require("apollo-server");

// server crash caused by a mongoose error => the model.findByIdAndDelete function was being executed twice, removed the thenable and this seems to have resolved the issue
// added auth check as seemed to be able to delete without jwt 
const deleteResolver = (TC, model) => {
    return {
        type: `type DeletedAmount { total: Int}`,
        args: {
            input: ['String'],
        },
        resolve: async (source, args, context, info) => {
            let removed = [];
            if (!context.user) {
                throw new AuthenticationError("Must be logged in");
            }
            await Promise.all(args.input.map(async (entry) => {
                try {
                    const result = await model.findByIdAndDelete(entry)
                    if (result !== null) removed.push(result)
                } catch (error) {
                    console.log(error);
                }
            }))
            return { total: removed.length };
        },
    };
};

module.exports = { deleteResolver };
