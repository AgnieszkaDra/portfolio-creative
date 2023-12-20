import { fields } from "./fields";

export const validateForm = (form) => {
    let errors = {
        username: '',
        email: '',
        message: '',
    };
    fields.forEach(field => {
        const {label, name, required, pattern, error} = field;
        const value = form[name];
        console.log(value)
        if(required){
            if(value.length === 0){
                const error = `${label} is required!`
                errors = {...errors, [name]:`${error}`}
            } 
        }else if(pattern){
            const reg = new RegExp(pattern)
            if(!reg.test(value)){
                errors = {...errors, [name]:`${error}`}
            }
        }
    })
    return errors
}