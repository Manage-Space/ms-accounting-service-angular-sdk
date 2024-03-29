/**
 * ManageSpace Accounting API
 * ManageSpace Accounting API Documentation
 *
 * The version of the OpenAPI document: 0.0.12-dev
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */
import { MerchandiseIncomeType } from './merchandiseIncomeType';


export interface MerchandiseIncomeEntryResponse { 
    /**
     * Merchandise Income Entry ID.
     */
    merchandiseIncomeEntryId: string;
    /**
     * Organization ID.
     */
    orgId: string;
    /**
     * Site ID.
     */
    siteId: string;
    /**
     * Location ID.
     */
    locationId: string | null;
    /**
     * Amount.
     */
    amount: number;
    /**
     * Description.
     */
    description: string | null;
    merchandiseIncomeType: MerchandiseIncomeType;
    /**
     * The date the entry was made.
     */
    entryDate: string;
}
export namespace MerchandiseIncomeEntryResponse {
}


