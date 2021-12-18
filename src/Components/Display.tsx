import React, { Component } from "react";
import { UserModel } from "../Model/UserModel";
import { For, ForFunc } from "./For";

interface IDisplayProps{
    UserList:Array<UserModel>
}

export class Display extends Component<IDisplayProps,{}>{

    constructor(props:IDisplayProps){
        super(props);
    }

    public render(): JSX.Element{
        return (
            <React.Fragment>
                <div>
                    <h2>Using Generic Class Component</h2>
                    <ul>
                        <For of={this.props.UserList} body={(userModel:UserModel)=>(
                            <li key={userModel.UserId}>
                                <span>{`${userModel.FirstName} ${userModel.LastName}`}</span>
                            </li>
                        )}/>
                    </ul>    
                </div>

                <div>
                    <h2>Using Generic Function Component</h2>
                    <ul>
                        <ForFunc of={this.props.UserList} body={(userModel:UserModel)=>(
                            <li key={userModel.UserId}>
                                <span>{`${userModel.FirstName} ${userModel.LastName}`}</span>
                            </li>
                        )}/>
                    </ul>    
                </div>

                <div>
                    <h2>Using Simple Array</h2>

                    <ul>
                        {
                            Array.from(this.props.UserList,(userModel:UserModel,index:number)=>{
                                return (
                                        <li key={userModel?.UserId}>
                                            <span>{`${userModel.FirstName} ${userModel.LastName}`}</span>
                                        </li>
                                        )
                            })
                        }
                    </ul>

                </div>
                
            </React.Fragment>
        )
    }
}