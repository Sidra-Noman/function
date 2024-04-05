// Function
// Example 1
function logPersonName(studentName,teacherName,fatherName,motherName,siblingName){

    console.log(studentName,teacherName,fatherName,motherName,siblingName )
    }
    logPersonName("Sara","Ali","Ahmed","Rida","Nida")
     
    // // Example 2
    // // function fishFry(){
    //     //     console.log(1+3+1.5)
    //     // }
    //     // fishFry()
    //     // fishFry()
        
    //     // function fishFry(salt){
    //     //         console.log(1+3+salt)
    //     //     }
    //     //     fishFry(2)
    //     //     fishFry(2.5)
        
    //         // function fishFry(salt,butter){
    //         //     console.log(salt+butter+1)
    //         // }
    //         // fishFry(2,4)
    //         // fishFry(2.5,4.5)
        
    //         function fishFry(salt,butter){
    //             console.log(salt+butter+1)
    //         }
    //          let order=fishFry(2,4)
    //          console.log(order)
    //  Example 3
    function fishFry(salt=1,butter=3){
        let cookedFish=salt+butter+1
        return cookedFish
    }
          console.log(fishFry(6,5))
           
         