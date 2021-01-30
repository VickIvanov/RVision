export class CreateDataDto {

    id: string;
    timestamp: number;
    attack_pattern: string[];
    treat_actor: string[];
    theat_actor: string[];
    tool: string[];
    software: string[];
    campaign: string[];
    identity: string[];
    threat_actor: string[];
    city: string[];
    malware: string[];
    mitre_attack: string[];
    org: string[];
    country: string[];
    ioc: string[];
    technique: string[];
    industry: string[];

    constructor() {
    }
}
