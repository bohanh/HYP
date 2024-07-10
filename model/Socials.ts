export class Socials {
    linkedin: string;
    twitter: string;
    instagram: string;
    facebook: string;

    constructor(s1: string = "", s2: string = "", s3: string = "", s4: string = "") {
        this.linkedin = s1;
        this.twitter = s2;
        this.instagram = s3;
        this.facebook = s4;
    }

    getSocial(type: string): string {
        switch (type.toLowerCase()) {
            case "linkedin":
                return this.getLinkedIn();
            case "twitter":
                return this.getTwitter();
            case "instagram":
                return this.getInstagram();
            case "facebook":
                return this.getFacebook();
        }
        return "";
    }

    getLinkedIn(): string {
        return "https://www.linkedin.com/in/" + this.linkedin;
    };

    getTwitter(): string {
        return "https://www.twitter.com/" + this.twitter;
    };

    getInstagram(): string {
        return "https://www.instagram.com/" + this.instagram;
    };

    getFacebook(): string {
        return "https://www.facebook.com/" + this.facebook;
    };
}