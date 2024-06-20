import Joi from 'joi'
const registerControllers = {
    register(req,res,next)
    {
        const registerSchema = Joi.object({
            name : Joi.string().min(3).max(30).required(),
            email : Joi.string().email().required(),
            password : Joi.string().pattern(new RegExp('^[a-zA-Z0-9]{3-30}$')).required(),
            repeat_password : Joi.ref('password').required()
        })

        const {error} = registerSchema.validate(req.body);

        res.json({
            msg : "hello",
        })
    }
}

export default registerControllers;