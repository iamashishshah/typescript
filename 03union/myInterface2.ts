//TODO: what is the difference between 'type' and 'interface'
/*
interface can open at any time to add new field but type can't be open once it is declared
*/

interface userDetails {
    name: string;
    age: number;
    email: string;
    userId: number;
    googleToken: boolean;
    startTrial(): string;
    getDiscount(couponname: string, off?: number): number;
  }
  interface userDetails {
      getGithubToken?: string
  }
  
  interface userDetails2 {
    name: string;
    age: number;
    email: string;
    userId: number;
    googleToken: boolean;
    startTrial(): string;
    getDiscount(couponname: string, off?: number): number;
  }
  interface userDetails2 {
      getGithubToken?: string
      portfolioLink: string
  }
  
// interface can be extended

interface admin extends userDetails, userDetails2{
    role: "adming" | "ta" | "assistent"
}