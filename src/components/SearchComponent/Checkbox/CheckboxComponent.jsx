import { useState } from 'react';
import { ReactComponent as ArrowDown } from '../../../images/mark.svg';
import styles from './Checkbox.module.scss'

const CheckboxComponent = (props) => {
    const [isChecked, setIsChecked] = useState(false);

    return(
        <div>
            <label>
                <input type="checkbox" 
                    checked={isChecked}
                    onChange={() => setIsChecked((prev) => !prev)}
                    className={styles.checkbox_input}
                    />
                <div className={styles.checkbox_custom}>
                    <div className={`${styles.checkbox_mark} ${isChecked ? styles.mark : ''}`}>
                        <ArrowDown />
                    </div>
                </div>
                <div>
                    {props.label}
                </div>
            </label>
        </div>
    )
}

export default CheckboxComponent;