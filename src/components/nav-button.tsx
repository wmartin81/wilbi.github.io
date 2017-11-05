import * as React from 'react';

export interface NavButtonProps{
    title:string,
    iconClassName:string
}

const NavButton = (props:NavButtonProps) => (
    <div className="navigation-button">
        <div className={"icon " + props.iconClassName}></div>
        <span className="title">{props.title}</span>
    </div>
)

export default NavButton;