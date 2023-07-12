import React from 'react'
import './Registration.css'

const Registration = () => {
  return (
    <form action="" className="registration">
        <input type="text" name="fName" placeholder="Ім'я" />
        <input type="text" name='lName' placeholder='Прізвище' />
        <input type="text" name='login' placeholder='Придумайте логін' />
        <input type="password" name="password" placeholder='Придумайте пароль' />
        <input type="password" name="repeatPassword" placeholder='Повторить пароль' />
        <input type="text" name='contact' placeholder='Номер телефону або e-mail' />
        <div className="agree-bl d-f align-center">
            <input type="checkbox" name="privacy" id="privacy"/>
            <label htmlFor="privacy">Погоджуюсь на умови політики конфіденційності</label>
        </div>
        <div className="agree-bl d-f align-center">
            <input type="checkbox" name="personal" id="personal"/>
            <label htmlFor="personal">Погоджуюсь на обробку персональних даних</label>
        </div>
        <button className="registration-btn">Зареєструватись</button>    
    </form>
  )
}

export default Registration
