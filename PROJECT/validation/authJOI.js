import Joi from "joi";

const authjoi = new Joi.object({
    username: Joi.string().min(3).max(30).required(),

    email: Joi.string().email({
        minDomainSegments: 2,
        tlds: { allow: ["com", "net"] },
      }).lowercase().required().trim(),

      password: Joi.string().min(8).pattern(new RegExp("^[a-zA-Z0-9]{3,30}$")).trim(),
    

})
export default authjoi