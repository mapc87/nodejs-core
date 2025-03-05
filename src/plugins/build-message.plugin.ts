import {db_messages as dm} from '@common/messages/es/es.messages'

export const buildStatusMessage = (  message: string, status:boolean = true)=>{     
    const STATUS = status ? 'ok':'fail'     
    return {status: STATUS, message: message}
}

export const buildDbMessage = ( table:string)=>({
    okCreate: `${table} ${dm.ok_create}`,
    okUpdate: `${table} ${dm.ok_update}`,
    okDelete: `${table} ${dm.ok_delete}`,
    notFound: `${table} ${dm.not_found}`,
    failSelec: `${dm.fail_select} ${table}`,
    failCreate: `${dm.fail_create} ${table}`,
    failUpdate: `${dm.fail_update} ${table}`,
    failDelete: `${dm.fail_delete} ${table}`
})

