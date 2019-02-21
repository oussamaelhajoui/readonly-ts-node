  class Client{
      private readonly client: twitchclient = {username: "bob", icon:"base64", followDate: new Date()};
      
      constructor(){
        console.log(this.client);
      }
      
      fakeFunc = () => {
        console.log(this.client.followDate.getDate());
      }
      
      getUsername = () => {
        let username = this.client.username[0].toUpperCase() + this.client.username.slice(1); 
        console.log(username);
        return username;
      }
  }
  
  interface twitchclient{
      username: string;
      icon: string;
      followDate: Date;
  } 
  
  const client = new Client();
  client.getUsername();
  
  