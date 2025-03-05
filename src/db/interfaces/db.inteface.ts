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
    condition: '='|'>' | '<' | '<>'| '<=' | '>=' | 'IN' | 'BETWEEN' | 'ANY' | 'LIKE'; 
    condtionValue: string|number|boolean;
    connector: string | 'AND' | 'OR';
    // open: string | '('
    // close: string | ')'
}