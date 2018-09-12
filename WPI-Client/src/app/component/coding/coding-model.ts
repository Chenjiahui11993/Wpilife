export class CodingModel {
    id: number;
    roomNumber: string;
    validState: boolean;
    constructor(roomNumber: string, validState: boolean) { 
        this.roomNumber = roomNumber;
        this.validState = validState;
    }
}