import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type DataDocument = Data & Document

@Schema()
export class Data {

    id: string;

    @Prop()
    timestamp: number;

    @Prop()
    attack_pattern: string[];

    @Prop()
    treat_actor: string[];

    @Prop()
    theat_actor: string[];

    @Prop()
    tool: string[];

    @Prop()
    software: string[];

    @Prop()
    campaign: string[];

    @Prop()
    identity: string[];

    @Prop()
    threat_actor: string[];

    @Prop()
    city: string[];

    @Prop()
    malware: string[];

    @Prop()
    mitre_attack: string[];

    @Prop()
    org: string[];

    @Prop()
    country: string[];

    @Prop()
    ioc: string[];

    @Prop()
    technique: string[];

    @Prop()
    industry: string[];

    constructor() {
    }

}

export const DataSchema = SchemaFactory.createForClass(Data)
