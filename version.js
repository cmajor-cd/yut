
class yutVersion {
    constructor() {
        this.name = 'YUT framework';
        this.releaseVer = '1.0.x'; 
     }
}

export default yutVersion;
// ---- version ----
//[20181106] 0.9.x: first version, ready for YUT demo.
//[20190529] 1.0.0: first release version, ready for using.
// TODO list:
// 1. [done]remove jQuery and replace loadfile() by import().
// 2. [done]create new npm project of 'yur-cli' to create app framework by cli.
// 3. [done]limit evMounted to 1 time by each view node.
// 4. [done]add evDeactived event when the view is hiddened / closed
