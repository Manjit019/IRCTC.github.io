
const userInput=document.querySelector(".user-input");
const submitBtn=document.querySelector(".submit-btn");

async function checkPNRstatus(pnrNo) {
    const url = 'https://irctc1.p.rapidapi.com/api/v3/getPNRStatus?pnrNumber=' + `${pnrNo}`;
    const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': 'ea32ba564fmsh40670baf203c4bfp11a770jsn9a9bccd6b3d9',
            'X-RapidAPI-Host': 'irctc1.p.rapidapi.com'
        }
    };

    await fetch(url, options)
    .then(res => {
        if (!res.ok) {
            throw new Error("Network response was not ok!");
        }
        return res.json();

    })
    .then(data => {
        // console.log(data);
        document.querySelector(".t-no").textContent= data.TrainNo;
        document.querySelector(".t-name").textContent= data.TrainName;
        document.querySelector(".booking-date").textContent= data.BookingDate;
        document.querySelector(".from").textContent= data.From;
        document.querySelector(".to").textContent= data.To;
        document.querySelector(".reserved-upto").textContent= data.ReservationUpto;
        document.querySelector(".bording-point ").textContent= data.BoardingPoint;
        document.querySelector(".class").textContent= data.Class;
        
        document.querySelector(".total-fare").textContent= data.TicketFare;
        document.querySelector(".charting-status").textContent= (data.ChartPrepared) ? "Chart Prepared" : "Not Prepared";
        document.querySelector(".remarks").textContent= data.Remarks;
        document.querySelector(".train-status").textContent= data.TrainStatus;
       
        data.PassengerStatus.forEach(Passenger => {
            let tr=document.createElement("tr");
            tr.innerHTML=`<td class="sr-no border border-slate-400 rounded-sm p-2">Passenger ${Passenger.Number}</td>
            <td class="booking-status border border-slate-400 rounded-sm">${Passenger.BookingStatus} ${Passenger.Coach} ${Passenger.Berth}</td>
            <td class="current-status border border-slate-400 rounded-sm">${Passenger.CurrentStatus}</td>
            <td class="coach-pos border border-slate-400 rounded-sm">${Passenger.CoachPosition}</td>
           
        </tr>`
            document.querySelector(".passenger-status").appendChild(tr);
        });
    })
    .catch((error) => {
        console.log(error);
        let errorElem=document.querySelector(".error");
        errorElem.classList.remove("hidden");
        errorElem.innerHTML=`<i class="fa-solid fa-triangle-exclamation hidden"></i> ${error}`;
        setTimeout(() => {
            errorElem.classList.add("hidden");
        }, 6000);
    })
}

submitBtn.addEventListener('click',(e)=>{
    if(!userInput.value){
        document.querySelector(".pnrno").classList.add("hidden");
        return;
    }
    checkPNRstatus(userInput.value.trim());
    document.querySelector(".pnrno").classList.remove("hidden");
    document.querySelector(".pnrno span").textContent=userInput.value.trim();
    // userInput.value="";
})


document.querySelector(".btn-clear").addEventListener("click",(e)=>{
    userInput.value="";
});