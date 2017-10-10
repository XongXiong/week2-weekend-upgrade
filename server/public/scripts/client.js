//Constructor for new employees
var Employee = function (firstName, lastName, eID, jobTitle, annSal) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.eID = eID;
    this.jobTitle = jobTitle;
    this.annSal = annSal;
};
//create a sample for users to see
var sampleEmployee = new Employee('John', 'Smith', 123456, 'Example', 0);

var employees = [sampleEmployee];
//mCost used to calculate monthly cost of all employees
var mCost = employees[0].annSal / 12;

var empArr = [];

$(document).ready(main);

function main() {
    // $().ready(sample);
    $('.submit').on('click', makeNewEmp);

    $('#monCost').replaceWith("<h2 id='monCost'>Average Monthly Cost = $" + mCost + "</h2>");

    $('.submit').on("click", function () {
        $(".titles").val("");
    });
    $(".tBody").on('click', '.removeBut', removeEmp);
}

//Function makes new employee based on input fields after the user hits
//submit on the DOM. This addfs the new employee to the table and adjusts
//average monthly cost for employees.
function makeNewEmp() {
    firstName = $('.firstName').val();
    lastName = $('.lastName').val();
    eID = parseInt($('.eID').val());
    jobTitle = $('.jobTitle').val();
    annSal = parseInt($('.annSal').val());
    for (var j = 0; j < employees.length; j++) {
        empArr = employees[j];
        employees[j] = new Employee(firstName, lastName, eID, jobTitle, annSal);
    }

    for (var i = 0; i < employees.length; i++) {
        empArr = employees[i];
        mCost = Math.floor(mCost + empArr.annSal / employees.length / 12);

        $('.tBody').append('<tr class="cellData"><td>' + empArr.firstName + '</td><td>' + empArr.lastName + '</td><td>' + empArr.eID +
            '</td><td>' + empArr.jobTitle + '</td><td>' + '$' + empArr.annSal + '</td><td><button class="removeBut">X</button></td></tr>');

        $('#monCost').replaceWith("<h2 id='monCost'>Average Monthly Cost = $" + mCost + "</h2>");
        return mCost;
    }
}

//This adds the sample employee to the table
// function sample(){
//   $('.tBody').append('<tr><td>' + employees[0].firstName + '</td><td>' + employees[0].lastName + '</td><td>' + employees[0].eID +
//   '</td><td>' + employees[0].jobTitle + '</td><td>' + '$' + employees[0].annSal + '</td><td><button class="removeBut">X</button></td></tr>');
// }

//Removes current employee information without removing employee annual salary
function removeEmp() {
    for (var k = 0; k < employees.length; k++) {
        empArr = employees[k];
        $(this).closest('.cellData').replaceWith('<tr class="cellData"><td></td><td></td><td></td><td></td><td>' + '$' + empArr.annSal + '</td><td><button class="removeBut">X</button></td></tr>');
    }
}
