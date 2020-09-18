import React, {FC} from 'react'
import { Button as MUIButton } from '@material-ui/core';
import './index.css'

const Button: FC<any> = ({name, color = 'primary'}:any) => {
    return (
        <MUIButton
        color={color}
        classes={{
            root: 'qz-button'
        }}>{name}</MUIButton>
    )
};
export default Button