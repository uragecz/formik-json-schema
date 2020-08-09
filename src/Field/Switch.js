import React from 'react';
import { default as ReactSwitch } from "react-switch";
import { changeHandler, setFieldValueWrapper } from '../utils';

const Switch = ({ config, formik, value = false, error }) => {
    const {
        name,
        fieldClass = 'switch d-block'
    } = config;
    const { setFieldValue } = formik;

    const handleChange = (value) => {
        changeHandler(setFieldValueWrapper(setFieldValue, name), formik, config, value)
    }

    return (
        <label className={ fieldClass + ( error ? ' is-invalid ' : '' ) }>
            <ReactSwitch
                checked={ value }
                onChange={handleChange}
            />
        </label>
    );
}

export default React.memo(Switch);
