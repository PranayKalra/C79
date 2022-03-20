var name_of_the_friend_array= [];
function Submit()
{
 
    var name_1= document.getElementById("Name_of_the_friend_1").value;
    var name_2= document.getElementById("Name_of_the_friend_2").value;
    var name_3= document.getElementById("Name_of_the_friend_3").value;
    var name_4= document.getElementById("Name_of_the_friend_4").value;
    
name_of_the_friend_array.push(name_1);
name_of_the_friend_array.push(name_2)
name_of_the_friend_array.push(name_3);
name_of_the_friend_array.push(name_4);  
    
console.log(name_of_the_friend_array);

document.getElementById("display_name").innerHTML = name_of_the_friend_array
document.getElementById("submit_button").style.display= "none";
document.getElementById("sort_button").style.display = "inline-block";
}

function sorting()
{
 name_of_the_friend_array.sort();
console.log(name_of_the_friend_array)
document.getElementById("display_name").innerHTML = name_of_the_friend_array;
    
}