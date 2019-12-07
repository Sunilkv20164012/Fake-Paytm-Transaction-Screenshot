
var today = new Date();  
var dateorderid = ''+today.getFullYear()+''+(today.getMonth()+1)+''+today.getDate();

const monthNames = ["Jan", "Feb", "Mar", "Apr", "May", "Jun","Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];

var time =   today.toLocaleString('en-US', { hour: 'numeric', minute: 'numeric', hour12: true });
var whole = time+', '+today.getDate()+' '+monthNames[today.getMonth()]+' '+today.getFullYear(); 
var rev =   today.getDate()+' '+monthNames[today.getMonth()]+', '+today.getFullYear() + ' '+time; 


function downloadImage1(canvasid,imageid){
        
        var canvas = document.getElementById(canvasid);

        var ctx = canvas.getContext('2d');
        canvas.width = $(imageid).width();
        canvas.crossOrigin = "Anonymous";
        canvas.height = $(imageid).height();

        console.log("height : "+canvas.height + " width : "+canvas.width);

        ctx.drawImage($(imageid).get(0), 0, 0);

        //redraw image
        ctx.clearRect(0,0,canvas.width,canvas.height);
        ctx.drawImage($(imageid).get(0), 0, 0);
        //refill text
        ctx.fillStyle = "black";
        ctx.font = "bold 45px Arial";
        ctx.fillText($('#amount').val(),215,480);

        ctx.font = "27px Arial";
        ctx.fillText(dateorderid,179,649);
        ctx.font = "28px Arial";
        ctx.fillText(whole,129,690);

        ctx.font = "bold 45px Arial";
        ctx.textAlign="center";
        ctx.fillText($('#name').val(),268,360);
        
        
        setTimeout(function() {
            canvas.toBlob(function(blob) {
                alert("from 1");
                saveAs(blob, "canvas_images"+canvasid+".png");
            });
        }, 3000);
        alert("end m 1")
};

function downloadImage2(canvasid,imageid){

        var canvas = document.getElementById(canvasid);

        var ctx = canvas.getContext('2d');
        canvas.width = $(imageid).width();
        canvas.crossOrigin = "Anonymous";
        canvas.height = $(imageid).height();

        ctx.drawImage($(imageid).get(0), 0, 0);

        //redraw image
        ctx.clearRect(0,0,canvas.width,canvas.height);
        ctx.drawImage($(imageid).get(0), 0, 0);
        //refill text

        ctx.fillStyle = "black";
        ctx.font = "bold 45px Arial";
        ctx.fillText($('#amount').val(),82,235);

        ctx.fillStyle = "#404040";
        ctx.font = "19px Arial";
        ctx.fillText(rev,32,308);

        ctx.font = "20px Arial";
        ctx.fillText("4650",474,308);

        ctx.fillStyle = "black";
        ctx.font = "bold 30px Arial";
        ctx.fillText($('#name').val(),33,480);
        
        
        ctx.font = "19px Arial";
        ctx.fillText(dateorderid,119,513);

        ctx.fillStyle = "181818";
        ctx.font = "30px Arial";
        ctx.fillText($('#name').val(),100,886);
        alert("from 2");
        canvas.toBlob(function(blob) {
            console.log("func1 ");
            saveAs(blob, "canvas_images"+canvasid+".png");
        });    
        setTimeout(function() {
        }, 3000);
        alert("end 2");
};
 

function screenshotfun(){

    downloadImage1('screenshot','#ss');

}
function passbookfun(){

    downloadImage2('passbook','#pb');

}
