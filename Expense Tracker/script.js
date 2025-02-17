document.addEventListener('DOMContentLoaded',()=>{
    let expenseName=document.getElementById('expenseName');
    let expenseAmount=document.getElementById('expenseAmount');
    let inputForm=document.getElementById('inputForm');
    let expenseList=document.getElementById('expenseList');
    let totalAmt=document.getElementById('totalAmt');

    
    let expenses=JSON.parse(localStorage.getItem('expenses')) || [];
    loadList();
    inputForm.addEventListener(
        'submit', (event)=>{
            event.preventDefault();
            console.log("Submitted");
            console.log("Expenses:",expenses);
            
            let expName=expenseName.value;
            let expAmt=parseFloat(expenseAmount.value);
            expenseName.value='';
            expenseAmount.value=null;
            let id=Date.now();
            let newItem={name: expName,amt:expAmt,id:id};
            expenses.push(newItem);
            saveLocal();
            loadList();
        }
    );

    expenseList.addEventListener(
        'click',(event)=>{
            if(event.target && event.target.tagName=='BUTTON'){
                let idSel=event.target.id;
                expenses=expenses.filter((item)=> item.id!=idSel);
                saveLocal();
                loadList();
            }
        }
    )

    function saveLocal(){
        localStorage.setItem('expenses',JSON.stringify(expenses));
    }
    
    function loadList(){
        let total=0;
        while(expenseList.firstChild)expenseList.firstChild.remove();
        for (const item of expenses){
            total+=item.amt;
            expenseList.innerHTML+=`
            <li id='${item.id}'>
            <p>${item.name} - ${item.amt}</p>
            <button id='${item.id}' class='deleteBtn'>Delete</button>
            </li>`
        }
        totalAmt.textContent=`Total: $${total}`;
    }
});