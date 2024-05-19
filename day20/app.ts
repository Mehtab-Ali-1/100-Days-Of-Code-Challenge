// DAY 20
// Q58
function averageScore(...score : number[]):number{
    let total = score.reduce((sum ,score) => sum + score ,0);
         return total/score.length; 
    }
    console.log(averageScore(28,36,53,63));
    // Q59
    function makeAdder(adder : number) : (arg0: number) => number {
        return function(number : number) : number {
            return number + adder;
        };
    }
    let addValue = makeAdder(5);
    console.log(addValue (10));
    // Q60
    let userProfile = (function():{displayInfo: () =>void} {
        name : "john";
        age : 30;
    
        return {
         displayInfo: function() {
            console.log(`name: ${name} age: ${age}`);
        }
    };
    })();
    userProfile.displayInfo();