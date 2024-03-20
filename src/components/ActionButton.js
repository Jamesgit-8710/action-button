import React, { useState } from 'react'
import PropTypes from 'prop-types'
import { getStyleOptions } from '../utils'
import { NotePencil, UserCircle, Trash } from "@phosphor-icons/react";

const ActionButton = ({ type = "Default", status = "Default", size = "Default", iconOnly = "No", icon = true, text = true, swapIcon = "Default", editText = "Action", handleClick }) => {
    const [isHovered, setIsHovered] = useState(false);
    let styleOptions = getStyleOptions(type, status, size);
    
    let iconSize = 24;
    if (size === 'Small')
        iconSize = 20;
    else if (size === 'X-Small')
        iconSize = 18;

    if (iconOnly === "Yes")
        text = false

    let IconComponent;
    switch (swapIcon) {
        case 'Edit':
            IconComponent = NotePencil;
            break;
        case 'Delete':
            IconComponent = Trash;
            break;
        default:
            IconComponent = UserCircle
    }

    const combinedValue = `${type}_${status}_${isHovered}`;

    switch (combinedValue) {
        case 'Neutral_Hover_true':
            styleOptions.backgroundColor = '#F2F3F5';
            break;
        case 'Reverse_Hover_true':
            styleOptions.backgroundColor = '#282829';
            break;
        case 'Default_Hover_true':
            styleOptions.backgroundColor = '#EDFAED';
            break;
    }

    return (
        <button onMouseEnter={() => setIsHovered(true)} onMouseLeave={() => setIsHovered(false)} onClick={handleClick} style={styleOptions} disabled={status==="Disabled"?true:false}>
            {icon && <IconComponent size={iconSize} />}
            {text && editText}
        </button>
    )
}

ActionButton.propTypes = {
    editText: PropTypes.string,
    type: PropTypes.oneOf(["Default", "Neutral", "Reverse"]),
    status: PropTypes.oneOf(["Default", "Hover", "Disabled"]),
    size: PropTypes.oneOf(["Default", "Small", "X-Small"]),
    swapIcon: PropTypes.oneOf(["Default", "Edit", "Delete"]),
    iconOnly: PropTypes.oneOf(["Yes", "No"]),
    icon: PropTypes.bool,
    text: PropTypes.bool,
    handleClick: PropTypes.func
}

export default ActionButton