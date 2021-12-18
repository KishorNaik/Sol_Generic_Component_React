import { UserModel } from "../Model/UserModel";

export const UserListData=():Array<UserModel>=>{
    let userModelList:Array<UserModel>=new Array<UserModel>();
        userModelList.push({FirstName:"Kishor",LastName:"Naik",UserId:1});
        userModelList.push({FirstName:"Yogesh",LastName:"Naik",UserId:2});
        userModelList.push({FirstName:"Eshaan",LastName:"Naik",UserId:3});

    return userModelList;
}