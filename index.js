class Client {
    constructor() {
        this.client = { username: "bob", icon: "base64", followDate: new Date() };
        this.fakeFunc = () => {
            console.log(this.client.followDate.getDate());
        };
        this.getUsername = () => {
            let username = this.client.username[0].toUpperCase() + this.client.username.slice(1);
            console.log(username);
            return username;
        };
        console.log(this.client);
    }
}
const client = new Client();
client.getUsername();
