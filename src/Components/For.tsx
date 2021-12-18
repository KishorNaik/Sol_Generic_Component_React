import React, { Component, PropsWithChildren } from "react";

export interface IForProps<T>{
    of:T[];
    //body(element:T,index?:number):JSX.Element
    body:(element:T,index?:number)=>JSX.Element
}

export class For<T> extends Component<IForProps<T>>{

    constructor(props:IForProps<T>){
        super(props);
    }

    public render():JSX.Element{
        return (
            <React.Fragment>
                {
                    Array.from(this.props.of,(element,index)=>(
                        this.props.body(element,index)
                    ))
                }
            </React.Fragment>
        )
    }

}

/*
    We can't use React.FunctionComponent type annotation while creating Generic Component  
*/

export const ForFunc=<T extends unknown>(props:PropsWithChildren<IForProps<T>>): JSX.Element | null =>{
    return (
        <React.Fragment>
            {
                 Array.from(props.of,(element,index)=>(
                    props.body(element,index)
                ))
            }
        </React.Fragment>
    )
}
    