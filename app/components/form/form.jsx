import React, { useRef } from 'react';
import styles from '../../styles/form.module.scss';

const Form = () => {
    return (
        <>
            <form action="">
                <div className={styles.FormGroup}>
                    <div className={styles.text_field}>
                        <select name="select" aria-label="Default select example" className={styles.text_field__input}>
                            <option>Выберите тип системы</option>
                            <option value="1">Sed ut perspiciatis</option>
                            <option value="2">Nemo enim ipsam</option>
                            <option value="3">Et harum quidem</option>
                            <option value="4">Temporibus autem</option>
                            <option value="5">Itaque earum rerum</option>
                        </select>
                    </div>
                    <div className={styles.text_field}>
                        <input type="email" placeholder="Ваш e-mail" name="email" id="email" className={styles.text_field__input}/>
                    </div>
                    <div className={styles.text_field}>
                        <input type="text" placeholder="Ваше имя" name="name" id="name" className={styles.text_field__input}/>
                    </div>
                </div>
            </form>
        </>
    );
}

export default Form;





