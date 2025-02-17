import {Secret, JwtPayload} from 'jsonwebtoken';

export interface jwt {
    secret: Secret
    paiload: JwtPayload
}