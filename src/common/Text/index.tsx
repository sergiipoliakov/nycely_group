import React from "react";

export interface TextProps {
    id?: string,
    tag?: string
    weight?: string,
    size?: string,
    color?: string,
    transform?: string,
    lineHeight?: string,
    className?: string,
    children: React.ReactNode,
    dataWowDelay?: string,
}

const TextComponent = (props: TextProps) => {
    const {
        tag = 'p',
        id,
        weight = '400',
        size = 'default',
        color = 'black',
        transform = 'none',
        className,
        children,
        dataWowDelay,
    } = props;

    const getSize = () => {
        const classes = [];
        switch (size) {
            case 'small':
                classes.push('text--small');
                break;
            case 'standart':
                classes.push('text--standart');
                break;
            case 'default':
                classes.push('text--default');
                break;
            case 'x-default':
                classes.push('text--x-default');
                break;
            case 'medium':
                classes.push('text--medium');
                break;
            case 'middle':
                classes.push('text--middle');
                break;
            case 'l-middle':
                classes.push('text--l-middle');
                break;
            case 'big':
                classes.push('text--big');
                break;
            case 'x-big':
                classes.push('text--x-big');
                break;
            case 'large':
                classes.push('text--large');
                break;
            case 'largest':
                classes.push('text--largest');
                break;
            case 'x-large':
                classes.push('text--x-large');
                break;
            default:
                break;
        }
        return classes;
    };
    const getWeight = () => {
        const classes = [];
        switch (weight) {
            case '100':
                classes.push('font--100');
                break;
            case '200':
                classes.push('font--200');
                break;
            case '300':
                classes.push('font--300');
                break;
            case '400':
                classes.push('font--400');
                break;
            case '500':
                classes.push('font--500');
                break;
            case '600':
                classes.push('font--600');
                break;
            case '700':
                classes.push('font--700');
                break;
            case '800':
                classes.push('font--800');
                break;
            default:
                break;
        }
        return classes;
    };

    const getColors = () => {
        const classes = [];
        switch (color) {
            case 'black':
                classes.push('color--black');
                break;
            case 'white':
                classes.push('color--white');
                break;
            case 'gray':
                classes.push('color--gray');
                break;
            case 'red':
                classes.push('color--red');
                break;
            default:
                classes.push(color);
                break;
        }
        return classes;
    };
    const getTextTransform = () => {
        const classes = [];
        switch (transform) {
            case 'uppercase':
                classes.push('font--uppercase');
                break;
            case 'lowercase':
                classes.push('font--lowercase');
                break;
            case 'capitalize':
                classes.push('font--capitalize');
                break;
            case 'break-line':
                classes.push('font--break-line');
                break;
            default:
                break;
        }
        return classes;
    };

    const setDefaultTextClasses = () => {
        return [
            ...getSize(),
            ...getWeight(),
            ...getColors(),
            ...getTextTransform(),
            className
        ].join(' ');
    };

    return React.createElement(
        tag,
        { className: setDefaultTextClasses(), 'id': id, ...(dataWowDelay ? {'data-wow-delay': dataWowDelay} : {}) },
        children
    );
};

export default TextComponent;
