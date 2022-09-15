const textRegExp = new RegExp(/^^[A-ZА-Я][а-яА-ЯёЁa-zA-Z]+$/i); 
const numberRegExp = new RegExp(/^[0-9]*$/);
const emailRegExp = (/^\w+([-]?\w+)*@\w+([-]?\w+)*(\.\w{2,3})+$/);

export {
    textRegExp,
    numberRegExp,
    emailRegExp,
}