$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("AdactinApplication.feature");
formatter.feature({
  "line": 1,
  "name": "Login functionality for adactin application",
  "description": "",
  "id": "login-functionality-for-adactin-application",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "line": 10,
  "name": "Successfull login into the adactin application with valid credential",
  "description": "",
  "id": "login-functionality-for-adactin-application;successfull-login-into-the-adactin-application-with-valid-credential",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 9,
      "name": "@Login"
    }
  ]
});
formatter.step({
  "line": 11,
  "name": "user enter application url",
  "keyword": "When "
});
formatter.step({
  "line": 12,
  "name": "user enter \u003cusername\u003e username",
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "user enter \u003cpassword\u003e password",
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "user verify the username in the homepage",
  "keyword": "Then "
});
formatter.examples({
  "line": 16,
  "name": "",
  "description": "",
  "id": "login-functionality-for-adactin-application;successfull-login-into-the-adactin-application-with-valid-credential;",
  "rows": [
    {
      "cells": [
        "username",
        "",
        "password"
      ],
      "line": 17,
      "id": "login-functionality-for-adactin-application;successfull-login-into-the-adactin-application-with-valid-credential;;1"
    },
    {
      "cells": [
        "DKGreens",
        "",
        "greens"
      ],
      "line": 18,
      "id": "login-functionality-for-adactin-application;successfull-login-into-the-adactin-application-with-valid-credential;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 179800,
  "status": "passed"
});
formatter.background({
  "line": 3,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 4,
  "name": "user enter application url",
  "keyword": "When "
});
formatter.step({
  "line": 5,
  "name": "user enter \"DKGreens\" as username",
  "keyword": "And "
});
formatter.step({
  "line": 6,
  "name": "user enter \"greens\" as password",
  "keyword": "And "
});
formatter.step({
  "line": 7,
  "name": "user verify the username in the homepage",
  "keyword": "Then "
});
formatter.match({
  "location": "Login.user_enter_application_url()"
});
formatter.result({
  "duration": 15260520500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "DKGreens",
      "offset": 12
    }
  ],
  "location": "Login.user_enter_as_username(String)"
});
formatter.result({
  "duration": 146557700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "greens",
      "offset": 12
    }
  ],
  "location": "Login.user_enter_as_password(String)"
});
formatter.result({
  "duration": 65292000,
  "status": "passed"
});
formatter.match({
  "location": "Login.user_verify_the_username_in_the_homepage()"
});
formatter.result({
  "duration": 1679525700,
  "status": "passed"
});
formatter.scenario({
  "line": 18,
  "name": "Successfull login into the adactin application with valid credential",
  "description": "",
  "id": "login-functionality-for-adactin-application;successfull-login-into-the-adactin-application-with-valid-credential;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 9,
      "name": "@Login"
    }
  ]
});
formatter.step({
  "line": 11,
  "name": "user enter application url",
  "keyword": "When "
});
formatter.step({
  "line": 12,
  "name": "user enter DKGreens username",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "user enter greens password",
  "matchedColumns": [
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "user verify the username in the homepage",
  "keyword": "Then "
});
formatter.match({
  "location": "Login.user_enter_application_url()"
});
formatter.result({
  "duration": 499690700,
  "status": "passed"
});
formatter.match({
  "location": "Login.user_enter_DKGreens_username()"
});
formatter.result({
  "duration": 78627500,
  "status": "passed"
});
formatter.match({
  "location": "Login.user_enter_greens_password()"
});
formatter.result({
  "duration": 50662000,
  "status": "passed"
});
formatter.match({
  "location": "Login.user_verify_the_username_in_the_homepage()"
});
formatter.result({
  "duration": 62626800,
  "status": "passed"
});
formatter.after({
  "duration": 76800,
  "status": "passed"
});
formatter.before({
  "duration": 29500,
  "status": "passed"
});
formatter.background({
  "line": 3,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 4,
  "name": "user enter application url",
  "keyword": "When "
});
formatter.step({
  "line": 5,
  "name": "user enter \"DKGreens\" as username",
  "keyword": "And "
});
formatter.step({
  "line": 6,
  "name": "user enter \"greens\" as password",
  "keyword": "And "
});
formatter.step({
  "line": 7,
  "name": "user verify the username in the homepage",
  "keyword": "Then "
});
formatter.match({
  "location": "Login.user_enter_application_url()"
});
formatter.result({
  "duration": 480658400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "DKGreens",
      "offset": 12
    }
  ],
  "location": "Login.user_enter_as_username(String)"
});
formatter.result({
  "duration": 72991700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "greens",
      "offset": 12
    }
  ],
  "location": "Login.user_enter_as_password(String)"
});
formatter.result({
  "duration": 57458800,
  "status": "passed"
});
formatter.match({
  "location": "Login.user_verify_the_username_in_the_homepage()"
});
formatter.result({
  "duration": 2359429300,
  "status": "passed"
});
formatter.scenario({
  "line": 22,
  "name": "Successfull searchhotel-1 into the adactin application with valid credential",
  "description": "",
  "id": "login-functionality-for-adactin-application;successfull-searchhotel-1-into-the-adactin-application-with-valid-credential",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 21,
      "name": "@SearchHotel1"
    }
  ]
});
formatter.step({
  "line": 23,
  "name": "user select valid location",
  "keyword": "When "
});
formatter.step({
  "line": 24,
  "name": "user select valid hotal",
  "keyword": "And "
});
formatter.step({
  "line": 25,
  "name": "user select valid numbertype",
  "keyword": "And "
});
formatter.step({
  "line": 26,
  "name": "user select valid numberofrooms",
  "keyword": "And "
});
formatter.step({
  "line": 27,
  "name": "user enter valid checkin",
  "keyword": "And "
});
formatter.step({
  "line": 28,
  "name": "user enter valid checkout",
  "keyword": "And "
});
formatter.step({
  "line": 29,
  "name": "user select valid adults",
  "keyword": "And "
});
formatter.step({
  "line": 30,
  "name": "user select valid child",
  "keyword": "And "
});
formatter.step({
  "line": 31,
  "name": "user verify the search in the searchhotelpage",
  "keyword": "Then "
});
formatter.step({
  "line": 32,
  "name": "user select valid hotel",
  "keyword": "When "
});
formatter.step({
  "line": 33,
  "name": "user verify the selection in the selecthotelpage",
  "keyword": "Then "
});
formatter.step({
  "line": 34,
  "name": "user enter valid firstname",
  "keyword": "When "
});
formatter.step({
  "line": 35,
  "name": "user enter valid lastname",
  "keyword": "And "
});
formatter.step({
  "line": 36,
  "name": "user enter valid address",
  "keyword": "And "
});
formatter.step({
  "line": 37,
  "name": "user enter valid creditcardnum",
  "keyword": "And "
});
formatter.step({
  "line": 38,
  "name": "user select valid creditcardtype",
  "keyword": "And "
});
formatter.step({
  "line": 39,
  "name": "user select valid eMonth",
  "keyword": "And "
});
formatter.step({
  "line": 40,
  "name": "user select valid eYear",
  "keyword": "And "
});
formatter.step({
  "line": 41,
  "name": "user enter valid ccvnum",
  "keyword": "And "
});
formatter.step({
  "line": 42,
  "name": "user verify the booknow in the paymentpages",
  "keyword": "And "
});
formatter.step({
  "line": 43,
  "name": "user verify logoutoption",
  "keyword": "Then "
});
formatter.match({
  "location": "SearchHotel.user_select_valid_location()"
});
formatter.result({
  "duration": 154365500,
  "status": "passed"
});
formatter.match({
  "location": "SearchHotel.user_select_valid_hotal()"
});
formatter.result({
  "duration": 92426700,
  "status": "passed"
});
formatter.match({
  "location": "SearchHotel.user_select_valid_numbertype()"
});
formatter.result({
  "duration": 89581400,
  "status": "passed"
});
formatter.match({
  "location": "SearchHotel.user_select_valid_numberofrooms()"
});
formatter.result({
  "duration": 83888400,
  "status": "passed"
});
formatter.match({
  "location": "SearchHotel.user_enter_valid_checkin()"
});
formatter.result({
  "duration": 117160500,
  "status": "passed"
});
formatter.match({
  "location": "SearchHotel.user_enter_valid_checkout()"
});
formatter.result({
  "duration": 116838500,
  "status": "passed"
});
formatter.match({
  "location": "SearchHotel.user_select_valid_adults()"
});
formatter.result({
  "duration": 108140700,
  "status": "passed"
});
formatter.match({
  "location": "SearchHotel.user_select_valid_child()"
});
formatter.result({
  "duration": 99781900,
  "status": "passed"
});
formatter.match({
  "location": "SearchHotel.user_verify_the_search_in_the_searchhotelpage()"
});
formatter.result({
  "duration": 5771590600,
  "status": "passed"
});
formatter.match({
  "location": "SelectHotel.user_select_valid_hotel()"
});
formatter.result({
  "duration": 63685800,
  "status": "passed"
});
formatter.match({
  "location": "SelectHotel.user_verify_the_selection_in_the_selecthotelpage()"
});
formatter.result({
  "duration": 2620234100,
  "status": "passed"
});
formatter.match({
  "location": "SelectPayment.user_enter_valid_firstname()"
});
formatter.result({
  "duration": 76025800,
  "status": "passed"
});
formatter.match({
  "location": "SelectPayment.user_enter_valid_lastname()"
});
formatter.result({
  "duration": 57878100,
  "status": "passed"
});
formatter.match({
  "location": "SelectPayment.user_enter_valid_address()"
});
formatter.result({
  "duration": 54143000,
  "status": "passed"
});
formatter.match({
  "location": "SelectPayment.user_enter_valid_creditcardnum()"
});
formatter.result({
  "duration": 95656900,
  "status": "passed"
});
formatter.match({
  "location": "SelectPayment.user_select_valid_creditcardtype()"
});
formatter.result({
  "duration": 106014300,
  "status": "passed"
});
formatter.match({
  "location": "SelectPayment.user_select_valid_eMonth()"
});
formatter.result({
  "duration": 96462100,
  "status": "passed"
});
formatter.match({
  "location": "SelectPayment.user_select_valid_eYear()"
});
formatter.result({
  "duration": 97636500,
  "status": "passed"
});
formatter.match({
  "location": "SelectPayment.user_enter_valid_ccvnum()"
});
formatter.result({
  "duration": 50634300,
  "status": "passed"
});
formatter.match({
  "location": "SelectPayment.user_verify_the_booknow_in_the_paymentpages()"
});
formatter.result({
  "duration": 8053275000,
  "status": "passed"
});
formatter.match({
  "location": "SelectPayment.user_verify_logoutoption()"
});
formatter.result({
  "duration": 733062800,
  "status": "passed"
});
formatter.after({
  "duration": 59500,
  "status": "passed"
});
formatter.before({
  "duration": 57200,
  "status": "passed"
});
formatter.background({
  "line": 3,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 4,
  "name": "user enter application url",
  "keyword": "When "
});
formatter.step({
  "line": 5,
  "name": "user enter \"DKGreens\" as username",
  "keyword": "And "
});
formatter.step({
  "line": 6,
  "name": "user enter \"greens\" as password",
  "keyword": "And "
});
formatter.step({
  "line": 7,
  "name": "user verify the username in the homepage",
  "keyword": "Then "
});
formatter.match({
  "location": "Login.user_enter_application_url()"
});
formatter.result({
  "duration": 861791900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "DKGreens",
      "offset": 12
    }
  ],
  "location": "Login.user_enter_as_username(String)"
});
formatter.result({
  "duration": 78766000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "greens",
      "offset": 12
    }
  ],
  "location": "Login.user_enter_as_password(String)"
});
formatter.result({
  "duration": 60926500,
  "status": "passed"
});
formatter.match({
  "location": "Login.user_verify_the_username_in_the_homepage()"
});
formatter.result({
  "duration": 1172848600,
  "status": "passed"
});
formatter.scenario({
  "line": 46,
  "name": "Successfull searchhotel-2 into the adactin application with valid credential",
  "description": "",
  "id": "login-functionality-for-adactin-application;successfull-searchhotel-2-into-the-adactin-application-with-valid-credential",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 45,
      "name": "@SearchHotel2"
    }
  ]
});
formatter.step({
  "line": 47,
  "name": "user select valid location",
  "keyword": "When "
});
formatter.step({
  "line": 48,
  "name": "user select valid hotal",
  "keyword": "And "
});
formatter.step({
  "line": 49,
  "name": "user select valid numbertype",
  "keyword": "And "
});
formatter.step({
  "line": 50,
  "name": "user select valid numberofrooms",
  "keyword": "And "
});
formatter.step({
  "line": 51,
  "name": "user enter valid checkin",
  "keyword": "And "
});
formatter.step({
  "line": 52,
  "name": "user enter valid checkout",
  "keyword": "And "
});
formatter.step({
  "line": 53,
  "name": "user select valid adults",
  "keyword": "And "
});
formatter.step({
  "line": 54,
  "name": "user select valid child",
  "keyword": "And "
});
formatter.step({
  "line": 55,
  "name": "user verify the search in the searchhotelpage",
  "keyword": "Then "
});
formatter.step({
  "line": 56,
  "name": "user select valid hotel",
  "keyword": "When "
});
formatter.step({
  "line": 57,
  "name": "user verify the selection in the selecthotelpage",
  "keyword": "Then "
});
formatter.step({
  "line": 58,
  "name": "user enter valid firstname",
  "keyword": "When "
});
formatter.step({
  "line": 59,
  "name": "user enter valid lastname",
  "keyword": "And "
});
formatter.step({
  "line": 60,
  "name": "user enter valid address",
  "keyword": "And "
});
formatter.step({
  "line": 61,
  "name": "user enter valid creditcardnum",
  "keyword": "And "
});
formatter.step({
  "line": 62,
  "name": "user select valid creditcardtype",
  "keyword": "And "
});
formatter.step({
  "line": 63,
  "name": "user select valid eMonth",
  "keyword": "And "
});
formatter.step({
  "line": 64,
  "name": "user select valid eYear",
  "keyword": "And "
});
formatter.step({
  "line": 65,
  "name": "user enter valid ccvnum",
  "keyword": "And "
});
formatter.step({
  "line": 66,
  "name": "user verify the booknow in the paymentpages",
  "keyword": "And "
});
formatter.step({
  "line": 67,
  "name": "user verify logoutoption",
  "keyword": "Then "
});
formatter.match({
  "location": "SearchHotel.user_select_valid_location()"
});
formatter.result({
  "duration": 90737200,
  "status": "passed"
});
formatter.match({
  "location": "SearchHotel.user_select_valid_hotal()"
});
formatter.result({
  "duration": 95628300,
  "status": "passed"
});
formatter.match({
  "location": "SearchHotel.user_select_valid_numbertype()"
});
formatter.result({
  "duration": 83782500,
  "status": "passed"
});
formatter.match({
  "location": "SearchHotel.user_select_valid_numberofrooms()"
});
formatter.result({
  "duration": 65126800,
  "status": "passed"
});
formatter.match({
  "location": "SearchHotel.user_enter_valid_checkin()"
});
formatter.result({
  "duration": 95177600,
  "status": "passed"
});
formatter.match({
  "location": "SearchHotel.user_enter_valid_checkout()"
});
formatter.result({
  "duration": 86855900,
  "status": "passed"
});
formatter.match({
  "location": "SearchHotel.user_select_valid_adults()"
});
formatter.result({
  "duration": 125935500,
  "status": "passed"
});
formatter.match({
  "location": "SearchHotel.user_select_valid_child()"
});
formatter.result({
  "duration": 116654400,
  "status": "passed"
});
formatter.match({
  "location": "SearchHotel.user_verify_the_search_in_the_searchhotelpage()"
});
formatter.result({
  "duration": 891618000,
  "status": "passed"
});
formatter.match({
  "location": "SelectHotel.user_select_valid_hotel()"
});
formatter.result({
  "duration": 65615900,
  "status": "passed"
});
formatter.match({
  "location": "SelectHotel.user_verify_the_selection_in_the_selecthotelpage()"
});
formatter.result({
  "duration": 757709900,
  "status": "passed"
});
formatter.match({
  "location": "SelectPayment.user_enter_valid_firstname()"
});
formatter.result({
  "duration": 81488200,
  "status": "passed"
});
formatter.match({
  "location": "SelectPayment.user_enter_valid_lastname()"
});
formatter.result({
  "duration": 73199300,
  "status": "passed"
});
formatter.match({
  "location": "SelectPayment.user_enter_valid_address()"
});
formatter.result({
  "duration": 65853300,
  "status": "passed"
});
formatter.match({
  "location": "SelectPayment.user_enter_valid_creditcardnum()"
});
formatter.result({
  "duration": 113321100,
  "status": "passed"
});
formatter.match({
  "location": "SelectPayment.user_select_valid_creditcardtype()"
});
formatter.result({
  "duration": 78006900,
  "status": "passed"
});
formatter.match({
  "location": "SelectPayment.user_select_valid_eMonth()"
});
formatter.result({
  "duration": 105206600,
  "status": "passed"
});
formatter.match({
  "location": "SelectPayment.user_select_valid_eYear()"
});
formatter.result({
  "duration": 79937500,
  "status": "passed"
});
formatter.match({
  "location": "SelectPayment.user_enter_valid_ccvnum()"
});
formatter.result({
  "duration": 57746200,
  "status": "passed"
});
formatter.match({
  "location": "SelectPayment.user_verify_the_booknow_in_the_paymentpages()"
});
formatter.result({
  "duration": 8062696000,
  "status": "passed"
});
formatter.match({
  "location": "SelectPayment.user_verify_logoutoption()"
});
formatter.result({
  "duration": 2607202600,
  "status": "passed"
});
formatter.after({
  "duration": 52700,
  "status": "passed"
});
formatter.before({
  "duration": 51000,
  "status": "passed"
});
formatter.background({
  "line": 3,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 4,
  "name": "user enter application url",
  "keyword": "When "
});
formatter.step({
  "line": 5,
  "name": "user enter \"DKGreens\" as username",
  "keyword": "And "
});
formatter.step({
  "line": 6,
  "name": "user enter \"greens\" as password",
  "keyword": "And "
});
formatter.step({
  "line": 7,
  "name": "user verify the username in the homepage",
  "keyword": "Then "
});
formatter.match({
  "location": "Login.user_enter_application_url()"
});
formatter.result({
  "duration": 611160400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "DKGreens",
      "offset": 12
    }
  ],
  "location": "Login.user_enter_as_username(String)"
});
formatter.result({
  "duration": 74730000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "greens",
      "offset": 12
    }
  ],
  "location": "Login.user_enter_as_password(String)"
});
formatter.result({
  "duration": 58582800,
  "status": "passed"
});
formatter.match({
  "location": "Login.user_verify_the_username_in_the_homepage()"
});
formatter.result({
  "duration": 788015200,
  "status": "passed"
});
formatter.scenario({
  "line": 70,
  "name": "Successfull searchhotel-3 into the adactin application with valid credential",
  "description": "",
  "id": "login-functionality-for-adactin-application;successfull-searchhotel-3-into-the-adactin-application-with-valid-credential",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 69,
      "name": "@SearchHotel3"
    }
  ]
});
formatter.step({
  "line": 71,
  "name": "user select valid location",
  "keyword": "When "
});
formatter.step({
  "line": 72,
  "name": "user select valid hotal",
  "keyword": "And "
});
formatter.step({
  "line": 73,
  "name": "user select valid numbertype",
  "keyword": "And "
});
formatter.step({
  "line": 74,
  "name": "user select valid numberofrooms",
  "keyword": "And "
});
formatter.step({
  "line": 75,
  "name": "user enter valid checkin",
  "keyword": "And "
});
formatter.step({
  "line": 76,
  "name": "user enter valid checkout",
  "keyword": "And "
});
formatter.step({
  "line": 77,
  "name": "user select valid adults",
  "keyword": "And "
});
formatter.step({
  "line": 78,
  "name": "user select valid child",
  "keyword": "And "
});
formatter.step({
  "line": 79,
  "name": "user verify the search in the searchhotelpage",
  "keyword": "Then "
});
formatter.step({
  "line": 80,
  "name": "user select valid hotel",
  "keyword": "When "
});
formatter.step({
  "line": 81,
  "name": "user verify the selection in the selecthotelpage",
  "keyword": "Then "
});
formatter.step({
  "line": 82,
  "name": "user enter valid firstname",
  "keyword": "When "
});
formatter.step({
  "line": 83,
  "name": "user enter valid lastname",
  "keyword": "And "
});
formatter.step({
  "line": 84,
  "name": "user enter valid address",
  "keyword": "And "
});
formatter.step({
  "line": 85,
  "name": "user enter valid creditcardnum",
  "keyword": "And "
});
formatter.step({
  "line": 86,
  "name": "user select valid creditcardtype",
  "keyword": "And "
});
formatter.step({
  "line": 87,
  "name": "user select valid eMonth",
  "keyword": "And "
});
formatter.step({
  "line": 88,
  "name": "user select valid eYear",
  "keyword": "And "
});
formatter.step({
  "line": 89,
  "name": "user enter valid ccvnum",
  "keyword": "And "
});
formatter.step({
  "line": 90,
  "name": "user verify the booknow in the paymentpages",
  "keyword": "And "
});
formatter.step({
  "line": 91,
  "name": "user verify logoutoption",
  "keyword": "Then "
});
formatter.match({
  "location": "SearchHotel.user_select_valid_location()"
});
formatter.result({
  "duration": 81296100,
  "status": "passed"
});
formatter.match({
  "location": "SearchHotel.user_select_valid_hotal()"
});
formatter.result({
  "duration": 75958700,
  "status": "passed"
});
formatter.match({
  "location": "SearchHotel.user_select_valid_numbertype()"
});
formatter.result({
  "duration": 97986600,
  "status": "passed"
});
formatter.match({
  "location": "SearchHotel.user_select_valid_numberofrooms()"
});
formatter.result({
  "duration": 103714700,
  "status": "passed"
});
formatter.match({
  "location": "SearchHotel.user_enter_valid_checkin()"
});
formatter.result({
  "duration": 104030900,
  "status": "passed"
});
formatter.match({
  "location": "SearchHotel.user_enter_valid_checkout()"
});
formatter.result({
  "duration": 100408500,
  "status": "passed"
});
formatter.match({
  "location": "SearchHotel.user_select_valid_adults()"
});
formatter.result({
  "duration": 104844600,
  "status": "passed"
});
formatter.match({
  "location": "SearchHotel.user_select_valid_child()"
});
formatter.result({
  "duration": 117891900,
  "status": "passed"
});
formatter.match({
  "location": "SearchHotel.user_verify_the_search_in_the_searchhotelpage()"
});
formatter.result({
  "duration": 812779700,
  "status": "passed"
});
formatter.match({
  "location": "SelectHotel.user_select_valid_hotel()"
});
formatter.result({
  "duration": 70669200,
  "status": "passed"
});
formatter.match({
  "location": "SelectHotel.user_verify_the_selection_in_the_selecthotelpage()"
});
formatter.result({
  "duration": 1122678700,
  "status": "passed"
});
formatter.match({
  "location": "SelectPayment.user_enter_valid_firstname()"
});
formatter.result({
  "duration": 81339300,
  "status": "passed"
});
formatter.match({
  "location": "SelectPayment.user_enter_valid_lastname()"
});
formatter.result({
  "duration": 64531200,
  "status": "passed"
});
formatter.match({
  "location": "SelectPayment.user_enter_valid_address()"
});
formatter.result({
  "duration": 74153500,
  "status": "passed"
});
formatter.match({
  "location": "SelectPayment.user_enter_valid_creditcardnum()"
});
formatter.result({
  "duration": 109342600,
  "status": "passed"
});
formatter.match({
  "location": "SelectPayment.user_select_valid_creditcardtype()"
});
formatter.result({
  "duration": 77572100,
  "status": "passed"
});
formatter.match({
  "location": "SelectPayment.user_select_valid_eMonth()"
});
formatter.result({
  "duration": 78942800,
  "status": "passed"
});
formatter.match({
  "location": "SelectPayment.user_select_valid_eYear()"
});
formatter.result({
  "duration": 78447500,
  "status": "passed"
});
formatter.match({
  "location": "SelectPayment.user_enter_valid_ccvnum()"
});
formatter.result({
  "duration": 53500400,
  "status": "passed"
});
formatter.match({
  "location": "SelectPayment.user_verify_the_booknow_in_the_paymentpages()"
});
formatter.result({
  "duration": 8067451200,
  "status": "passed"
});
formatter.match({
  "location": "SelectPayment.user_verify_logoutoption()"
});
formatter.result({
  "duration": 798211400,
  "status": "passed"
});
formatter.after({
  "duration": 52400,
  "status": "passed"
});
});