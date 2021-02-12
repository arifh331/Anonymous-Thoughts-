

/*
function main() {
    pos()
    display()
    getrev()



}
document.addEventListener("DOMContentLoaded", main);

function getrev(){
    

    let flbtn= document.querySelector('#filterBtn')
    

    flbtn.addEventListener("click",function(evt){
        
        evt.preventDefault();
        display()
        
        
        
    })
    


}

function display (){
    let xhr= new XMLHttpRequest();
        let fltye=document.querySelector('#filterYear')
        let flsem=document.querySelector('#filterSemester')
        let url = `api/messages?year=${fltye.value}&semester=${flsem.value}`
        

        xhr.addEventListener('load',function(){
            let prs= JSON.parse(xhr.responseText);
            let tbod= document.querySelector("tbody")
            let er = tbod.lastElementChild;

            while(er) {
                tbod.removeChild(er);
                er=tbod.lastElementChild
            }

            let arel= ['name','semester','year','review']

            for       (let el of prs) {
                let tro= document.createElement('tr')
                for(let i=0;i<=3;i++){
                    let trd= document.createElement('td')
                    trd.textContent=el[`${arel[i]}`]
                    tro.appendChild(trd)
                }
                tbod.appendChild(tro)
            }
            
        })
        xhr.open('GET',url);

        xhr.send()
}

function pos(){
    let adbtn = document.querySelector('#addBtn');

    adbtn.addEventListener("click",function(evt){
        evt.preventDefault()
        let xhr= new XMLHttpRequest();

        let np = document.querySelector('#name')
        let sp = document.querySelector('#semester')
        let yp = document.querySelector('#year')
        let rp = document.querySelector('#review')

        let url=`api/message`
        xhr.open('POST',url);

        xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded; charset=UTF-8')
        
        xhr.addEventListener("load",function(){
            //handle the error 
            console.log("display")
            display()
        })
        xhr.send(`name=${np.value}&semester=${sp.value}&year=${yp.value}&review=${rp.value}`)


    })
}
*/





//THis is the main code of the page 
//Above is trial code I kept for documentation help

function main() {
    display()
    let adbtn = document.querySelector('#addBtn');
    adbtn.addEventListener("click",pos);
    let flbtn= document.querySelector('#filterBtn')
    flbtn.addEventListener("click",getrev)
    

}
document.addEventListener("DOMContentLoaded", main);

function getrev(evt){
   evt.preventDefault();
    display()
        

}

function display (){
    let xhr= new XMLHttpRequest();
        let fltye=document.querySelector('#filterYear')
        let flsem=document.querySelector('#filterSemester')
        let url = `api/messages?year=${fltye.value}&semester=${flsem.value}`
        

        xhr.addEventListener('load',function(){
            let prs= JSON.parse(xhr.responseText);
            let tbod= document.querySelector("tbody")
            let er = tbod.lastElementChild;

            while(er) {
                tbod.removeChild(er);
                er=tbod.lastElementChild
            }

            let arel= ['name','cln','semester','year','review']

            for       (let el of prs) {
                let tro= document.createElement('tr')
                for(let i=0;i<=4;i++){
                    let trd= document.createElement('td')
                    trd.textContent=el[`${arel[i]}`]
                    tro.appendChild(trd)
                }
                tbod.appendChild(tro)
            }
            
        })
        xhr.open('GET',url);

        xhr.send()
}

function pos(evt){
    
        evt.preventDefault()
        let xhr= new XMLHttpRequest();

        let np = document.querySelector('#name')
        let sp = document.querySelector('#semester')
        let cn = document.querySelector('#cln')
        let yp = document.querySelector('#year')
        let rp = document.querySelector('#review')

        let url=`api/message`
        xhr.open('POST',url);

        //this allows you to send the form data in name value pairs
        xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded; charset=UTF-8')
        
        xhr.addEventListener("load",function(){
            //handle the error 
            console.log("display")
            display()
        })
        xhr.send(`name=${np.value}&cln=${cn.value}&semester=${sp.value}&year=${yp.value}&review=${rp.value}`)


    
}


