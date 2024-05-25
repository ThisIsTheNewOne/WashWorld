export class CreateProfilePictureDTO {
    ProfilePicture: string;
    UserId: string;

    constructor(photoBase64: string, userId: string) {
        this.ProfilePicture = photoBase64
        this.UserId = userId
    }
}

export type GetProfilePictureDTO = string;