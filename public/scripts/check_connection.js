//window.onload=()=>ajax();
console.log("checking")
    async function ajax(){
        let xhr=new XMLHttpRequest();
        try{
         xhr.open("GET","https://cuts-pay-no-deadlines.herokuapp.com/hello"
         );
        
            xhr.send();
         }
         catch{

         }
        
        xhr.onreadystatechange=function(){

            console.log(xhr.status)
            if(xhr.status==200)
            {
                console.log("online");
            }
            else
            {
                console.log("offline");
            }
        }
        
    }
    
    setInterval(ajax, 1000);