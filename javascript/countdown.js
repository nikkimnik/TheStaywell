<<<<<<< HEAD
<script>
//Current Date
let today = new Date();

//Year of Current Date
let july4Year = today.getFullYear();

//Check that current date isn't later than July4
if (today.getMonth()) == 6 &&
    today.getDate() > 4) {

//Add a year so that the next Christmas date could be used
july4Year = christmasYear + 1;
}

//Get the date of the next July4
let july4Date = 
    new Date (july4Year, 6, 4);

//Get the number of milliseconds in 1 day
let dayMilliseconds =
    1000 * 60 * 60 * 24;

//Get the remaining amount of days
let remainingDays = Math.ceil(
    (july4Date.getTime() - today.getTime()) /
    (dayMilliseconds)
);

//Write it to the page
document.write("Book now to reserve your sweet spot for watching the City of Dry Ridge's Party in the Park fireworks!  There are only " + remainingDays + " until July 4th!");

=======
<script>
//Current Date
let today = new Date();

//Year of Current Date
let july4Year = today.getFullYear();

//Check that current date isn't later than July4
if (today.getMonth()) == 6 &&
    today.getDate() > 4) {

//Add a year so that the next Christmas date could be used
july4Year = christmasYear + 1;
}

//Get the date of the next July4
let july4Date = 
    new Date (july4Year, 6, 4);

//Get the number of milliseconds in 1 day
let dayMilliseconds =
    1000 * 60 * 60 * 24;

//Get the remaining amount of days
let remainingDays = Math.ceil(
    (july4Date.getTime() - today.getTime()) /
    (dayMilliseconds)
);

//Write it to the page
document.write("Book now to reserve your sweet spot for watching the City of Dry Ridge's Party in the Park fireworks!  There are only " + remainingDays + " until July 4th!");

>>>>>>> 530fdbe798924bc35ae27f2901bdb86f3c5d0465
</script>