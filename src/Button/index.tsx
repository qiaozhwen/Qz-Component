import React, {FC} from 'react'
import { Button as MUIButton } from '@material-ui/core';
import './index.css'

const Button: FC<any> = ({name}:any) => {
    return (
        <MUIButton
        classes={{
            root: 'qz-button'
        }}>{name}</MUIButton>
    )
};
export default Button