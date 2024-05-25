(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))t(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const s of r.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&t(s)}).observe(document,{childList:!0,subtree:!0});function u(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerPolicy&&(r.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?r.credentials="include":e.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function t(e){if(e.ep)return;e.ep=!0;const r=u(e);fetch(e.href,r)}})();const c=document.querySelector(".user-input"),i=document.querySelector(".submit-btn");async function d(n){const o=`https://irctc1.p.rapidapi.com/api/v3/getPNRStatus?pnrNumber=${n}`;await fetch(o,{method:"GET",headers:{"X-RapidAPI-Key":"ea32ba564fmsh40670baf203c4bfp11a770jsn9a9bccd6b3d9","X-RapidAPI-Host":"irctc1.p.rapidapi.com"}}).then(t=>{if(!t.ok)throw new Error("Network response was not ok!");return t.json()}).then(t=>{document.querySelector(".t-no").textContent=t.TrainNo,document.querySelector(".t-name").textContent=t.TrainName,document.querySelector(".booking-date").textContent=t.BookingDate,document.querySelector(".from").textContent=t.From,document.querySelector(".to").textContent=t.To,document.querySelector(".reserved-upto").textContent=t.ReservationUpto,document.querySelector(".bording-point ").textContent=t.BoardingPoint,document.querySelector(".class").textContent=t.Class,document.querySelector(".total-fare").textContent=t.TicketFare,document.querySelector(".charting-status").textContent=t.ChartPrepared?"Chart Prepared":"Not Prepared",document.querySelector(".remarks").textContent=t.Remarks,document.querySelector(".train-status").textContent=t.TrainStatus,t.PassengerStatus.forEach(e=>{let r=document.createElement("tr");r.innerHTML=`<td class="sr-no border border-slate-400 rounded-sm p-2">Passenger ${e.Number}</td>
            <td class="booking-status border border-slate-400 rounded-sm">${e.BookingStatus} ${e.Coach} ${e.Berth}</td>
            <td class="current-status border border-slate-400 rounded-sm">${e.CurrentStatus}</td>
            <td class="coach-pos border border-slate-400 rounded-sm">${e.CoachPosition}</td>
           
        </tr>`,document.querySelector(".passenger-status").appendChild(r)})}).catch(t=>{console.log(t);let e=document.querySelector(".error");e.classList.remove("hidden"),e.innerHTML=`<i class="fa-solid fa-triangle-exclamation"></i> ${t}`,setTimeout(()=>{e.classList.add("hidden")},6e3)})}i.addEventListener("click",n=>{if(!c.value){document.querySelector(".pnrno").classList.add("hidden");return}d(c.value.trim()),document.querySelector(".pnrno").classList.remove("hidden"),document.querySelector(".pnrno span").textContent=c.value.trim()});document.querySelector(".btn-clear").addEventListener("click",n=>{c.value=""});
