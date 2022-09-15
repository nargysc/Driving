import React, { useEffect, useState } from 'react'
import Title from '../TItle/Title';
import Input from '../Input/Input';
import Dropdown from '../Dropdown/Dropdown';
import '../Form/Form.css';
import {
  textRegExp,
} from '../../RegExp.js';

const Form = () => {

  const [selectedMethod, setSelectedMethod] = useState('');
  const [error] = useState([]);

  useEffect(() => {
    let form = document.querySelector('.form');
    let titles = document.querySelectorAll('.title');
    let containers = document.querySelectorAll('.container');

    window.addEventListener('resize', (e) => {


      if (window.innerWidth < 650) {
        for (let i = 0; i < titles.length; i++) {
          titles[i].classList.add('container_title');
          containers[i].classList.add('container-content');
        }
        form.classList.add('form__container')
      } else {
        for (let i = 0; i < titles.length; i++) {
          titles[i].classList.remove('container_title');
          containers[i].classList.remove('container-content')
        }
        form.classList.remove('form__container')
      }
    })
  })

  const validationData = (e, validationType, name) => {
    console.log(textRegExp.test(e))

  }

  return (
    <div className='form'>
     <fieldset className='form__personal-info personal-info'>
        <Title title='Apply for Driving Lesson' />
        <div className='container'>
              <div className='form__btn-row btn-row'>
                <Input label='' type='text' validationType='text' name='pacient' error={error} validationdata={validationData} />
                <button className='btn-row__button' type='button'>New Applicant</button>
              </div>
              <div className='personal-info__columns columns'>
                <Input label='Surname' type='text' validationType='text' name='surname' error={error} validationdata={validationData} />
                <Input label={'Date birth'} type={'text'} validationType='date' name='birthday' error={error}  validationdata={validationData} />
                <Input label='Name' type='text' validationType='text' name='name' error={error} validationdata={validationData} />
                                <Input label='Middle Name' type='text' validationType='text' name='patronymic' error={error} validationdata={validationData} />

                <div className='form__row'>
                  <Input label='Female' type='radio' name='gender' />
                  <Input label='Male' type='radio' name='gender' />
                </div>
              </div>
        </div>
      </fieldset> 

      <fieldset className='form__contacts contacts'>
        <Title title='Applicant Details' />
        <div className='container'>
              <h5 className='contacts__text text'>
They will be sent to you at the email specified in the contract. You will receive an SMS notification of readiness</h5>
              <div className='contacts__info'>
                <div className='contacts__info-row'>
                  <Input label='Prefix Code' type='text' name='code' validationType='number' direction='left' error={error} validationdata={validationData} />
                  <Input label='Phone number' type='text' validationType='number' name='phone' direction='right' error={error} validationdata={validationData} />
                </div>
                <Input label='Email' type='text' validationType='email' name='email' error={error} validationdata={validationData} />
              </div>
        </div>
      </fieldset>
      <fieldset className='form__payment-method payment'>
        <Title title='Payment method' />
        <div className='container'>
          <Dropdown selected={selectedMethod} setSelected={setSelectedMethod} withBtn={true} />
        </div>
      </fieldset>
    </div>
  )
}

export default Form;