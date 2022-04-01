var currentDate = moment().format("MMM Do YYYY")
$("#currentDay").text(currentDate);

$(".saveBtn").on('click',function(){
    var textArea = $(this).siblings(".textarea").val()
        localStorage.setItem('9am',textArea)
})

$("#9am").each(function(){
    var currentTime = moment().format('h:mm:ss')
    if('schedule'>currentTime){
        
    }
})