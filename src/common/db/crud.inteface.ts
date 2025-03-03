export interface KeyValue{
    name: string; 
    value: string|boolean|number|Date;
}

export interface Table{
    name:string; 
    keyValues:KeyValue[];
}

export interface Condition{    
    conditionField: string; 
    condition: string | '>' | '<' | '<>'| '<=' | '>=' | 'IN' | 'BETWEEN' | 'ANY'; 
    condtionValue: string;
    connector: string | 'AND' | 'OR';
}