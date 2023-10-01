export class UserDTO {
    public name: string;
    public email: string;
    public jobRole: string;
    constructor(name: string, email: string, jobRole: string) {
        this.name = name
        this.email = email
        this.jobRole = jobRole
    }
}
