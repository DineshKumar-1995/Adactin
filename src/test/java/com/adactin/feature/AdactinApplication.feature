Feature: Login functionality for adactin application

Background:
When user enter application url
And user enter "DKGreens" as username
And user enter "greens" as password
Then user verify the username in the homepage

@Login
Scenario Outline: Successfull login into the adactin application with valid credential
When user enter application url
And user enter <username> username
And user enter <password> password
Then user verify the username in the homepage

Examples:
|username||password|
|DKGreens||greens|


@SearchHotel1
Scenario: Successfull searchhotel-1 into the adactin application with valid credential
When user select valid location
And user select valid hotal
And user select valid numbertype
And user select valid numberofrooms
And user enter valid checkin
And user enter valid checkout
And user select valid adults
And user select valid child
Then user verify the search in the searchhotelpage
When user select valid hotel
Then user verify the selection in the selecthotelpage
When user enter valid firstname
And user enter valid lastname
And user enter valid address
And user enter valid creditcardnum
And user select valid creditcardtype
And user select valid eMonth
And user select valid eYear
And user enter valid ccvnum
And user verify the booknow in the paymentpages
Then user verify logoutoption

@SearchHotel2
Scenario: Successfull searchhotel-2 into the adactin application with valid credential
When user select valid location
And user select valid hotal
And user select valid numbertype
And user select valid numberofrooms
And user enter valid checkin
And user enter valid checkout
And user select valid adults
And user select valid child
Then user verify the search in the searchhotelpage
When user select valid hotel
Then user verify the selection in the selecthotelpage
When user enter valid firstname
And user enter valid lastname
And user enter valid address
And user enter valid creditcardnum
And user select valid creditcardtype
And user select valid eMonth
And user select valid eYear
And user enter valid ccvnum
And user verify the booknow in the paymentpages
Then user verify logoutoption

@SearchHotel3
Scenario: Successfull searchhotel-3 into the adactin application with valid credential
When user select valid location
And user select valid hotal
And user select valid numbertype
And user select valid numberofrooms
And user enter valid checkin
And user enter valid checkout
And user select valid adults
And user select valid child
Then user verify the search in the searchhotelpage
When user select valid hotel
Then user verify the selection in the selecthotelpage
When user enter valid firstname
And user enter valid lastname
And user enter valid address
And user enter valid creditcardnum
And user select valid creditcardtype
And user select valid eMonth
And user select valid eYear
And user enter valid ccvnum
And user verify the booknow in the paymentpages
Then user verify logoutoption


