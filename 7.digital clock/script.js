function calculatetime(){
    var date=new Date();
    var dayNumber=date.getDay();
    var hour=date.getHours();
    var minute=date.getMinutes();
    var ampm=hour>=12?'PM':'AM';
    var dayNames=["SUN","MOM","TUE","WED","THU","FRI","STU"];
    hour=hour%12;
    hour=hour?12:'12';
}