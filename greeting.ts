// function sayHello(person: string): string {
//     return "Hello, " + person;
//     }
//     var user = "Super Student";
//     document.getElementById("para").innerHTML = sayHello(user);
    //Interface
      interface iPerson{
        firstName : string;
        lastName  : string;
        age? : number;
        phoneNum? : number;
        state? : string;
      
      }

      //Person class

    class Person implements iPerson {
         firstName: string;
         lastName: string;
         age: number;
         phoneNum: number;
         state: string;
        zipCode: number;
        private occupation: string;
        private hourlyWage?: number;
        private hours?: number;
        private certification: string[] = [];

        //Constuctor
        constructor(firstName: string,lastName: string,age?: number,phoneNum?: number,state?: string,
          zipCode?: number,occupation?: string, hourlyWage?: number, hours?: number,) 
        {
          this.firstName = firstName;
          this.lastName = lastName;
          this.age = age;
          this.phoneNum = phoneNum;
          this.state = state;
          this.zipCode = zipCode;
          this.occupation = occupation;
          this.hourlyWage = hourlyWage;
          this.hours = hours;
          
        }

        //Getters and Setters

        getFirstName() : string{
          return this.firstName;
        }
        setFirstName(firstName: string): void {
          this.firstName = firstName;
        }
        getLastName() : string{
          return this.lastName;
        }
        setLastName(lastName: string): void {
          this.lastName = lastName;
        }
        getAge() : number{
          return this.age;
        }
        setAge(age: number): void {
          this.age = age;
        }
        getPhonenum() : number{
          return this.phoneNum;
        }
        setPhoneNum(phoneNum: number): void {
          this.phoneNum = phoneNum;
        }
        getState() : string{
          return this.state;
        }
        setState(state: string): void {
          this.state = state;
        }
        getZipCode() : number{
          return this.zipCode;
        }
        setZipCode(zipCode: number): void {
          this.zipCode = zipCode;
        }
        getOccupation() : string{
          return this.occupation;
        }
        setOccupation(occupation: string): void {
          this.occupation = occupation;
        }
      

        //Methods
        fullName(): string {
          return "My name is " + this.firstName + " " + this.lastName;
        }
        nameAndNum(): string {
          return ("My name is   " +this.firstName +"  " +this.lastName +" and my phone number is " 
                 +this.phoneNum);
        }
        nameAndAddress(): string {
          return ("My name is  " +this.firstName + "  " +this.lastName +" and I live in " +this.state
            +" with Zipcode " +this.zipCode );
        }
        wageRate(): any 
        {
          if (this.hours) {
            this.hours = this.hours;
          } else {
            this.hours = 40;
          }
          let weeklyWage = this.hourlyWage * this.hours;
          return (
            "My name is " + this.firstName + " and I my wage is $" + weeklyWage );
        }
        addCerts(...degrees: string[]): string {
          this.certification.push(...degrees);
          return "My Certifications are:"+this.certification.join(",");
        }
         static createEmp(person?: iPerson):Person{
          return new Person(person.firstName,person.lastName);
        }

      }
      let Anu = new Person("Anu", "Avula", 35, 9898989898, "NC", 28270, "Developer");
      let Anil = new Person("Anil","Kak", 23, 1234567890, "NC", 28270, "Developer");
      let Tarini = new Person("Tarini","Kak",11, 4444567890, "NC",28270,"Student");
      let John = new Person("John", "Man", 28, 123456789,"NC", 28226,"HandyMan",20);
      
      document.getElementById("personName").innerHTML = Anu.fullName();
      document.getElementById("personNameNum").innerHTML = Anil.nameAndNum();
      document.getElementById("personNameAddress").innerHTML = Tarini.nameAndAddress();
      document.getElementById("personWage").innerHTML = John.wageRate();
      document.getElementById("personCert").innerHTML = John.addCerts("MBA","CSM","MCSD");
      document.getElementById("Inf").innerHTML=Person.createEmp({
        firstName:"Peter",lastName:"Mahi"}).fullName();
      
      





















    