//get all reqaired elements
const searchwrapper=document.querySelector(".search-input");
const inputBox=searchwrapper.querySelector("input");
const suggBox=searchwrapper.querySelector(".autocom-box");

//if user press any key and relese

inputBox.onkeyup=(e)=>{
    let userData=e.target.value;//user entered data
    let emptyArray=[];
    if(userData){
        emptyArray=Suggestions.filter((data)=>{
            //filink array value and user char to lowercase 
            //and return only those word/sentc witch are starts with user entered word
            return data.toLocaleLowerCase() .startsWith(userData.toLocaleLowerCase());

        })
        emptyArray=emptyArray.map((data)=>{
            return data= '<li>'+data+'</li>';

        })
        console.log(emptyArray);
        searchwrapper.classList.add("active");//show auto complete box
        showsuggestions(emptyArray);
        let allList=suggBox.querySelectorAll("li");
        for (let i=0; i<allList.length; i++){
            //adding on click attribute an all li tag
            allList[i].setAttribute("onclick" , "select(this)");
        }
    }
    else
    {
        searchwrapper.classList.remove("active"); //hide auto complete box

    }
    showsuggestions(emptyArray);
    
}
function select(element)
{
    let selectUserData= element.textcontent;
    inputBox.value=selectUserData; // pasing the user select list item data in text filed
    searchwrapper.classList.remove("active");//hide auto complete box
}
function showsuggestions(list){
    let listdata;
    if(!list.length){
        uservalue=inputBox.value;
        listdata='<li>'+uservalue+'</li>';
    }
    else{
        listdata=list.join('');
    }
    suggBox.innerHTML=listdata;
  
}

