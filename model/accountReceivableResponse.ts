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
import { AccountReceivableIncome } from './accountReceivableIncome';


export interface AccountReceivableResponse { 
    /**
     * Ledger ID.
     */
    ledgerId: string | null;
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
     * Opening balance.
     */
    openingBalance: number;
    /**
     * Closing balance.
     */
    closingBalance: number;
    /**
     * Check asset amount.
     */
    payments: number;
    /**
     * Income details.
     */
    income: Array<AccountReceivableIncome>;
    /**
     * Additions.
     */
    additions: number;
    /**
     * Subtractions.
     */
    subtractions: number;
}

