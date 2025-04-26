let now = new Date();

let hour = now.getHours(); // 24-hour 


if (hour < 12) 
    {
    document.body.innerHTML = "Good Morning";
} 


else 
{
    document.body.innerHTML = "Good Afternoon";
}