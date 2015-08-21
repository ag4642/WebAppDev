 window.onclick = doSomething;
 var previous = null;
 var next = null;

 function doSomething() {
   if (next != null) {
     next.style.backgroundColor = "white";
   }
   next = window.event.target;
   if (next.children.length != 0) {
     console.log(next.children[0]);
     next = next.children[0];
     next.style.backgroundColor = "#0099FF";
   } else {
     if (next.nextElementSibling != null) {
       console.log(next.nextElementSibling);
       next = next.nextElementSibling;
       next.style.backgroundColor = "#0099FF";
     } else {
       if (next.parentElement.nextElementSibling != null) {
         console.log(next.parentElement.nextElementSibling);
         next = next.parentElement.nextElementSibling;
         next.style.backgroundColor = "#1947D1";
       } else {
         if (next.parentElement.parentElement.nextElementSibling != null) {
           console.log(next.parentElement.parentElement.nextElementSibling);
           next = next.parentElement.parentElement.nextElementSibling;
           next.style.backgroundColor = "#1947D1";
         } else {
           next = next.parentElement.parentElement;
           next.style.backgroundColor = "#1947D1";
         }
       }
     }
   }
 }