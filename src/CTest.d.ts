declare module "CTest" {

    /**
     * 仅可通过 import { Person } from "sample" 访问。
     */
    export interface CTest {
        constructor():void;
        dat: string;
        getDat(): string;
    }
}