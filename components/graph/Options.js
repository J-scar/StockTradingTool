import { useState } from 'react';
import Button from "../Button"
import optionStyles from '../../styles/Options.module.css';
import PropTypes from 'prop-types'




const Options = ({ setRuleDisplay, setStatDisplay }) => {


    return (
        <nav className={optionStyles.options}>
        <ul>
            <li>
            <Button onClick={() => setRuleDisplay("show rules")} text="&#8475;"></Button>
            </li>
            <li>
            <Button onClick={() => setRuleDisplay("dont")} text="&#8475;"></Button>
            </li>
            <li>
            <Button onClick={setStatDisplay} text="&#36;"></Button>
            </li>
        </ul>
        </nav>
    )};


Options.propTypes = {
  setDisplay: PropTypes.func,
}

    

export default Options;
