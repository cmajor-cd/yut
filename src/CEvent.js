/**
 * CEvent class , for customize event.
 * Anthor: YangYutong <70248717@qq.com>
 * Create: 20181102
 * Description: 
 * Usage:
    function myEvHanderFunc(){
        console.log('my event is handled.');
    }
    function myEvHander2(data){
        let food = data.food;
        console.log('my event is handled:' + food);
    }
    //
    var evFactory = new CEvent();
    evFactory.addEvent('eat', myEvHanderFunc);
    evFactory.addEvent('eat', myEvHander2);
    evFactory.triggerEvent({
            type: "eat"
        });
    evFactory.triggerEvent({
            type: "eat",
            food: "rice"
        });

* */
//Class CEvent
class CEvent {
    constructor() {
        //event handler function mapping
        // {type1: [func11, func12, ..],
        //   type2: [func21, func22,..],
        //  ...}
        this.handlers = {};
    }
    /* regist new event and handler fucntion
    *  @param: 
    *      type -> event
    *      handler -> call back
    */
    addEvent(type, handler){
        //1. check if this event has exist or not
        if(typeof this.handlers[type] == 'undefined'){
            this.handlers[type] = [];
        }
        //2.push new event and reg handler
        this.handlers[type].push(handler);
    }
    /* trigger the event with type and other parameters are allowed to be attached
    *  @param: 
    *      event -> {type: myevent, others: xxx, ...}
    */
    triggerEvent(event){
        if(!event.target){
            event.target = this;
        }
        //1. check if this event has exist and it's a array
        if(this.handlers[event.type] instanceof Array){
            //2. locate the right event in mapping
            let handlers = this.handlers[event.type];
            //3. execute the all callback handlers
            for(let i = 0; i < handlers.length; i++){
                handlers[i](event);
            }
        }
    }
    /* remove the event handler mapping
    *  @param: 
    *      type -> event
    *      handler -> call back
    */
   removeEvHandler(type, aHandler){
        //1. check if this event has exist and it's a array
        if(this.handlers[type] instanceof Array){
            //2. locate the right event in mapping
            var handlers = this.handlers[type];
            //3. delete all handlers in mapping
            var i = 0;
            for(i = 0; i < handlers.length; i++){
                if(handlers[i] == aHandler){
                    break;
                }
            }
            //delete from mapping
            handlers.splice(i, 1);
        }
    }
}

export default CEvent
// export {CEvent};