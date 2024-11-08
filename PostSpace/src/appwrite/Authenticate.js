import {Client,ID,Account} from "appwrite"
import confi from "../confi/confi"
class Authenticate{
    client=new Client();
    account;
    constructor(client){
        this.client.setEndpoint().setProject();
        this.account=new Account();
    }
    async createaccount({email,password,name}){
       try{ const accountcreate=await this.account.create(ID.unique(),
        email,password,name)
        if (accountcreate)
        {
           //login component here
           this.login({email,password})
        }
        else 
        return accountcreate;
    } catch(error){ throw error;}
    }
    async login({email,password}) {
        try{
         const login=await this.account.createEmailPasswordSession(email,password)
        }
        catch{
            throw error
        }
    }
    async getcurrentinfo(){
       try{ return await this.account.get()}
       catch(error){
        throw error
       }
    }
    async logout(){
        try{
            await this.account.deleteSessions('all')
        }
        catch(error){
            throw error
        }
    }
}
const useauthenticate= new Authenticate();
export default useauthenticate