import React, { useEffect } from 'react';
import '../Input/Input.css';

const Input = ({ label, type, validationType, name, icon = null, direction = '', validationdata, error }) => {

    useEffect(() => {
        let genderBtn = document.querySelectorAll('.gender');
        let paymentBtn = document.querySelectorAll('.data-receive-method'); 
       
        for( let i = 0; i < genderBtn.length; i ++) {
            genderBtn[i].addEventListener('click', (e) => {
                for(let d = 0; d < genderBtn.length; d ++) {
                   genderBtn[d].classList.remove('active');
                   genderBtn[d].closest('div').classList.remove('active')
                }
                e.target.classList.add('active')
                e.target.closest('div').classList.add('active')
                console.log('added')
            })
        }
       
        for( let i = 0; i < paymentBtn.length; i ++) {
            paymentBtn[i].addEventListener('click', (e) => {
                for(let d = 0; d < paymentBtn.length; d ++) {
                   paymentBtn[d].classList.remove('active');
                   paymentBtn[d].closest('div').classList.remove('active')
                }
                e.target.classList.add('active')
                e.target.closest('div').classList.add('active')
                console.log('added')
            })
        }


    })    
 
    return (
        <div className='input'>

                <div className={` input__${type}-wrapper ${type}`}>
                    <input className={`input__${type} ${name}`} id={name} type={type} name='gender' />
                    <label htmlFor={name}>{label}</label>
                    {icon && <img className={`input__${type}-icon`} src={icon} alt='icon' />}
                </div>
        </div>
    )
}
export default Input;