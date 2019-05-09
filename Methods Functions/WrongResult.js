    function solve(num1, num2, num3) {

        let result = convertNumToBit(num1) ^ convertNumToBit(num2) ^ convertNumToBit(num3);

        if (num1 === 0 || num2 === 0 || num3 === 0) {
            console.log('Positive')
            return;
        }

        else if (result === 1) {
            console.log('Negative')
        } else {
            console.log('Positive')
        }
        // 0 is + ; 1 is - ;
        function convertNumToBit(num) {
            return num < 0 ? 1 : 0;

        }

    }

solve(-6, -12, -14)