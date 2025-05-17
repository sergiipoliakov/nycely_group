import * as React from "react";
import CSS from 'csstype';

export interface ButtonType {
    id?: string,
    size?: string,
    type?: string,
    children: React.ReactNode,
    style?: CSS.Properties,
    small?: boolean,
    classNames?: {
        button?: string,
        wrapper?: string
      },
    disabled?: boolean,
    active?: boolean
    onClick?: React.MouseEventHandler<HTMLButtonElement> | undefined
    htmlType?: 'button' | 'submit' | 'reset' | undefined
}