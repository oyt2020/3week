function createEventEmitter() {
    const eventMap = {};
    return {
        on : function(event,callback){
            eventMap[event] = callback;
            
        },
        off : function(event,callback){
            eventMap[event] = null;
        },
        emit : function(event,...args){
            eventMap[event]?.(args);
        },
        once : function(event,callback){
            const wrapper = (...args)=> {
                callback(args);
                this.off(event,callback);
            }
            this.on(event,wrapper);
            // this.on(event,() => {
            //     callback();
            //     this.off(event,callback);
            // });
        }

    }

  //TODO: 구현하세요
  // - on(event, callback): 이벤트 구독
  // - off(event, callback): 구독 해제
  // - emit(event, ...args): 이벤트 발생
  // - once(event, callback): 한 번만 실행
}

// 테스트
const emitter = createEventEmitter();

const handler = (data) => console.log('Received:', data);
emitter.on('message', handler);
emitter.emit('message', 'Hello'); // "Received: Hello"
emitter.emit('message', 'World'); // "Received: World"

emitter.off('message', handler);
emitter.emit('message', 'Silent'); // (출력 없음)

emitter.once('login', (user) => console.log('Welcome:', user));
emitter.emit('login', 'Kim'); // "Welcome: Kim"
emitter.emit('login', 'Lee'); // (출력 없음)