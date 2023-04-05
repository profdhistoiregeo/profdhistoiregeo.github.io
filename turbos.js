(function(Scratch) {
  "use strict";

  class TurbOS {
    constructor () {}

    getInfo () {
      return {
        id: "turbos",
        name: "TurbOS",
        blocks: [
          {
            opcode: "getlocalstorage",
            blockType: Scratch.BlockType.REPORTER,
            text: "Get [VARIABLE] in localStorage",
            arguments: {
              VARIABLE: {
                type: Scratch.ArgumentType.STRING,
                defaultValue: "test"
              }
            }
          },
          {
            opcode: "setlocalstorage",
            blockType: Scratch.BlockType.REPORTER,
            text: "Set [VARIABLE] to [VALUE] in localStorage",
            arguments: {
              VARIABLE: {
                type: Scratch.ArgumentType.STRING,
                defaultValue: "test"
              },
              VALUE: {
                type: Scratch.ArgumentType.STRING,
                defaultValue: "test"
              }
            }
          }
        ]
      };
    }
    
    getlocalstorage (args){
      return localStorage.getItem(args.VARIABLE);
    }

    setlocalstorage (args){
      return localStorage.setItem(args.VARIABLE, args.VALUE);
    }
  }

  Scratch.extensions.register(new TurbOS());
})(Scratch);