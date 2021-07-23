import * as yup from 'yup'

const formSchema=yup.object().shape({
    name: yup 
        .string()
        .trim()
        .min(2,"name must be at least 2 characters"),
    instructions: yup
        .string()
        .trim(),
    size: yup
        .string()
        .oneOf(['small', 'medium','large', 'xl']),
    cheese: yup.boolean(),
    pepperoni: yup.boolean(),
    bacon: yup.boolean(),
    sausage: yup.boolean(),
});
export default formSchema;