var  members_images = [
"Screenshot 2020-12-13 at 12.08.52 AM.png",
"Screenshot 2020-12-13 at 12.10.17 AM.png",
"Screenshot 2020-12-13 at 12.22.51 AM.png",
"Screenshot 2020-12-13 at 12.26.22 AM.png",
"Screenshot 2020-12-13 at 12.29.06 AM.png",
"Screenshot 2020-12-13 at 12.49.19 AM.png",
"Screenshot 2020-12-13 at 12.51.15 AM.png",
"Screenshot 2020-12-13 at 12.54.15 AM.png",
];

var members_names = [
 "Father Name: Kushagra agarwal",
 "Mother Name: Neha agarwal",
 "Elder Brorher Name: Darsh agarwal",
 "Grandfather Nmae: Rakesh agarwal",
 "Grandmother Name: Archana agarwal",
 "Uncle Name:Kunal agarwal",
 "Aunt Name:Kanika agarwal",
 "Younger brother Name:karn agarwal",
]

var i = 0;
function nextimage()
{

document.getElementById("members_names").innerHTML = members_names[i];
document.getElementById("family_book_image").src = members_images[i];
i++;
console.log("Value -----"+i);
if(i>7)
{
    console.log("Value -----inside "+i);

    i=0;}
}
