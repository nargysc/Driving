import React, { useState } from 'react';
import '../Dropdown/Dropdown.css';
import ArrowIcon from '../../images/arrow-down.svg';

const Dropdown = ({ selected, setSelected = false }) => {
    const [isActive, setISActive] = useState(false)
    const paymentOptions = ['Debit card', 'Promote Card',]

    const changeActiveMode = () => setISActive(!isActive);
    const setSelectedData = (val) => {
        setSelected(val);
        setISActive(false);
    }
    return (
        <>
            {
                    <div className='dropdownBtn__wrapper'>
                        <div className='dropdownBtn'>
                            <div onClick={changeActiveMode} className={selected === "" ? 'dropdownBtn__btn' : 'dropdownBtn__btn selected'} >{selected === "" ? 'Choose payment method' : selected}<img src={ArrowIcon} alt="arrow" /></div>
                        </div>
                        {isActive && (<div className='dropdownBtn__content'>
                            {paymentOptions.map((option, index) => (
                                <div key={index} className='dropdownBtn__item' >{option} <button className='dropdownBtn__button' onClick={() => setSelectedData(option)}>Select</button></div>
                            ))}
                        </div>)}
                    </div>
}
        </>
    )
}

export default Dropdown;