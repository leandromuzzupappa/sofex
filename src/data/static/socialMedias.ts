import { IconNames } from "@data/interfaces/Icons";

interface ISocialMedias {
  icon: IconNames;
  urlTo: string;
  socialMediaName: string;
}

export const socialMedias: ISocialMedias[] = [
  {
    icon: IconNames.FACEBOOK,
    urlTo: "https://www.facebook.com",
    socialMediaName: "Facebook",
  },
  {
    icon: IconNames.TWITTER,
    urlTo: "https://www.x.com",
    socialMediaName: "X",
  },
  {
    icon: IconNames.INSTAGRAM,
    urlTo: "https://www.instagram.com",
    socialMediaName: "Instagram",
  },
  {
    icon: IconNames.LINKEDIN,
    urlTo: "https://www.linkedin.com",
    socialMediaName: "Linkedin",
  },
  {
    icon: IconNames.YOUTUBE,
    urlTo: "https://www.youtube.com",
    socialMediaName: "Youtube",
  },
];
