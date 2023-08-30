import Joi from 'joi';

export const validatePostCreation = (req, res, next) => {
    const schema = Joi.object({
        title: Joi.string().required(),
        content: Joi.string().required(),
        // ... any other fields you want to validate
    });

    const { error } = schema.validate(req.body);
    if (error) {
        return res.status(400).send(error.details[0].message);
    }
    next();
};

// Similarly, you can create other validation functions for different routes
